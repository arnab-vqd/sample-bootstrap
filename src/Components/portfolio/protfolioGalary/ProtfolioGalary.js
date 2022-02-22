import React, { useState, useCallback } from "react";
import Gallery from "react-photo-gallery";
// import Carousel, { Modal, ModalGateway } from "react-images";
import '../protfolioGalary/protfolioGalary.css'
import {photos} from './photos.js';
const ProtfolioGalary = () => {
  // const [currentImage, setCurrentImage] = useState(0);
  // const [viewerIsOpen, setViewerIsOpen] = useState(false);

  // const openLightbox = useCallback((event, { photo, index }) => {
  //   setCurrentImage(index);
  //   setViewerIsOpen(true);
  // }, []);

  // const closeLightbox = () => {
  //   setCurrentImage(0);
  //   setViewerIsOpen(false);
  // };
  return (<>
  <div class="container">
      <div class="row pad-xy">
        
        <div className="col-md-12 text-center ">
          <div>
            <span className="blue-clr font-18"> Let's Explore Out </span>
            <h2 className="font-48 text-black1 fw-4"> Our Portfolio </h2>
            <p className="font-14 mxy-1 gry-clr">Lorem ipsum dolor sit amet, consectetur adipisicing elit. A dolores omnis provident quam reiciendis voluptatum.</p>
          </div>
        </div>
        <div class="col-md-12 p-0-5">
          <div class="d-flex justify-content-center">
          <nav aria-label="breadcrumb">
            <ol class="breadcrumb">
              <li class="breadcrumb-item active" aria-current="page">All</li>
              <li class="breadcrumb-item"><a href="#">Digital</a></li>
              <li class="breadcrumb-item"><a href="#">Design</a></li>
              <li class="breadcrumb-item"><a href="#">Brand</a></li>
              <li class="breadcrumb-item"><a href="#">Graphics</a></li>
            </ol>
          </nav>
  
          </div>
          <Gallery photos={photos} direction={"column"} /> 



          {/* <!-- Gallery --> */}
<div class="row">
  <div class="col-lg-4 col-md-12  p-0 team-area">
  <div class="single-team">
    <img
      src="assets/gallery-5.jpg"
      class="w-100 shadow-1-strong rounded "
      alt="Boat on Calm Water"
    />
     <div class="team-text">
        <h2>abcdefg ahhahh</h2>
        <p> Development</p>
        <p>
          <a href="">i<i class="fa fa-facebok"></i></a>
          <a href="">j<i class="fa fa-facebok"></i></a>
          <a href="">k<i class="fa fa-facebok"></i></a>
          <a href="">l<i class="fa fa-facebok"></i></a>

        </p>
      </div>
  </div>
    <img
      src="assets/gallery-8.jpg"
      class="w-100 shadow-1-strong rounded "
      alt="Wintry Mountain Landscape"
    />
  </div>

  <div class="col-lg-4 p-0">
    <img
      src="assets/gallery-7.jpg"
      class="w-100 shadow-1-strong rounded "
      alt="Mountains in the Clouds"
    />

    <img
      src="assets/gallery-6.jpg"
      class="w-100 shadow-1-strong rounded "
      alt="Boat on Calm Water"
    />
  </div>

  <div class="col-lg-4 p-0 ">
    <img
      src="assets/gallery-11.jpg"
      class="w-100 shadow-1-strong rounded "
      alt="Waves at Sea"
    />

    <img
      src="assets/gallery-9.jpg"
      class="w-100 shadow-1-strong rounded "
      alt="Yosemite National Park"
    />
  </div>
</div>
{/* <!-- Gallery --> */}
          
          {/* <ModalGateway>
        {viewerIsOpen ? (
          <Modal onClose={closeLightbox}>
            <Carousel
              currentIndex={currentImage}
              views={photos.map(x => ({
                ...x,
                srcset: x.srcSet,
                caption: x.title
              }))}
            />
          </Modal>
        ) : null}
      </ModalGateway> */}
        </div>
      </div>
     
    </div>
  </>);
};

export default ProtfolioGalary;
