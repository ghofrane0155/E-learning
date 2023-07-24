import Navbar from "../../layouts/Navbar/navbar"
import { Table, Button } from "antd";

import { EditOutlined,DeleteOutlined } from '@ant-design/icons';
export default () => {
    const dataSource = [
        {
          key: '1',
          name: 'Mike',
          age: 32,
          address: '10 Downing Street',
        },
        {
          key: '2',
          name: 'John',
          age: 42,
          address: '10 Downing Street',
        },
      ];
      
      const columns = [
        {
          title: 'Full Name',
          dataIndex: 'age',
          key: 'age',
        },
        {
          title: 'UserName',
          dataIndex: 'address',
          key: 'address',
        },
        {
          title: 'Email',
          dataIndex: 'address',
          key: 'address',
        },
        {
          title: 'Password',
          dataIndex: 'address',
          key: 'address',
        },
        {
          title: 'Adress',
          dataIndex: 'address',
          key: 'address',
        },
        {
          title: 'Phone',
          dataIndex: 'address',
          key: 'address',
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

        <div className="container-xxl py-5">
            <div className="container">
                <div className="text-center wow fadeInUp" data-wow-delay="0.1s">  
                    <h6 className="section-title bg-white text-center text-primary px-3">List Users</h6>
                    <Table dataSource={dataSource} columns={columns} />
                </div>
            </div>
        </div>
        </>
    )
}