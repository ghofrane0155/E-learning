import font1 from '../../assets/img/carousel1.jpg';
import font2 from '../../assets/img/carousel2.jpg';
import { Carousel } from 'antd';


export default () => {
    const contentStyle = {
        margin: 0,
        height: '160px',
        color: '#fff',
        lineHeight: '160px',
        textAlign: 'center',
        background: '#364D79',
      };
      const onChange = (currentSlide) => {
        console.log(currentSlide);
      };
    return(
        <>
        <div className="container-fluid p-0 mb-5">
            <Carousel afterChange={onChange}>
                <div className="position-relative" style={contentStyle}>
                    <img className="img-fluid" src={`${font2}`} alt  width="100%"/>
                    <div className="position-absolute top-0 start-0 w-100 h-100 d-flex align-items-center" style={{background: 'rgba(24, 29, 56, .7)'}}>
                    <div className="container">
                        <div className="row justify-content-start">
                        <div className="col-sm-10 col-lg-8">
                            <h5 className="text-primary text-uppercase mb-3 animated slideInDown">Best Online Courses</h5>
                            <h1 className="display-3 text-white animated slideInDown">The Best Online Learning Platform</h1>
                        </div>
                        </div>
                    </div>
                    </div>
                </div>
                <div className="position-relative" style={contentStyle}>
                    <img className="img-fluid" src={`${font1}`} alt width="130%" height="300%"/>
                    <div className="position-absolute top-0 start-0 w-100 h-100 d-flex align-items-center" style={{background: 'rgba(24, 29, 56, .7)'}}>
                    <div className="container">
                        <div className="row justify-content-start">
                        <div className="col-sm-10 col-lg-8">
                            <h5 className="text-primary text-uppercase mb-3 animated slideInDown">Best Online Courses</h5>
                            <h1 className="display-3 text-white animated slideInDown">Get Educated Online From Your Home</h1>
                            <p className="fs-5 text-white mb-4 pb-2">Vero elitr justo clita lorem. Ipsum dolor at sed stet sit diam no. Kasd rebum ipsum et diam justo clita et kasd rebum sea sanctus eirmod elitr.</p>
                            <a href className="btn btn-primary py-md-3 px-md-5 me-3 animated slideInLeft">Read More</a>
                            <a href className="btn btn-light py-md-3 px-md-5 animated slideInRight">Join Now</a>
                        </div>
                        </div>
                    </div>
                    </div>
                </div>
            </Carousel>
        </div>
        </>
    )
}