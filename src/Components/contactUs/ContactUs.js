import React from "react";
import '../contactUs/contactUs.css';
import Alert from 'react-bootstrap/Alert';
import emailjs from '@emailjs/browser';
class ContactUs extends React.Component{

  constructor(props){
    super(props);
    this.state={
      userName:'',
      email:' ',
      message:'',
      errors:''
    }
    console.log(this.state);
    this.contatfrm=React.createRef()
}

hendelValChange(e){
  this.setState({[e.target.name]:e.target.value})

}
fromValidation=()=>{
  const {userName,email,message}=this.state;
  let isvalid=true;
  const errors={};

  //all regex
  var regName = /^[a-zA-Z ]+[(\.|')?[a-zA-Z ]+(\.|')?]+$/; 
  if (!userName.length || !email.length || !message.length){
    errors.emptyFilds="Please provide the missing fields. ";
    isvalid=false;
    console.log(errors);
    console.log("flid errors",errors.emptyFilds);
  }
  else if (typeof  email!== "undefined") {
          
    var pattern = new RegExp(/^(("[\w-\s]+")|([\w-]+(?:\.[\w-]+)*)|("[\w-\s]+")([\w-]+(?:\.[\w-]+)*))(@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][0-9]\.|1[0-9]{2}\.|[0-9]{1,2}\.))((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){2}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\]?$)/i);
    if (!pattern.test(email)) {
      isvalid = false;
      errors.emailValid = "Please enter valid email address.";
    }
  }
  this.setState({errors});
  console.log("errors in state",errors);
  return isvalid;

  

  //   else if (userName.match(regName)){
  //     errors.userNameLength='Please enter your full name (first & last name).'
  //     isvalid=false;
  //     console.log(errors);
  //   }
  // if (!email.length){
  //   errors.emailLength="please enter a Email ";
  //   isvalid=false;
  //   console.log(errors);
  // }
  // if (!message.length){
  //   errors.messageLength="please enter a Message ";
  //   isvalid=false;
  //   console.log(errors);
  // }
 
}
handelSubmit=(e)=>{
  e.preventDefault();
  const isvalid= this.fromValidation();
  console.log(this.state);
  if (isvalid){
    emailjs.sendForm( 'service_jp04hva','template_xnlxt93', this.contatfrm.current, 'user_7g6V1hlKvYRZzlXZdf3qX')
    .then((result) => {
      const res=result;
        console.log("sucess:",res.text);
    this.setState({sucess:res})
    console.log('inside emailjs:',this.state);
    }, (error) => {
        console.log("error:",error.text);
    });
    
    setTimeout(()=>{this.setState({userName:'',email:'',message:""})},10000)
          
    // alert('sucessfully message send')
    console.log("onSubmit:",this.state);
  } 
}

// {
//   !this.isvalid?<Alert variant="danger">
//   {/* { errors[key]} */}
//   <Alert.Heading>{errors.emptyFilds}</Alert.Heading>
  
//  </Alert>:""
// }

render(){
  const {userName,email,message,errors}=this.state;
  
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
              <form className="getin_form"  ref={this.contatfrm}> 
                <div className="row px-2">
                  <div className="col-md-12 col-sm-12" id="result1">
                    {Object.keys(errors).map((key)=>{
                      return(<Alert variant="danger" key={key}>
                     { errors[key]}
                    </Alert>)
                    })}
                    {this.state.sucess?<Alert variant="success" >Hi {this.state.userName} Thank you for contacting us.</Alert>:null}
                   
                  </div>
                  <div className="col-md-12 col-sm-12">
                    <div className="form-group">
                      <label htmlFor="name1"></label>
                      <input className="form-control" id="name1" type="text" placeholder="Name" required="" name="userName" value={this.state.userName} onChange={(e)=>{this.hendelValChange(e)}}/>
                    </div>
                  </div>
                  <div className="col-md-12 col-sm-12">
                    <div className="form-group">
                      <label htmlFor="email1"></label>
                      <input type="email" name="email"  placeholder="Email" className="form-control" required=""value={this.state.email} onChange={(e)=>{this.hendelValChange(e)}} />
                      
                    </div>
                  </div>
                  <div className="col-md-12 col-sm-12">
                    <div className="form-group">
                      <label htmlFor="message1"></label>
                      <textarea className="form-control my-3" id="message1" placeholder="Message" required="" rows={5}
                        name="message" value={this.state.message} onChange={(e)=>{this.hendelValChange(e)}}></textarea>
                    </div>
                  </div>
                  <div className="col-md-12 col-sm-12">
                    <button type="submit" id="submit_btn1" className="button btngrident btn btn-primary w-100 mb-5"  onClick={this.handelSubmit}>Send</button>
                    
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
              <ul className="li-inline-cs list-style-none  ">
                <li><a href="#" className="facebook p-1 "><i className="fab fa-facebook"></i> </a> </li>
                <li><a href="#" className="twitter p-1"><i className="fab fa-twitter"></i> </a> </li>
                <li><a href="#" className="linkedin p-1"><i className="fab fa-linkedin"></i> </a> </li>
                <li><a href="#" className="insta p-1"><i className="fab fa-instagram"></i> </a> </li>
                <li><a href="#" className="whatsapp p-1"><i className="fab fa-whatsapp"></i> </a> </li>
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