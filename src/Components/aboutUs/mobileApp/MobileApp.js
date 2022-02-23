import React ,{useState} from "react";
import '../mobileApp/mobileApp.css'
  function MobileApp(){
    const [style, setStyle] = useState({display: 'none'});
    const [photoView, setPhotoview] = useState(false);
    


    // const photoViewToggle=(e)=>{
    //   if (isToggle){
    //   setPhotoview({display:'block'})
    //     }
    //     else{
    //   setPhotoview({display:'none'})
    //     }
    // }
        return(<>
        <section className="pad-xy">
      <div className="container">
        <div className="row  p-0-5 align-items-center ">
          <div className="col-md-6">
            <div>
              <span className="blue-clr font-18 ">Quisque tellus risus, adipisci viverra</span>
              <h2 className=" font-normal font-48 text-black1 fw-4 pb-4 ">Mobile App Designs</h2>
            </div>
          </div>
          <div className="col-md-6">
            <p className="text-secondary font-14 pb-4">Curabitur mollis bibendum luctus. Duis suscipit vitae dui sed suscipit.
              Vestibulum auctor nunc vitae diam eleifend, in maximus metus sollicitudin. Quisque vitae sodales lectus.
            </p>
          </div>
        </div>
          <div className="row text-secondary p-0-5">
            <div className="col-md-4 pt-10 text-end  ">
              <div className=" div-hvr">

                <div className="icon pb-3"><i className="fa fa-cog fa-2x icon-font blue-clr"></i></div>
                <div className="text">
                  <h3 className="pb-3">
                    <span className="spn-hvr">Theme Options</span>
                  </h3>
                  <p className="pb-3">This is Photoshop's version of Lorem Ipsum. Proin gravida nibh vel velit auctor aliquet</p>

                </div>
              </div>
              <div className="div-hvr ">

                <div className="icon pb-3"><i className="fa fa-edit fa-2x icon-font blue-clr"></i></div>
                <div className="text">
                  <h3 className="pb-3">
                    <span className="spn-hvr">Customization</span>
                  </h3>
                  <p className="pb-3">This is Photoshop's version of Lorem Ipsum. Proin gravida nibh vel velit auctor aliquet</p>

                </div>
              </div>
            </div>
            <div className="col-md-4 ">
              {/* <img src="assets/iphone.png" id="pnoneimg" className=" marl-3" alt=""/> */}
              {/* <div className="phoneImg">
              </div>
              <div className="  "></div> */ }

                <div class="app-image top30" onMouseEnter={e => {
                     setStyle({display: 'block'});
                 }}
                 onMouseLeave={e => {
                     setStyle({display: 'none'})
                 }}>
                    <div class="app-slider-lock-btn" style={style}  onClick={()=>setPhotoview(!photoView)}> </div>
                    {!photoView ?  <div class="app-slider-lock" >
                        <img src="assets/iphone-slide-lock.jpg" alt=""/>
                    </div>:
                    <div class="app-slider-photoView"   >
                        <img src="assets/iphone-slide1.jpg" alt=""/>
                    </div>}
                    
                    {/*<div id="app-slider" class="owl-carousel owl-theme owl-loaded owl-drag">
                        
                        
                        
                     <div class="owl-stage-outer"><div class="owl-stage" ><div class="owl-item cloned" ><div class="item">
                            <img src="assets/iphone-slide2.jpg" alt=""/>
                        </div></div><div class="owl-item cloned"><div class="item">
                            <img src="assets/iphone-slide3.jpg" alt=""/>
                        </div></div><div class="owl-item active" ><div class="item">
                            <img src="assets/iphone-slide1.jpg" alt=""/>
                        </div></div><div class="owl-item" ><div class="item">
                            <img src="assets/iphone-slide2.jpg" alt=""/>
                        </div></div><div class="owl-item" ><div class="item">
                            <img src="assets/iphone-slide3.jpg" alt=""/>
                        </div></div><div class="owl-item cloned" ><div class="item">
                            <img src="assets/iphone-slide1.jpg" alt=""/>
                        </div></div><div class="owl-item cloned" ><div class="item">
                            <img src="assets/iphone-slide2.jpg" alt=""/>
                        </div></div></div></div>
                        <div class="owl-nav disabled"><button type="button" role="presentation" class="owl-prev"><span aria-label="Previous">‹</span></button><button type="button" role="presentation" class="owl-next"><span aria-label="Next">›</span></button></div><div class="owl-dots disabled"></div></div> */}
                    <img src="assets/iphone.png" alt="image"/>

                    
                </div>

               


            </div>
            <div className="col-md-4 pt-10 text-Start">
              <div className=" div-hvr">

                <div className="icon pb-3"><i className="fa fa-code fa-2x icon-font blue-clr"></i></div>
                <div className="text">
                  <h3 className="pb-3">
                    <span className="spn-hvr">Powerful Code</span>
                  </h3>
                  <p className="pb-3">This is Photoshop's version of Lorem Ipsum. Proin gravida nibh vel velit auctor aliquet</p>

                </div>
              </div>
              <div className="div-hvr  ">

                <div className="icon pb-3"><i className="fa fa-folder-open fa-2x icon-font  blue-clr"></i></div>
                <div className="text">
                  <h3 className="pb-3">
                    <span className="spn-hvr">Documentation </span>
                  </h3>
                  <p className="pb-3">This is Photoshop's version of Lorem Ipsum. Proin gravida nibh vel velit auctor aliquet</p>

                </div>
              </div>
            </div>
          </div>
      </div>
    </section>

        </>)
    }
export default MobileApp;