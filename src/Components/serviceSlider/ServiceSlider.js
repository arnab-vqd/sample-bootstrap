import React from 'react';
import '../serviceSlider/serviceSlider.css'
import Slider from "react-slick";

class ServiceSlider  extends React.Component {
  render(){
    const settings = {
        dots: false,
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        speed: 2000,
        autoplaySpeed: 2000,
        cssEase: "linear"
      };

  return (
      <>
      <div className="container ">
      <div className="row bodycontainer p-0-5">
<Slider {...settings} >
      

        <div className="col-md-4">
          <div className="card card-box bg-globe">
            <span className="text-center "><i className="fa fa-globe fa-2x"></i></span>

            <div className="card-body  text-center ">

              <h4 className="a-link"><a href="#" className="text-decoration-none font-18 ">SEO Optimized</a></h4>
              <p className="font-15">This is Photoshop's version of Lorem Ipsum. Proin gravida nibh vel velit auctor aliquet</p>

            </div>
          </div>
        </div>
        <div className="col-md-4">
          <div className="card card-box  text-center  bg-clipboard">
            <span className="text-center "><i className="fa fa-clipboard fa-2x"></i></span>

            <div className="card-body">

              <h4 className="a-link"><a href="#" className="text-decoration-none font-18">Well Documented</a></h4>
              <p className="font-15">This is Photoshop's version of Lorem Ipsum. Proin gravida nibh vel velit auctor aliquet</p>

            </div>
          </div>
        </div>
        <div className="col-md-4">
          <div className="card card-box text-center bg-laptop">
            <span className="a-link"><i className="fa fa-laptop fa-2x"></i></span>

            <div className="card-body ">

              <h4 className="a-link"><a href="#" className="text-decoration-none font-18" >Fully Responsive</a></h4>
              <p className="font-15" className="font-15">This is Photoshop's version of Lorem Ipsum. Proin gravida nibh vel velit auctor aliquet</p>

            </div>
          </div>
        </div>
        

      
    </Slider>
    </div>
    </div>
      </>
  );}
};

export default ServiceSlider;
