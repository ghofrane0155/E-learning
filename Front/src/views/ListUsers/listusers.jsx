import Navbar from "../../layouts/Navbar/navbar"
import Footer from "../../layouts/Footer/footer";
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
  const [listusers , setlistusers]=useState([])
  console.log(listusers,"liste users ******")

  //get all
  const getAllUsers=()=>{
    axiosApi.get("http://localhost:5000/users").then(res=>{
      //console.log(res, "response users ****************")
      setlistusers(res.data.data)
    }).catch(err=>{
      console.log(err.message);
    })
  }

  useEffect(()=>{
    getAllUsers()
  },[])

  //delete users
  const deleteUsers=(id)=>{
    axiosApi.delete("http://localhost:5000/users/"+id).then((res)=>{
      let arr=[...listusers]
      setlistusers(arr.filter(c=>c._id !== id))
    }).catch((err)=>{
      console.log(err.message);
    })
  }
  ////////////////////////////////////////////////////           
      const columns = [
        {
          title: 'Full Name',
          dataIndex: 'fullName',
          key: 'fullName',
        },
        {
          title: 'UserName',
          dataIndex: 'userName',
          key: 'userName',
        },
        {
          title: 'Email',
          dataIndex: 'email',
          key: 'email',
        },
        {
          title: 'Password',
          dataIndex: 'password',
          key: 'password',
        },
        {
          title: 'Adress',
          dataIndex: 'adress',
          key: 'adress',
        },
        {
          title: 'Phone',
          dataIndex: 'phone',
          key: 'phone',
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
                  deleteUsers(record._id)
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
                    <h6 className="section-title bg-white text-center text-primary px-3">List Users</h6>
                    <Table dataSource={listusers} columns={columns} />
                </div>
            </div>
        </div>
        <Footer/>
        </>
    )
}