import React from 'react';
import '../businessNextLevel/businessNextLevel.css';
function BusinessNextLevel() {
  return (<>
   <div className="container  pad-xy">
      <div className="row p-0-5  align-items-center">
        <div className=" col-md-7  ">
          <div className=" mb-4">
            <h2 className="font-48 text-black1 fw-4 ">Lets take your</h2>
            <h2  className="font-48 text-black1  fw-4"> <span className="blue-clr">Business</span> to Next
              Level</h2>
          </div>
          <p className="text-secondary py-4 pr-6">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc mauris arcu, lobortis id
            interdum vitae, interdum eget elit. Curabitur quis urna nulla. Suspendisse potenti. Duis suscipit ultrices
            maximus. </p>
          <a href="#" className="button btngrident  btn btn-primary">Learn More</a>
        </div>
        <div className="col-md-5 ">
          <div className="image "><img alt="SEO" className='w-100' src="assets/teaimg.png"/></div>
        </div>
      </div>
    </div>
  </>);
}

export default BusinessNextLevel;
