import React, { Component } from "react";
import Slider from "react-slick";
import '../partnerCrousel/partnerCrousel.css'
class PartnerCrousel  extends React.Component {
    render(){
        const settings = {
            dots: true,
            infinite: true,
            slidesToShow: 5,
            slidesToScroll: 1,
            autoplay: true,
            speed: 2000,
            autoplaySpeed: 2000,
            cssEase: "linear"
          };
    // document.ready(function(){
    //     document.getElementByClassName("customer-logos").slick({
    //    slidesToShow: 6,
    //     slidesToScroll: 1,
    //       autoplay: true,
    //  autoplaySpeed: 1500,
    //    arrows: false,
    //       dots: false,
    //     pauseOnHover: false,
    //        responsive: [{
    //            breakpoint: 768,
    //         settings: {
    //              slidesToShow: 4
    //     }
    //    }, {
    //         breakpoint: 520,
    //       settings: {
    //          slidesToShow: 3
    //      }
    //    }]
    // });
    //  });

  return (
      <>
      <div class="container">
      <Slider {...settings} className="pad-7-5">
      <div>
      <div class="slide img-slide"><img  src="/assets/logo-4.png"/></div>
          </div>
          <div>
          <div class="slide img-slide"><img  src="/assets/logo-4.png"/></div>
          </div>
          <div>
          <div class="slide img-slide"><img  src="/assets/logo-4.png"/></div>
          </div>
          <div>
          <div class="slide img-slide"><img  src="/assets/logo-4.png"/></div>
          </div>
          <div>
          <div class="slide img-slide"><img  src="/assets/logo-4.png"/></div>
          </div>
          <div>
          <div class="slide img-slide"><img  src="/assets/logo-4.png"/></div>
          </div>
          <div>
          <div class="slide img-slide"><img  src="/assets/logo-4.png"/></div>
          </div>
          <div>
          <div class="slide img-slide"><img  src="/assets/logo-4.png"/></div>
          </div>
   {/* <section class="customer-logos slider">
      <div class="slide"><img src="https://image.freepik.com/free-vector/luxury-letter-e-logo-design_1017-8903.jpg"/></div>
      <div class="slide"><img src="https://image.freepik.com/free-vector/3d-box-logo_1103-876.jpg"/></div>
      <div class="slide"><img src="https://image.freepik.com/free-vector/blue-tech-logo_1103-822.jpg"/></div>
      <div class="slide"><img src="https://image.freepik.com/free-vector/colors-curl-logo-template_23-2147536125.jpg"/></div>
      <div class="slide"><img src="https://image.freepik.com/free-vector/abstract-cross-logo_23-2147536124.jpg"/></div>
      <div class="slide"><img src="https://image.freepik.com/free-vector/football-logo-background_1195-244.jpg"/></div>
      <div class="slide"><img src="https://image.freepik.com/free-vector/background-of-spots-halftone_1035-3847.jpg"/></div>
      <div class="slide"><img src="https://image.freepik.com/free-vector/retro-label-on-rustic-background_82147503374.jpg"/></div>
   </section> */}
   </Slider>
</div>
      </>
  );
    }
};

export default PartnerCrousel;
