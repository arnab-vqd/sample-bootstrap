import React from 'react';
import '../serviceSlider/serviceSlider.css'
const ServiceSlider = () => {
  return (
      <>
      <div className="container ">
      <div className="row bodycontainer p-0-5">

        <div className="col-md-4">
          <div className="card card-box bg-globe">
            <span className="text-center "><i className="fa fa-globe fa-2x"></i></span>

            <div className="card-body  text-center ">

              <h4 className="a-link"><a href="#">SEO Optimized</a></h4>
              <p>This is Photoshop's version of Lorem Ipsum. Proin gravida nibh vel velit auctor aliquet</p>

            </div>
          </div>
        </div>
        <div className="col-md-4">
          <div className="card card-box  text-center  bg-clipboard">
            <span className="text-center "><i className="fa fa-clipboard fa-2x"></i></span>

            <div className="card-body">

              <h4 className="a-link"><a href="#">Well Documented</a></h4>
              <p>This is Photoshop's version of Lorem Ipsum. Proin gravida nibh vel velit auctor aliquet</p>

            </div>
          </div>
        </div>
        <div className="col-md-4">
          <div className="card card-box text-center bg-laptop">
            <span className="a-link"><i className="fa fa-laptop fa-2x"></i></span>

            <div className="card-body ">

              <h4 className="a-link"><a href="#">Fully Responsive</a></h4>
              <p>This is Photoshop's version of Lorem Ipsum. Proin gravida nibh vel velit auctor aliquet</p>

            </div>
          </div>
        </div>

      </div>
    </div>
      </>
  );
};

export default ServiceSlider;
