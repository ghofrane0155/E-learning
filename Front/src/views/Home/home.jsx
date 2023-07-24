import Carousel from "../../components/Carousel/carousel"
import Footer from "../../layouts/Footer/footer"
import Navbar from "../../layouts/Navbar/navbar"

import Services from "../../components/Services/services"
import About from "../../components/About/about"
import Categories from "../../components/Categories/categories"
import Courses from "../../components/Courses/courses"
import Team from "../../components/Team/team"

export default () => {
    return(
        <>
        <Navbar/>
            <Carousel/> 
            <Services/> 
            <About/>
            <Categories/>
            <Courses/>
            <Team/>
        <Footer/>

        <a href="#" class="btn btn-lg btn-primary btn-lg-square back-to-top"><i class="bi bi-arrow-up"></i></a>
        </>
    )
}