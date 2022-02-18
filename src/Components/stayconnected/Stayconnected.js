import React from "react";
import '../stayconnected/stayconnected.css'
import emailjs from '@emailjs/browser';
import Alert from 'react-bootstrap/Alert';
class Stayconnected extends React.Component{
  constructor(props){
    super(props);
    this.state={
      userName:'',
      email:' ',
      companyName:'',
      errors:''
    }
    console.log(this.state);
    this.contatfrm=React.createRef()
}

hendelValChange(e){
  this.setState({[e.target.name]:e.target.value})

}
fromValidation=()=>{
  const {userName,email,companyName}=this.state;
  let isvalid=true;
  const errors={};

  //all regex
  var pattern = new RegExp(/^(("[\w-\s]+")|([\w-]+(?:\.[\w-]+)*)|("[\w-\s]+")([\w-]+(?:\.[\w-]+)*))(@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][0-9]\.|1[0-9]{2}\.|[0-9]{1,2}\.))((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){2}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\]?$)/i);
  if (!userName.length || !email.length || !companyName.length){
    errors.emptyFilds="Please provide the missing fields. ";
    isvalid=false;
    console.log(errors);
    console.log("flid errors",errors.emptyFilds);
  }
  else if (typeof  email!== "undefined") {
          
    
    if (!pattern.test(email)) {
      isvalid = false;
      errors.emailValid = "Please enter valid email address.";
    }
  }
  this.setState({errors});
  console.log("errors in state",errors);
  return isvalid;
 
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
    
    setTimeout(()=>{this.setState({userName:'',email:'',companyName:""})},10000)
    console.log("onSubmit:",this.state);
  } 
}
    render(){
  const {userName,errors}=this.state;
        return(
            <div>
                <section id="stayconnect">
    <div className="container position-relative mart-1">
        <div className="row">
            <div className="col-md-1"></div>
            <div className="col-md-10">
            <div className="bodycontainer">
        <div className="row bodycontainerbg">
          <div className="col-md-12 col-sm-12">

            <h3>Stay Connected</h3>

          </div>
          <div className="col-md-12 col-sm-12">
          {Object.keys(errors).map((key)=>{
                      return(<Alert variant="danger" key={key}>
                     { errors[key]}
                    </Alert>)
                    })}
                    {this.state.sucess?<Alert variant="success" >Hi {userName} Thank you for contacting us.</Alert>:null}
            <form ref={this.contatfrm}>
              <div className="row">
                <div className="col-md-12 col-sm-12" id="result"></div>
                <div className="col-md-3 col-sm-6">
                  <div className="form-group">
                    <label htmlFor="userName"></label>
                    <input className="form-control" type="text" placeholder="Name" required="" id="userName"
                      name="userName" value={this.state.userName} onChange={(e)=>{this.hendelValChange(e)}}/>
                  </div>
                </div>
                <div className="col-md-3 col-sm-6">
                  <div className="form-group">
                    <label htmlFor="companyName"></label>
                    <input className="form-control" type="text" placeholder="Company" id="companyName" name="companyName" value={this.state.companyName} onChange={(e)=>{this.hendelValChange(e)}}/>
                  </div>
                </div>
                <div className="col-md-3 col-sm-6">
                  <div className="form-group">
                    <label htmlFor="email"></label>
                    <input className="form-control" type="email" placeholder="Email" required="" id="email" name="email" value={this.state.email} onChange={(e)=>{this.hendelValChange(e)}}/>
                  </div>
                </div>
                <div className="col-md-3 col-sm-6">
                  <button type="submit" className="button btn btn-primary mar-top-2 btngrident w-100"
                    id="submit_btn" onClick={this.handelSubmit}>subscribe</button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
            </div>
            <div className="col-md-1"></div>
        </div>
      
    </div>
  </section>
            </div>
        )
    }
}
export default Stayconnected;