export default () => {
    return(
        <>
        <nav className="navbar navbar-expand-lg bg-white navbar-light shadow sticky-top p-0">
            <a href="/" className="navbar-brand d-flex align-items-center px-4 px-lg-5">
                <h2 className="m-0 text-primary"><i className="fa fa-book me-3" />E-LEARNING</h2>
            </a>
            <button type="button" className="navbar-toggler me-4" data-bs-toggle="collapse" data-bs-target="#navbarCollapse">
                <span className="navbar-toggler-icon" />
            </button>
            <div className="collapse navbar-collapse" id="navbarCollapse">
                <div className="navbar-nav ms-auto p-4 p-lg-0">
                <a href="/" className="nav-item nav-link ">Home</a>
                <a href="/About" className="nav-item nav-link">About</a>
                <a href="/Listcourses" className="nav-item nav-link">Courses</a>
                <a href="/Listsections" className="nav-item nav-link">Sections</a>
                <a href="/Listquizs" className="nav-item nav-link">Quizs</a>

                <a href="/Signin" className="nav-link">Login<i className="fa fa-user ms-3" /></a>
                </div>

                <a href="/Signup" className="btn btn-primary py-4 px-lg-5 d-none d-lg-block">Join Now<i className="fa fa-arrow-right ms-3" /></a>
            </div>
        </nav>
        </>
    )
}