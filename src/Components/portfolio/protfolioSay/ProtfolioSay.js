import React from "react";
import '../protfolioSay/protfolioSay.css';
import {Carousel , Button ,Card} from 'react-bootstrap';
class ProtfolioSay extends React.Component{
 constructor(props){
   super(props);
   this.state={data:[
        {img:'assets/testimonial-2.jpg',name:'Hayden Wood ',address:'FIVERR, Italy', },
        {img:'assets/testimonial-3.jpg',name:'Kevin Miller',address:'ENVATO, Australia', },
        {img:'assets/testimonial-4.jpg',name:'Alina Johanson',address:'INTEL, Sidney', },
        {img:'assets/testimonial-5.jpg',name:'John Smith',address:'UPWORK, New York', }]}
 }

render(){
    return(<>
    <div className="pad-xy protfolio-cs">
      <div className="container">
        <div className="row p-0-5">
          <div className="col-md-6"></div>
          <div className="col-md-6 text-end text-white">
            <span className="justify-content-end font-18 "> Quisque tellus risus, adipisci </span>
            <h2 className="font-normal font-48 fw-4"> What People Say </h2>
          </div>
        </div>
      </div>
    </div>
    <div className="container">
    
      <div className="row ">
        <div className="col-md-6">

        <Carousel fade>
          <Carousel.Item>
            <img  src={this.state.data[0].img} alt='...'/>
          
          </Carousel.Item>
          <Carousel.Item>
          <img  src={this.state.data[1].img} alt='...'/>
          
          </Carousel.Item>
          <Carousel.Item>
          <img  src={this.state.data[2].img} alt='...'/>
          
          </Carousel.Item>
          <Carousel.Item>
          <img  src={this.state.data[3].img} alt='...'/>
          
          </Carousel.Item>
          
          
        </Carousel>



       
        </div>
        <div className="col-md-6">
          <p className="text-secondary pt-5">Trax’s customer testimonial page is another beauty. Its simple design focuses on videos and standout
            quotes from customers. This approach is clean, straightforward, text that can be overwhelming and easy to
            skip.</p>
          <span className="d-inline-block test-star">
            <i className="fa fa-star"></i>
            <i className="fa fa-star"></i>
            <i className="fa fa-star"></i>
            <i className="fa fa-star"></i>
            <i className="fa fa-star"></i>
          </span>
        </div>
      </div>
    </div>
    </>)
}
}
export default ProtfolioSay;