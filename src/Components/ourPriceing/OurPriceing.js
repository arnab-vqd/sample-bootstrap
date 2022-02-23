import React from "react";
import '../ourPriceing/ourPriceing.css'
 const OurPriceing=()=>{

  //     const e = document.getElementById("filt-monthly");
  //     const d = document.getElementById("filt-hourly");
  //     const t = document.getElementById("switcher");
  //     const m = document.getElementById("monthly");
  //     const y = document.getElementById("hourly");

  // e.addEventListener("click", ()=>{
  //   t.checked = false;
  //   e.classList.add("toggler--is-active");
  //   d.classList.remove("toggler--is-active");
  //   m.classList.remove("hide");
  //   y.classList.add("hide");
  // });

  // d.addEventListener("click", ()=>{
  //   t.checked = true;
  //   d.classList.add("toggler--is-active");
  //   e.classList.remove("toggler--is-active");
  //   m.classList.add("hide");
  //   y.classList.remove("hide");
  // });

  // t.addEventListener("click", ()=>{
  //   d.classList.toggle("toggler--is-active");
  //   e.classList.toggle("toggler--is-active");
  //   m.classList.toggle("hide");
  //   y.classList.toggle("hide");
  // })
  return(
            <div className="bg-gray">
    <div className="container  pt-10">
      <div className="row">
        <div className="col-md-12 text-center">
          <div>
            <span className="blue-clr font-16">Read Out Our</span>
            <h2 className="font-48 ">  Pricing Offers  </h2>
            

          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-md-4"></div>
        <div className="col-md-4">
        
            <div class="price-toggle-wrapper heading_space">
              <span class="Pricing-toggle-button month active">Monthly</span>
              <span class="Pricing-toggle-button year">Yearly</span>
            </div>

        </div>
        <div className="col-md-4"></div>
      </div>
      <div className="row">
        <div class="col-lg-4 col-md-12 mb-4">
            <div class="card h-100 pricing-item shadow-lg">
              <div class="card-body">
                <div class="text-center p-3">
                  <h5 class="card-title darkcolor font-light font-24">Basic</h5>
                  <small className="small-text ">The standard version</small>
                  <br/><br/>
                  <div className="bdr-xy">
                  <span className="font-48">$9.95</span>/month
                  </div>
                  <br/><br/>
                  <ul class="pricing-list list-style-none">
                              <li> <i class="fa fa-check" aria-hidden="true"></i> <span>Support forum</span></li>
                              <li> <i class="fa fa-check" aria-hidden="true"></i><span>Free hosting</span></li>
                              <li class="price-not"><i class="fa fa-times" aria-hidden="true"></i><span>40MB of storage space</span></li>
                              <li class="price-not"><i class="fa fa-times" aria-hidden="true"></i><span>Social media integration</span></li>
                              <li class="price-not"><i class="fa fa-times" aria-hidden="true"></i><span>10GB of storage space</span></li>
                          </ul>
                </div>
              
              </div>
              
              <div class="card-body text-center">
                <button class="btn-blue" >Choose plan</button>
              </div>
            </div>
        </div>
        <div class="col-lg-4 col-md-12 mb-4">
            <div class="card h-100 pricing-item shadow-lg active">
              <div class="card-body">
                <div class="text-center p-3">
                  <h5 class="card-title darkcolor font-light font-24">Basic</h5>
                  <small className="small-text ">The standard version</small>
                  <br/><br/>
                  <div className="bdr-xy">
                  <span className="font-48">$19.95</span>/month
                  </div>
                  <br/><br/>
                  <ul class="pricing-list list-style-none">
                              <li> <i class="fa fa-check" aria-hidden="true"></i> <span>Support forum</span></li>
                              <li> <i class="fa fa-check" aria-hidden="true"></i><span>Free hosting</span></li>
                              <li ><i class="fa fa-check" aria-hidden="true"></i><span>40MB of storage space</span></li>
                              <li class="price-not"><i class="fa fa-times" aria-hidden="true"></i><span>Social media integration</span></li>
                              <li class="price-not"><i class="fa fa-times" aria-hidden="true"></i><span>10GB of storage space</span></li>
                          </ul>
                </div>
              
              </div>
              
              <div class="card-body text-center">
                <button class="btn-blue" >Choose plan</button>
              </div>
            </div>
        </div>
        <div class="col-lg-4 col-md-12 mb-4">
            <div class="card h-100 pricing-item shadow-lg ">
              <div class="card-body">
                <div class="text-center p-3">
                  <h5 class="card-title darkcolor font-light font-24">Basic</h5>
                  <small className="small-text ">The standard version</small>
                  <br/><br/>
                  <div className="bdr-xy">
                  <span className="font-48">$29.95</span>/month
                  </div>
                  <br/><br/>
                  <ul class="pricing-list list-style-none">
                              <li> <i class="fa fa-check" aria-hidden="true"></i> <span>Support forum</span></li>
                              <li> <i class="fa fa-check" aria-hidden="true"></i><span>Free hosting</span></li>
                              <li class="price-not"><i class="fa fa-check" aria-hidden="true"></i><span>40MB of storage space</span></li>
                              <li class="price-not"><i class="fa fa-check" aria-hidden="true"></i><span>Social media integration</span></li>
                              <li class="price-not"><i class="fa fa-times" aria-hidden="true"></i><span>10GB of storage space</span></li>
                          </ul>
                </div>
              
              </div>
              
              <div class="card-body text-center">
                <button class="btn-blue" >Choose plan</button>
              </div>
            </div>
        </div>
      </div>
    </div>
  
            </div>
        )
    }

export default OurPriceing;