import Footer from "../../layouts/Footer/footer"
import Navbar from "../../layouts/Navbar/navbar"

export default () => {
    return(
        <>
        <Navbar/>
        <div className="container-xxl py-5">
        <div className="container">
            <div className="text-center wow fadeInUp" data-wow-delay="0.1s">
                <h6 className="section-title bg-white text-center text-primary px-3">Join Us Today!</h6>
                <h1 className="mb-5">Sign Up</h1>
            </div>
            <div className="row g-4">  
                <div class="col-lg-12 col-md-12 wow fadeInUp" data-wow-delay="0.5s">

                    <div className="row g-3">
                        <div className="col-md-6">
                            <div className="form-floating">
                                <input type="text" className="form-control" id="name" placeholder="Your Name" />
                                <label htmlFor="name">Your Name</label>
                            </div>
                        </div>
                    
                        <div className="col-md-6">
                            <div className="form-floating">
                                <input type="email" className="form-control" id="email" placeholder="Your Email" />
                                <label htmlFor="email">Your Email</label>
                            </div>
                        </div>

                        <div className="col-12">
                            <div className="form-floating">
                                <input type="text" className="form-control" id="Username" placeholder="Username" />
                                <label htmlFor="Username">Username</label>
                            </div>
                        </div>

                        <div className="col-12">
                            <div className="form-floating">
                                <input type="Password" className="form-control" id="Password" placeholder="Password" />
                                <label htmlFor="Password">Password</label>
                            </div>
                        </div>

                        <div className="col-12">
                            <div className="form-floating">
                                <input type="text" className="form-control" id="Adress" placeholder="Adress" />
                                <label htmlFor="Adress">Adress</label>
                            </div>
                        </div>

                        <div className="col-12">
                            <div className="form-floating">
                                <input type="text" className="form-control" id="Phone" placeholder="Phone" />
                                <label htmlFor="Phone">Phone</label>
                            </div>
                        </div>
                        <div className="col-12">
                            <button className="btn btn-primary w-100 py-3" type="submit">Sign Up</button>
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