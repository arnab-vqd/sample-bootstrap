import React,{ Component } from 'react';
import {Carousel} from 'react-bootstrap'
import Slider from "react-slick";
import '../crouselSection/crouselSection.css'


class CrouselSection extends React.Component{

  render(){
   
  return (<>
       
    <Carousel className="home-crousel" fade>
    
  <Carousel.Item className="crousel-item">
    <div className='background-gradient'>
    <img
      className="d-block   w-100"
      src="assets/banner1-4.jpg"
      alt="First slide"
    />
    </div>
    <Carousel.Caption className='crousel-caption'>
      <div className="tex-content">
      <h1 className=" font-48 fw-1">The Ultimate</h1>
      <h1 className=" font-48 fw-7">Creative Business</h1>
      <h1 className=" font-48 fw-1">In Market</h1>
     <p className=" font-18 fw-1">The Best Multipurpose Multi Page Template in Market</p></div>
      
    </Carousel.Caption>
    <div className="social-icons">
      <ul className="li-inline-cs list-style-none ">
      <li><a href="#" className="facebook p-1 "><i className="fab fa-facebook"></i> </a> </li>
                <li><a href="#" className="twitter p-1"><i className="fab fa-twitter"></i> </a> </li>
                <li><a href="#" className="insta p-1"><i className="fab fa-instagram"></i> </a> </li>
                <li><a href="#" className="linkedin p-1"><i className="fab fa-linkedin"></i> </a> </li>
              </ul>
      </div>
  </Carousel.Item>
  <Carousel.Item className="crousel-item" >
  <div className='background-gradient'>
    <img
      className="d-block w-100"
      src="assets/banner1-5.jpg"
      alt="Second slide"
    />
    </div>
    <Carousel.Caption className='crousel-caption'>
    <div className="tex-content">
      <h1 className=" font-48 fw-1">Let's Create</h1>
      <h1 className=" font-48 fw-7">Deep Creativity</h1>
      <h1 className=" font-48 fw-1">In Market</h1>
     <p className=" font-18 fw-1">Responsive and Retina Ready for All Devices</p></div>
      
    </Carousel.Caption>
    <div className="social-icons">
      <ul className="li-inline-cs list-style-none ">
                <li><a href="#" className="facebook p-1 "><i className="fab fa-facebook"></i> </a> </li>
                <li><a href="#" className="twitter p-1"><i className="fab fa-twitter"></i> </a> </li>
                <li><a href="#" className="insta p-1"><i className="fab fa-instagram"></i> </a> </li>
                <li><a href="#" className="linkedin p-1"><i className="fab fa-linkedin"></i> </a> </li>
        </ul>
    </div>
  </Carousel.Item>
  <Carousel.Item className="crousel-item">
  <div className='background-gradient'>
    <img
      className="d-block w-100"
      src="assets/banner1-6.jpg"
      alt="Third slide"
    />
    </div>
    <Carousel.Caption className='crousel-caption'>
    <div className="tex-content">
      <h1 className=" font-48 fw-1">We Make</h1>
      <h1 className=" font-48 fw-7">Inspired Design</h1>
      <h1 className=" font-48 fw-1">Our Trax</h1>
     <p className=" font-18 fw-1">Is a New Design Studio founded in NewYork</p></div>
     
    </Carousel.Caption>
    <div className="social-icons">
      <ul className="li-inline-cs list-style-none ">
                <li><a href="#" className="facebook p-1 "><i className="fab fa-facebook"></i> </a> </li>
                <li><a href="#" className="twitter p-1"><i className="fab fa-twitter"></i> </a> </li>
                <li><a href="#" className="insta p-1"><i className="fab fa-instagram"></i> </a> </li>
                <li><a href="#" className="linkedin p-1"><i className="fab fa-linkedin"></i> </a> </li>
              </ul>
      </div>
  </Carousel.Item>
</Carousel>
  </>);
  }
};

export default CrouselSection;
