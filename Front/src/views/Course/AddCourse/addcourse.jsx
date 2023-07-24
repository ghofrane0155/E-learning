import Footer from "../../../layouts/Footer/footer"
import Navbar from "../../../layouts/Navbar/navbar"

export default () => {
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
                    <h6 className="section-title bg-white text-center text-primary px-3">Add Course</h6>
                    <h1 className="mb-5">Course</h1>
                </div>
                <div className="row g-4">  
                    <div class="col-lg-12 col-md-12 wow fadeInUp" data-wow-delay="0.5s">

                        <div className="row g-3">

                            <div className="col-12">
                                <div className="form-floating">
                                    <input type="text" className="form-control" id="Title" placeholder="Title" />
                                    <label htmlFor="Title">Title</label>
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
                                    <input type="text" className="form-control" id="Trainer" placeholder="Trainer" />
                                    <label htmlFor="Trainer">Trainer</label>
                                </div>
                            </div>

                            <div className="col-12">
                                <div className="form-floating">
                                    <input type="number" className="form-control" id="nbetudiant" placeholder="Nombre d'etudiant" />
                                    <label htmlFor="nbetudiant">Nombre d'etudiant</label>
                                </div>
                            </div>

                            <div className="col-12">
                                <div className="form-floating">
                                    <input type="text" className="form-control" id="duree" placeholder="duree" />
                                    <label htmlFor="duree">Durée</label>
                                </div>
                            </div>

                            <div className="col-12">
                                <div className="form-floating">
                                    <input type="text" className="form-control" id="Category" placeholder="Category" />
                                    <label htmlFor="Category">Category</label>
                                </div>
                            </div>
                    
                            <div className="col-12">
                                <button className="btn btn-primary w-100 py-3" type="submit">Add Course</button>
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