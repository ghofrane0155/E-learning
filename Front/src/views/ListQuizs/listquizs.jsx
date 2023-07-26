import Footer from "../../layouts/Footer/footer";
import Navbar from "../../layouts/Navbar/navbar"
import { Table, Button } from "antd";

import { EditOutlined,DeleteOutlined } from '@ant-design/icons';
/////////charger liste et delete/////////////////
import { useEffect, useState } from "react";
import axios from "axios";
import axiosApi from "../../config/axios";
import Swal from "sweetalert2";
///////////////////////////////
export default () => {
  /////////////////////////////////////
  const [listquizs , setlistquizs]=useState([])
  console.log(listquizs,"liste quizs ******")

  //get all
  const getAllQuizs=()=>{
    axiosApi.get("http://localhost:5000/quizs").then(res=>{
      //console.log(res, "response quizs ****************")
      setlistquizs(res.data.data)
    }).catch(err=>{
      console.log(err.message);
    })
  }

  useEffect(()=>{
    getAllQuizs()
  },[])

  //delete quizs
  const deleteQuizs=(id)=>{
    axiosApi.delete("http://localhost:5000/quizs/"+id).then((res)=>{
      let arr=[...listquizs]
      setlistquizs(arr.filter(c=>c._id !== id))
    }).catch((err)=>{
      console.log(err.message);
    })
  }
  ////////////////////////////////////////////////////         
      const columns = [
        {
          title: 'Question',
          dataIndex: 'question',
          key: 'question',
        },
        {
          title: 'Response 1',
          dataIndex: 'rep1',
          key: 'rep1',
        },
        {
          title: 'Response 2',
          dataIndex: 'rep2',
          key: 'rep2',
        },
        {
          title: 'Response 3',
          dataIndex: 'rep3',
          key: 'rep3',
        },
        {
          title: 'Update',
          render:(text,record)=>
            <Button style={{color:"#389e0d"}} shape="round" icon={<EditOutlined />} />
        },
        {
          title: 'Delete',
          render:(text,record)=>
            <Button style={{color:"#FF0000"}} shape="round" icon={<DeleteOutlined />} 
              onClick={()=>Swal.fire({
                title: 'Are you sure?',
                text: "You won't be able to revert this!",
                icon: 'warning',
                showCancelButton: true,
                confirmButtonColor: '#3085d6',
                cancelButtonColor: '#d33',
                confirmButtonText: 'Yes, delete it!'
              }).then((result) => {
                if (result.isConfirmed) {
                  deleteQuizs(record._id)
                  Swal.fire(
                    'Deleted!',
                    'Your file has been deleted.',
                    'success'
                  )
                }
              })}/>
        },
      ];

    return(
        <>
        <Navbar/>

        <div className="container-xxl py-5">
            <div className="container">
                <div className="text-center wow fadeInUp" data-wow-delay="0.1s">  
                    <h6 className="section-title bg-white text-center text-primary px-3">List Quizs</h6>
                    <Table dataSource={listquizs} columns={columns} />
                </div>
            </div>
        </div>
        <Footer/>
        </>
    )
}