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
  const [listsections , setlistsections]=useState([])
  console.log(listsections,"liste sections ******")

  //get all
  const getAllSections=()=>{
    axiosApi.get("http://localhost:5000/sections").then(res=>{
      //console.log(res, "response sections ****************")
      setlistsections(res.data.data)
    }).catch(err=>{
      console.log(err.message);
    })
  }

  useEffect(()=>{
    getAllSections()
  },[])

  //delete sections
  const deleteSections=(id)=>{
    axiosApi.delete("http://localhost:5000/sections/"+id).then((res)=>{
      let arr=[...listsections]
      setlistsections(arr.filter(c=>c._id !== id))
    }).catch((err)=>{
      console.log(err.message);
    })
  }
  ////////////////////////////////////////////////////   
      const columns = [
        {
          title: 'File',
          //read img
          render:(text,record)=>(
            <img style={{width:'50px',height:'50px'}} 
              src={"http://localhost:5000/file/sections/"+record.file} />
          )
        },
        {
          title: 'Name',
          dataIndex: 'name',
          key: 'name',
        },
        {
          title: 'Description',
          dataIndex: 'description',
          key: 'description',
        },
        {
          title: 'Course',
          dataIndex: 'course',
          key: 'course',
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
                  deleteSections(record._id)
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
                    <h6 className="section-title bg-white text-center text-primary px-3">List Setions</h6>
                    <Table dataSource={listsections} columns={columns} />
                </div>
            </div>
        </div>
        <Footer/>
        </>
    )
}