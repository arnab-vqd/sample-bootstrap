import React from "react";
import '../protfolioSay/protfolioSay.css';
import {Carousel , Button ,Card} from 'react-bootstrap';
class ProtfolioSay extends React.Component{
 constructor(props){
   super(props);
   this.state={data:[
        {img:'assets/testimonial-2.jpg',name:'Hayden Wood ',address:'FIVERR, Italy',  details: '1. Traxs customer testimonial page is another beauty. Its simmle design focuses on videos and standout quotes from customers. This approach is clean, straightforward, text that can be overwhelming and easy to skip.', star:5},
        {img:'assets/testimonial-3.jpg',name:'Kevin Miller',address:'ENVATO, Australia', details: '2  . Traxs customer testimonial page is another beauty. Its simmle design focuses on videos and standout quotes from customers. This approach is clean, straightforward, text that can be overwhelming and easy to skip.' },
        {img:'assets/testimonial-4.jpg',name:'Alina Johanson',address:'INTEL, Sidney',  details: '3  . Traxs customer testimonial page is another beauty. Its simmle design focuses on videos and standout quotes from customers. This approach is clean, straightforward, text that can be overwhelming and easy to skip.' },
        {img:'assets/testimonial-5.jpg',name:'John Smith',address:'UPWORK, New York',  details: '4  . Traxs customer testimonial page is another beauty. Its simmle design focuses on videos and standout quotes from customers. This approach is clean, straightforward, text that can be overwhelming and easy to skip.' }]}
 }

render(){
    return(<>
    <div className="pad-xy protfolio-cs">
      <div className="container">
        <div className="row p-0-5 p-0-5">
          <div className="col-md-6"></div>
          <div className="col-md-6 text-end text-white">
            <span className="justify-content-end font-18 "> Quisque tellus risus, adipisci </span>
            <h2 className="font-normal font-48 fw-4"> What Peomle Say </h2>
          </div>
        </div>
      </div>
    </div>
    <div className="container">
    
      {/* <div className="row p-0-5 p-0-5 "> */}
        {/* <div className="col-md-6 "> */}

        <Carousel className="d-r" fade>
          <Carousel.Item>
            <div className="row p-0-5">
              <div className="col-md-6">  <div className="img-container"><img  src={this.state.data[0].img} className="img-wdt" alt='...'/></div>
                <h4 className="blue-clr font-14 ml-2 ">
                  <a href="#" className="blue-clr font-14 ml-2"> {this.state.data[0].name}</a>
                </h4>
                <p className="text-secondary ml-2"> {this.state.data[0].address} </p>
              </div>
              <div className="col-md-6">
                <p className="text-secondary pt-5"> {this.state.data[0].details} </p> 
                <span className="d-inline-block test-star">
                <i className="fa fa-star"></i>
                <i className="fa fa-star"></i>
                <i className="fa fa-star"></i>
                <i className="fa fa-star"></i>
                <i className="fa fa-star"></i>
              </span>
              </div>
            </div>
          </Carousel.Item>
          <Carousel.Item>
          <div className="row p-0-5">
              <div className="col-md-6"> <div className="img-container"> <img  src={this.state.data[1].img} className="img-wdt" alt='...'/></div>
                <h4 className="blue-clr font-14 ml-2 ">
                  <a href="#" className="blue-clr font-14 ml-2"> {this.state.data[1].name}</a>
                </h4>
                <p className="text-secondary ml-2"> {this.state.data[1].address} </p>
              </div>
              <div className="col-md-6">
                <p className="text-secondary pt-5"> {this.state.data[1].details} </p> 
                <span className="d-inline-block test-star">
                <i className="fa fa-star"></i>
                <i className="fa fa-star"></i>
                <i className="fa fa-star"></i>
                <i className="fa fa-star"></i>
                <i className="fa fa-star"></i>
              </span>
              </div>
            </div>
          </Carousel.Item>
          <Carousel.Item>
          <div className="row p-0-5">
              <div className="col-md-6"> 
              <div className="img-container"><img  src={this.state.data[2].img} className="img-wdt" alt='...'/></div>
                <h4 className="blue-clr font-14 ml-2 ">
                  <a href="#" className="blue-clr font-14 ml-2"> {this.state.data[2].name}</a>
                </h4>
                <p className="text-secondary ml-2"> {this.state.data[2].address} </p>
              </div>
              <div className="col-md-6">
                <p className="text-secondary pt-5"> {this.state.data[2].details} </p> 
                <span className="d-inline-block test-star">
                <i className="fa fa-star"></i>
                <i className="fa fa-star"></i>
                <i className="fa fa-star"></i>
                <i className="fa fa-star"></i>
                <i className="fa fa-star"></i>
              </span>
              </div>
            </div>
          </Carousel.Item>
          <Carousel.Item>
          <div className="row p-0-5">
              <div className="col-md-6"> <div className="img-container"> <img  src={this.state.data[3].img} className="img-wdt" alt='...'/></div>
                <h4 className="blue-clr font-14 ml-2 ">
                  <a href="#" className="blue-clr font-14 ml-2"> {this.state.data[3].name}</a>
                </h4>
                <p className="text-secondary ml-2"> {this.state.data[3].address} </p>
              </div>
              <div className="col-md-6">
                <p className="text-secondary pt-5"> {this.state.data[3].details} </p> 
                <span className="d-inline-block test-star">
                <i className="fa fa-star"></i>
                <i className="fa fa-star"></i>
                <i className="fa fa-star"></i>
                <i className="fa fa-star"></i>
                <i className="fa fa-star"></i>
              </span>
              </div>
            </div>
          </Carousel.Item>
          {/* <Carousel.Item>
          {
            this.state.data.map((val, key)=>{
              return(

                <div className="row p-0-5">
              <div className="col-md-6"> <img  src={val.img} className="img-wdt" alt='...'/>
                <h4 className="blue-clr font-14 ml-2 ">
                  <a href="#" className="blue-clr font-14 ml-2"> {val.name}</a>
                </h4>
                <p className="text-secondary ml-2"> {val.address} </p>
              </div>
              <div className="col-md-6">
                <p className="text-secondary pt-5"> {val.details} </p> 
                <span className="d-inline-block test-star">
                <i className="fa fa-star"></i>
                <i className="fa fa-star"></i>
                <i className="fa fa-star"></i>
                <i className="fa fa-star"></i>
                <i className="fa fa-star"></i>
              </span>
              </div>
            </div>
              )

            })
          }
          </Carousel.Item> */}
          
        </Carousel>



       
        </div>
        {/*<div className="col-md-6">
        <p className="text-secondary pt-5"> {this.state.data[0].details} </p> 
           <p className="text-secondary pt-5">Trax’s customer testimonial page is another beauty. Its simmle design focuses on videos and standout
            quotes from customers. This approach is clean, straightforward, text that can be overwhelming and easy to
            skip.</p> 
          <span className="d-inline-block test-star">
            <i className="fa fa-star"></i>
            <i className="fa fa-star"></i>
            <i className="fa fa-star"></i>
            <i className="fa fa-star"></i>
            <i className="fa fa-star"></i>
          </span>
        </div>*/}
      {/* </div>  */}
    </>)
}
}
export default ProtfolioSay;