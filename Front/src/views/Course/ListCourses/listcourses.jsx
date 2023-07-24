import Footer from "../../../layouts/Footer/footer";
import Navbar from "../../../layouts/Navbar/navbar"
import { Table } from "antd";
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
          title: 'Name',
          dataIndex: 'name',
          key: 'name',
        },
        {
          title: 'Age',
          dataIndex: 'age',
          key: 'age',
        },
        {
          title: 'Address',
          dataIndex: 'address',
          key: 'address',
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