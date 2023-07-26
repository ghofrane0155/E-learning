import Footer from "../../layouts/Footer/footer";
import Navbar from "../../layouts/Navbar/navbar"
import { useEffect, useState } from "react";
import axiosApi from "../../config/axios";

export default () => {
    const [listcourses , setlistcourses]=useState([])
    //get all
    const getAllCourses=()=>{
        axiosApi.get("http://localhost:5000/courses").then(res=>{
        setlistcourses(res.data.data)
        }).catch(err=>{
        console.log(err.message);
        })
    }

    useEffect(()=>{
        getAllCourses()
    },[])

    return (
        <>
        <Navbar />
        <div className="container-xxl py-5">
            <div className="container">
                <div className="text-center wow fadeInUp" data-wow-delay="0.1s">
                    <h6 className="section-title bg-white text-center text-primary px-3">Courses</h6>
                    <h1 className="mb-5">Popular Courses</h1>
                </div>

                <div className="row g-4 justify-content-center">
                    {listcourses.map((course) => (
                    <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.1s" key={course.id}>
                        <div className="course-item bg-light">
                        <div className="position-relative overflow-hidden">
                            {/* Display the course image */}
                            <img className="img-fluid" 
                                src={"http://localhost:5000/file/courses/" + course.file}
                                alt={`Course ${course.title}`}
                                style={{ width: '100%', height: '300px' }} />
                            <div className="w-100 d-flex justify-content-center position-absolute bottom-0 start-0 mb-4">
                            <a href="#" className="flex-shrink-0 btn btn-sm btn-primary px-3 border-end" style={{borderRadius: '30px 0 0 30px'}}>Read More</a>
                            <a href="#" className="flex-shrink-0 btn btn-sm btn-primary px-3" style={{borderRadius: '0 30px 30px 0'}}>Join Now</a>
                            </div>
                        </div>
                        <div className="text-center p-4 pb-0">
                            <h3 className="mb-0">$149.00</h3>
                            <div className="mb-3">
                            <small className="fa fa-star text-primary" />
                            <small className="fa fa-star text-primary" />
                            <small className="fa fa-star text-primary" />
                            <small className="fa fa-star text-primary" />
                            <small className="fa fa-star text-primary" />
                            <small>(123)</small>
                            </div>
                            <h5 className="mb-4">{course.title}</h5>
                        </div>
                        <div className="d-flex border-top">
                            <small className="flex-fill text-center border-end py-2"><i className="fa fa-user-tie text-primary me-2" />{course.trainer}</small>
                            <small className="flex-fill text-center border-end py-2"><i className="fa fa-clock text-primary me-2" />{course.duree}</small>
                            <small className="flex-fill text-center py-2"><i className="fa fa-user text-primary me-2" />{course.nbetudiant} Students</small>
                        </div>
                        </div>
                    </div>
                    ))}
                </div>
            </div>
        </div>
        <Footer/>
        </>
    )
}