import Footer from "../../layouts/Footer/footer";
import Navbar from "../../layouts/Navbar/navbar"
import { Table, Button } from "antd";

import { EditOutlined,DeleteOutlined } from '@ant-design/icons';
import { useEffect, useState } from "react";
import axios from "axios";
import axiosApi from "../../config/axios";
import Swal from "sweetalert2";
import { Link } from "react-router-dom";
export default () => {

  const [listcategories , setlistcategories]=useState([])
  console.log(listcategories,"liste categories ******")

  //get all
  const getAllCategories=()=>{
    axiosApi.get("http://localhost:5000/categories").then(res=>{
      //console.log(res, "response categories ****************")

      setlistcategories(res.data.data)
    }).catch(err=>{
      console.log(err.message);
    })
  }

  useEffect(()=>{
    getAllCategories()
  },[])

  //delete category
  const deleteCategory=(id)=>{
    axiosApi.delete("http://localhost:5000/categories/"+id).then((res)=>{
      let arr=[...listcategories]

      setlistcategories(arr.filter(c=>c._id !== id))
    }).catch((err)=>{
      console.log(err.message);
    })
  }
  //////////
     
      const columns = [
        {
          title: 'File',
          //read img
          render:(text,record)=>(
            <img style={{width:'50px',height:'50px'}} 
              src={"http://localhost:5000/file/categories/"+record.file} />
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
          key: 'address',
        },
        {
          title: 'Update',
          render:(text,record)=>
          <Link to={`/updatecategory/${record._id}`}>
             <Button style={{color:"#389e0d"}} shape="round" icon={<EditOutlined />} />
          </Link>
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
                  deleteCategory(record._id)
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
                    <h6 className="section-title bg-white text-center text-primary px-3">List Categories</h6>
                    <Table dataSource={listcategories} columns={columns} />
                </div>
            </div>
        </div>
        <Footer/>
        </>
    )
}