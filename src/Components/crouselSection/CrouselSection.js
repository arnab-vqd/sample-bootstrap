import React,{ Component } from 'react';
import {Carousel} from 'react-bootstrap'
import Slider from "react-slick";
import '../crouselSection/crouselSection.css'


class CrouselSection extends React.Component{

  render(){
    const settings = {
      dots: true,
      vertical: true,
      autoplay: false, 
      fade: true,
      infinite: true,
      speed: 500,
      slidesToShow: 3,
      slidesToScroll: 1,
      cssEase: "linear",
      //  beforeChange: function(currentSlide, nextSlide) {
      //   console.log("before change", currentSlide, nextSlide);
      // },
      // afterChange: function(currentSlide) {
      //   console.log("after change", currentSlide);
      // }
    };
  return (<>
       {/* <div className='' style={{marginLeft: "-25px"}}>
<Slider {...settings}   >
      <div>
        <img
      className="d-block bg-clipboard "
      src="assets/banner1-4.jpg"
      alt="First slide"
      />
      <div className="d-block"><h3>First slide label</h3>
      <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p></div>
      </div>
      <div>
        <img
      className="d-block bg-clipboard "
      src="assets/banner1-5.jpg"
      alt="First slide"
      />
      <div className="d-block"><h3>second slide label</h3>
      <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p></div>
      </div>
      <div>
        <img
      className="d-block bg-clipboard "
      src="assets/banner1-6.jpg"
      alt="First slide"
      />
      <div className="d-block"><h3>First slide label</h3>
      <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p></div>
      </div>
      </Slider>
        </div> */}
      
    <Carousel>
    
  <Carousel.Item interval={1000}>
    <img
      className="d-block bg-clipboard w-100"
      src="assets/banner1-4.jpg"
      alt="First slide"
    />
    <div className='overlay-dark'></div>
    <Carousel.Caption>
      <h3>First slide label</h3>
      <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item interval={500}>
    <img
      className="d-block w-100"
      src="assets/banner1-5.jpg"
      alt="Second slide"
    />
    <Carousel.Caption>
      <h3>Second slide label</h3>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src="assets/banner1-6.jpg"
      alt="Third slide"
    />
    <Carousel.Caption>
      <h3>Third slide label</h3>
      <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
    </Carousel.Caption>
  </Carousel.Item>
</Carousel>
  </>);
  }
};

export default CrouselSection;
