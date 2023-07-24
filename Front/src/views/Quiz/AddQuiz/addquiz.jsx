import Footer from "../../../layouts/Footer/footer"
import Navbar from "../../../layouts/Navbar/navbar"

export default () => {
    return(
        <>
        <Navbar/>
        <div className="container-xxl py-5">
            <div className="container">
                <div className="text-center wow fadeInUp" data-wow-delay="0.1s">
                    <h6 className="section-title bg-white text-center text-primary px-3">Add Quiz</h6>
                    <h1 className="mb-5">Quiz</h1>
                </div>
                <div className="row g-4">  
                    <div class="col-lg-12 col-md-12 wow fadeInUp" data-wow-delay="0.5s">

                        <div className="row g-3">

                            <div className="col-12">
                                <div className="form-floating">
                                    <input type="text" className="form-control" id="Question" placeholder="Question" />
                                    <label htmlFor="Question">Question</label>
                                </div>
                            </div>

                            <div className="col-12">
                                <div className="form-floating">
                                    <input type="text" className="form-control" id="rep1" placeholder="Reponse 1" />
                                    <label htmlFor="rep1">Reponse 1</label>
                                </div>
                            </div>

                            <div className="col-12">
                                <div className="form-floating">
                                    <input type="text" className="form-control" id="rep2" placeholder="Reponse 2" />
                                    <label htmlFor="rep2">Reponse 2</label>
                                </div>
                            </div>

                            <div className="col-12">
                                <div className="form-floating">
                                    <input type="text" className="form-control" id="rep3" placeholder="Reponse 3" />
                                    <label htmlFor="rep3">Reponse 3</label>
                                </div>
                            </div>

                            <div className="col-12">
                                <button className="btn btn-primary w-100 py-3" type="submit">Add Quiz</button>
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