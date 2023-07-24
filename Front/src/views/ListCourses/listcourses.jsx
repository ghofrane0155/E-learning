import Footer from "../../layouts/Footer/footer";
import Navbar from "../../layouts/Navbar/navbar"
import { Table, Button } from "antd";

import { EditOutlined,DeleteOutlined } from '@ant-design/icons';
export default () => {
    const dataSource = [
        {
          key: 'file',
          title: '1',
          description:'some words here for the first file.',
          trainer:"John Doe",
          student_number :'203456789T',
          duree :" 3 days ",
          category:"hkhlj",
        },
      ];
      
      const columns = [
        {
          title: 'File',
          dataIndex: 'file',
          key: 'file',
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
            <Button style={{color:"#FF0000"}} shape="round" icon={<DeleteOutlined />} />
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
                    <Table dataSource={dataSource} columns={columns} />
                </div>
            </div>
        </div>

        <Footer/>
        </>
    )
}