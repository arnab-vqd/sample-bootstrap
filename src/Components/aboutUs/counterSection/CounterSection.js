import React from 'react';
import '../counterSection/counterSection.css'
function CounterSection() {
  return (<>
  <section id="bg-counters" className="pt-20 sins-bg pad-xy" >
      <div className="container">
        <div className="row align-items-center text-center text-white p-0-5">
          <div className="col-md-4  bottom10">
            <div className="bottom10">
              <span className="font-100 fw-3" data-to="2010" data-speed="2500">2010</span>
            </div>
            <h3 className="font-24 fw-3">Since We Started</h3>
          </div>
          <div className="col-md-4">
            <p className="bottom20 ">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc mauris arcu, lobortis id
              interdum vitae, interdum eget elit. </p>
          </div>
          <div className="col-md-4  bottom10">
            <div className="   bottom10">
              <span className="font-100 fw-3" data-to="895" data-speed="2500">895</span>
            </div>
            <h3 className=" font-24 fw-3">Since We Started</h3>
          </div>
        </div>
      </div>
    </section>
  </>);
}

export default CounterSection;
