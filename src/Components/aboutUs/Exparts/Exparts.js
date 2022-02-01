import React from 'react';
import Cards from './cards/Cards';
import './expart.css'
function Exparts(props) {
    // let cardData= require("../Expartsdata");
    // let {data}=cardData;
  return (<>
    <section className="  pt-8">
      <div className="container">
        <div className="row align-items-center p-0-5">
          <div className="col-md-6">
            <div>
              <span className="blue-clr font-18 ">Quisque tellus risus, adipisci</span>
              <h2 className=" font-normal fw-4 font-48 ">Meet Our Experts</h2>
            </div>
          </div>
          <div className="col-md-6">
            <p className=" font-14 text-secondary">Curabitur mollis bibendum luctus. Duis suscipit vitae dui sed suscipit.
              Vestibulum auctor nunc vitae diam eleifend, in maximus metus sollicitudin. Quisque vitae sodales lectus.
            </p>
          </div>
        </div>
        
          {/* <Cards data={data}/> */}
          <Cards />
        </div>
    </section>
  </>);
}

export default Exparts;
