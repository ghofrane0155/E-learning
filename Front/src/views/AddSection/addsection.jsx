import Footer from "../../layouts/Footer/footer"
import Navbar from "../../layouts/Navbar/navbar"

export default () => {
    return(
        <>
        <Navbar/>
        <div className="container-xxl py-5">
            <div className="container">
                <div className="text-center wow fadeInUp" data-wow-delay="0.1s">
                    <h6 className="section-title bg-white text-center text-primary px-3">Add Section</h6>
                    <h1 className="mb-5">Section</h1>
                </div>
                <div className="row g-4">  
                    <div class="col-lg-12 col-md-12 wow fadeInUp" data-wow-delay="0.5s">

                        <div className="row g-3">

                            <div className="col-12">
                                <div className="form-floating">
                                    <input type="text" className="form-control" id="Name" placeholder="Name" />
                                    <label htmlFor="Name">Name</label>
                                </div>
                            </div>

                            <div className="col-12">
                                <div className="form-floating">
                                    <input type="file" className="form-control" id="File" placeholder="File" />
                                    <label htmlFor="File">File</label>
                                </div>
                            </div>

                            <div className="col-12">
                                <div className="form-floating">
                                    <input type="text" className="form-control" id="Description" placeholder="Description" />
                                    <label htmlFor="Description">Description</label>
                                </div>
                            </div>

                            <div className="col-12">
                                <div className="form-floating">
                                    <input type="text" className="form-control" id="Course" placeholder="Course" />
                                    <label htmlFor="Course">Course</label>
                                </div>
                            </div>

                            <div className="col-12">
                                <button className="btn btn-primary w-100 py-3" type="submit">Add Section</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <Footer/>
        </>
    )
}