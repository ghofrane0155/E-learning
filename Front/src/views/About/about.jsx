import Services from "../../components/Services/services"
import About from "../../components/About/about"
import Team from "../../components/Team/team"
import Footer from "../../layouts/Footer/footer"
import Navbar from "../../layouts/Navbar/navbar"


export default () => {
    return(
        <>
        <Navbar/>
        <div className="container-fluid bg-primary py-5 mb-5 page-header">
            <div className="container py-5">
                <div className="row justify-content-center">
                <div className="col-lg-10 text-center">
                    <h1 className="display-3 text-white animated slideInDown">About Us</h1>
                    <nav aria-label="breadcrumb">
                    <ol className="breadcrumb justify-content-center">
                        <li className="breadcrumb-item"><a className="text-white" href="/">Home</a></li>
                        <li className="breadcrumb-item"><a className="text-white" href="#">Pages</a></li>
                        <li className="breadcrumb-item text-white active" aria-current="page">About</li>
                    </ol>
                    </nav>
                </div>
                </div>
            </div>
        </div>

        <Services/>
        <About/>
        <Team/>
        <Footer/>

        <a href="#" class="btn btn-lg btn-primary btn-lg-square back-to-top"><i class="bi bi-arrow-up"></i></a>
        </>
    )
}