import React,{useState} from "react";
import '../ourPriceing/ourPriceing.css'
 const OurPriceing=()=>{
  const [switchToggle, setSwitchToggle]=useState(false);
  const [activeHover, setActiveHover]=useState(false);
  const toggleSwitch=()=>{
    switchToggle?setSwitchToggle(false): setSwitchToggle(true);
    console.log(switchToggle);
  }
 
  return(
            <div className="bg-gray" id="ourPriceing">
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
        
            <div class="price-toggle-wrapper heading_space" onClick={toggleSwitch}>
              <span className={switchToggle?"Pricing-toggle-button month active":"Pricing-toggle-button month "}>Monthly</span>
              <span className={switchToggle?"Pricing-toggle-button year":"Pricing-toggle-button year  active "}>Yearly</span>
            </div>

        </div>
        <div className="col-md-4"></div>
      </div>
      <div className="row">
        <div class="col-lg-4 col-md-12 mb-4" onMouseEnter={e=>setActiveHover(true)} onMouseLeave={e=>setActiveHover(false)}>
            <div className={activeHover?"card h-100 pricing-item shadow-lg active":"card h-100 pricing-item shadow-lg "}>
              <div class="card-body">
                <div class="text-center p-3  card-items">
                  <h5 class="card-title darkcolor font-light font-24">Basic</h5>
                  <small className="small-text ">The standard version</small>
                  <br/><br/>
                  <div className="bdr-xy">
                    {switchToggle?
                  (<><span className="font-48">$9.95</span><span>/month</span></>)
                  :
                  (<><span className="font-48">$89.55</span><span>/year</span></>)
                  }
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
        <div class="col-lg-4 col-md-12 mb-4"  onMouseEnter={e=>setActiveHover(false)} onMouseLeave={e=>setActiveHover(true)}>
            <div className={activeHover?"card h-100 pricing-item shadow-lg  ":"card h-100 pricing-item shadow-lg  active"}>
              <div class="card-body">
                <div class="text-center p-3  card-items">
                  <h5 class="card-title darkcolor font-light font-24">Popular</h5>
                  <small className="small-text ">The standard version</small>
                  <br/><br/>
                  <div className="bdr-xy">
                  {switchToggle?
                  (<><span className="font-48">$19.95</span><span>/month</span></>)
                  :
                  (<><span className="font-48">$179.55</span><span>/year</span></>)
                  }
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
        <div class="col-lg-4 col-md-12 mb-4"  onMouseEnter={e=>setActiveHover(true)} onMouseLeave={e=>setActiveHover(false)}>
            <div className={activeHover?"card h-100 pricing-item shadow-lg active":"card h-100 pricing-item shadow-lg "}>
              <div class="card-body">
                <div class="text-center p-3 card-items">
                  <h5 class="card-title darkcolor font-light font-24">Enterprise</h5>
                  <small className="small-text ">The standard version</small>
                  <br/><br/>
                  <div className="bdr-xy">
                  { switchToggle?(<>
                  <span className="font-48">$29.95</span> 
                  <span>/month</span></>)
                  :(<><span className="font-48">$269.55</span>
                  <span>/year</span></>)
                }
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