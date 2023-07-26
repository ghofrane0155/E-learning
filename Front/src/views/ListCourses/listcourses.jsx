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
  const [listcourses , setlistcourses]=useState([])
  console.log(listcourses,"liste courses ******")

  //get all
  const getAllCourses=()=>{
    axiosApi.get("http://localhost:5000/courses").then(res=>{
      //console.log(res, "response courses ****************")
      setlistcourses(res.data.data)
    }).catch(err=>{
      console.log(err.message);
    })
  }

  useEffect(()=>{
    getAllCourses()
  },[])

  //delete Courses
  const deleteCourses=(id)=>{
    axiosApi.delete("http://localhost:5000/courses/"+id).then((res)=>{
      let arr=[...listcourses]
      setlistcourses(arr.filter(c=>c._id !== id))
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
              src={"http://localhost:5000/file/courses/"+record.file} />
          )
        },
        {
          title: 'Title',
          dataIndex: 'title',
          key: 'title',
        },
        {
          title: 'Description',
          dataIndex: 'description',
          key: 'description',
        },
        {
          title: 'Trainer',
          dataIndex: 'trainer',
          key: 'trainer',
        },
        {
          title: 'Student Number',
          dataIndex: 'student_number',
          key: 'student_number',
        },
        {
          title: 'Duree',
          dataIndex: 'duree',
          key: 'duree',
        },
        {
          title: 'Category',
          dataIndex: 'category',
          key: 'category',
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
                  deleteCourses(record._id)
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
        <div class="container-fluid bg-primary py-5 mb-5 page-header">
            <div class="container py-5">
                <div class="row justify-content-center">
                    <div class="col-lg-10 text-center">
                        <h1 class="display-3 text-white animated slideInDown">Courses</h1>
                        <nav aria-label="breadcrumb">
                            <ol class="breadcrumb justify-content-center">
                                <li class="breadcrumb-item"><a class="text-white" href="/">Home</a></li>
                                <li class="breadcrumb-item text-white active" aria-current="page">Courses</li>
                            </ol>
                        </nav>
                    </div>
                </div>
            </div>
        </div>

        <div className="container-xxl py-5">
            <div className="container">
                <div className="text-center wow fadeInUp" data-wow-delay="0.1s">  
                    <h6 className="section-title bg-white text-center text-primary px-3">List Courses</h6>
                    <Table dataSource={listcourses} columns={columns} />
                </div>
            </div>
        </div>

        <Footer/>
        </>
    )
}