import React from "react";
import '../contactUs/contactUs.css'
class ContactUs extends React.Component{
 render(){
     return(<>
      <section id="contactus ">
    <div className="container  pad-xy">
      <div>
        <div className="row">
          <div className="col-md-12 text-center ">
            <span className="blue-clr font-15">Quisque tellus risus</span>
            <div>
              <h2 className="font-48 text-black1">  Contact Us </h2>
              <p className="mxy-1 gry-clr">Lorem ipsum dolor sit amet, consectetur adipisicing elit. A dolores omnis provident quam reiciendis oluptatum.</p>

            </div>

          </div>
          <div className="col-md-6 col-sm-12">
            <div>
              <form className="getin_form" onSubmit={{return:'false'}}> 
                <div className="row px-2">
                  <div className="col-md-12 col-sm-12" id="result1"></div>
                  <div className="col-md-12 col-sm-12">
                    <div className="form-group">
                      <label htmlFor="name1"></label>
                      <input className="form-control" id="name1" type="text" placeholder="Name" required="" name="userName"/>
                    </div>
                  </div>
                  <div className="col-md-12 col-sm-12">
                    <div className="form-group">
                      <label htmlFor="email1"></label>
                      <input className="form-control" type="email" id="email1" placeholder="Email" name="email"/>
                    </div>
                  </div>
                  <div className="col-md-12 col-sm-12">
                    <div className="form-group">
                      <label htmlFor="message1"></label>
                      <textarea className="form-control my-3" id="message1" placeholder="Message" required="" rows={5}
                        name="message"></textarea>
                    </div>
                  </div>
                  <div className="col-md-12 col-sm-12">
                    <button type="submit" id="submit_btn1" className="button btngrident btn btn-primary w-100 mb-5">Send</button>
                  </div>
                </div>
              </form>
            </div>
          </div>
          <div className="col-md-6 col-sm-12 order-md-2 text-center ">
            <div className="text-start pt-4">
              <div className="heading-title heading_small">
                <span className="blue-clr ">Trax Agency Worldwide</span>
                <h3 className="text-black1 font-24 ">Our London Agency</h3>
              </div>
              <div className="my-3 font-14 gry-clr">
                <p className="bottom10">Address: 309, New Cavendish St, EC1Y 3WK</p>
                <p className="bottom10">0800 214 5252</p>
                <p className="bottom10">0400 20778972</p>
                <p className="bottom10"><a href="mailto:polpo@traxagency.co.au">polpo@traxagency.com</a></p>
                <p className="bottom10">Mon-Fri: 9am-5pm</p>
              </div>
              <ul className="li-inline-cs list-style-none d-none ">
                <li><a href="#" className="facebook p-1 "><i className="fa fa-facebook"></i> </a> </li>
                <li><a href="#" className="twitter p-1"><i className="fa fa-twitter"></i> </a> </li>
                <li><a href="#" className="linkedin p-1"><i className="fa fa-linkedin"></i> </a> </li>
                <li><a href="#" className="insta p-1"><i className="fa fa-instagram"></i> </a> </li>
                <li><a href="#" className="whatsapp p-1"><i className="fa fa-whatsapp"></i> </a> </li>
                <li><a href="#" className="envelop p-1"><i className="fa fa-envelope"></i> </a> </li>
              </ul>
            </div>
          </div>

        </div>
      </div>
    </div>
  </section>
     </>)
 }
}
export default ContactUs;