import { Link } from "react-router-dom"

export default () => {
    return(
        <>
        <nav className="navbar navbar-expand-lg bg-white navbar-light shadow sticky-top p-0">
            <Link to={`/`}className="navbar-brand d-flex align-items-center px-4 px-lg-5 ">
                <h2 className="m-0 text-primary"><i className="fa fa-book me-3" />E-LEARNING</h2>
            </Link>
            <button type="button" className="navbar-toggler me-4" data-bs-toggle="collapse" data-bs-target="#navbarCollapse">
                <span className="navbar-toggler-icon" />
            </button>
            <div className="collapse navbar-collapse" id="navbarCollapse">
                <div className="navbar-nav ms-auto p-4 p-lg-0">
                    <Link to={`/`}className="nav-item nav-link ">Home</Link>
                    <Link to={`/About`}className="nav-item nav-link ">About</Link>
                    <Link to={`/Course`}className="nav-item nav-link ">Courses</Link>
                    <Link to={`/Listsections`}className="nav-item nav-link ">Sections</Link>
                    <Link to={`/Listquizs`}className="nav-item nav-link ">Quizs</Link>
                    <Link to={`/Listcategories`}className="nav-item nav-link">Categories</Link>

                    <div class="nav-item dropdown">
                        <a href="#" class="nav-link dropdown-toggle" data-bs-toggle="dropdown">More</a>
                        <div class="dropdown-menu fade-down m-0">
                            <Link to={`/Listcourses`}className="dropdown-item ">List courses</Link>
                            <Link to={`/AddCategory`}className="dropdown-item">Add Category</Link>
                            <Link to={`/AddCourse`}className="dropdown-item">Add Course</Link>
                            <Link to={`/AddSection`}className="dropdown-item">Add Section</Link>
                            <Link to={`/AddQuiz`}className="dropdown-item">Add Quiz</Link>
                            <Link to={`/404`}className="dropdown-item">404 Page</Link>
                        </div>
                    </div>

                    <Link to={`/Signin`}className="nav-link">Login<i className="fa fa-user ms-3" /></Link>
                </div>
                <Link to={`/Signup`}className="btn btn-primary py-4 px-lg-5 d-none d-lg-block">Join Now<i className="fa fa-arrow-right ms-3" /></Link>
            </div>
        </nav>
        </>
    )
}