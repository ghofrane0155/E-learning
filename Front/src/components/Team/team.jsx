import team1 from '../../assets/img/team1.jpg';
import team2 from '../../assets/img/team2.jpg';
import team3 from '../../assets/img/team3.jpg';
import team4 from '../../assets/img/team4.jpg';


export default () => {
    return(
      <>
      <div className="container-xxl py-5">
        <div className="container">
          <div className="text-center wow fadeInUp" data-wow-delay="0.1s">
            <h6 className="section-title bg-white text-center text-primary px-3">Instructors</h6>
            <h1 className="mb-5">Expert Instructors</h1>
          </div>
          <div className="row g-4">
            <div className="col-lg-3 col-md-6 wow fadeInUp" data-wow-delay="0.1s">
              <div className="team-item bg-light">
                <div className="overflow-hidden">
                  <img className="img-fluid" src={`${team1}`} alt />
                </div>
                <div className="position-relative d-flex justify-content-center" style={{marginTop: '-23px'}}>
                  <div className="bg-light d-flex justify-content-center pt-2 px-1">
                    <a className="btn btn-sm-square btn-primary mx-1" href><i className="fab fa-facebook-f" /></a>
                    <a className="btn btn-sm-square btn-primary mx-1" href><i className="fab fa-twitter" /></a>
                    <a className="btn btn-sm-square btn-primary mx-1" href><i className="fab fa-instagram" /></a>
                  </div>
                </div>
                <div className="text-center p-4">
                  <h5 className="mb-0">Instructor Name</h5>
                  <small>Designation</small>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 wow fadeInUp" data-wow-delay="0.3s">
              <div className="team-item bg-light">
                <div className="overflow-hidden">
                  <img className="img-fluid" src={`${team2}`} alt />
                </div>
                <div className="position-relative d-flex justify-content-center" style={{marginTop: '-23px'}}>
                  <div className="bg-light d-flex justify-content-center pt-2 px-1">
                    <a className="btn btn-sm-square btn-primary mx-1" href><i className="fab fa-facebook-f" /></a>
                    <a className="btn btn-sm-square btn-primary mx-1" href><i className="fab fa-twitter" /></a>
                    <a className="btn btn-sm-square btn-primary mx-1" href><i className="fab fa-instagram" /></a>
                  </div>
                </div>
                <div className="text-center p-4">
                  <h5 className="mb-0">Instructor Name</h5>
                  <small>Designation</small>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 wow fadeInUp" data-wow-delay="0.5s">
              <div className="team-item bg-light">
                <div className="overflow-hidden">
                  <img className="img-fluid" src={`${team3}`} alt />
                </div>
                <div className="position-relative d-flex justify-content-center" style={{marginTop: '-23px'}}>
                  <div className="bg-light d-flex justify-content-center pt-2 px-1">
                    <a className="btn btn-sm-square btn-primary mx-1" href><i className="fab fa-facebook-f" /></a>
                    <a className="btn btn-sm-square btn-primary mx-1" href><i className="fab fa-twitter" /></a>
                    <a className="btn btn-sm-square btn-primary mx-1" href><i className="fab fa-instagram" /></a>
                  </div>
                </div>
                <div className="text-center p-4">
                  <h5 className="mb-0">Instructor Name</h5>
                  <small>Designation</small>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 wow fadeInUp" data-wow-delay="0.7s">
              <div className="team-item bg-light">
                <div className="overflow-hidden">
                  <img className="img-fluid" src={`${team4}`} alt />
                </div>
                <div className="position-relative d-flex justify-content-center" style={{marginTop: '-23px'}}>
                  <div className="bg-light d-flex justify-content-center pt-2 px-1">
                    <a className="btn btn-sm-square btn-primary mx-1" href><i className="fab fa-facebook-f" /></a>
                    <a className="btn btn-sm-square btn-primary mx-1" href><i className="fab fa-twitter" /></a>
                    <a className="btn btn-sm-square btn-primary mx-1" href><i className="fab fa-instagram" /></a>
                  </div>
                </div>
                <div className="text-center p-4">
                  <h5 className="mb-0">Instructor Name</h5>
                  <small>Designation</small>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      </>
    )
}