import React, { useState, useCallback } from "react";
import Gallery from "react-photo-gallery";
// import Carousel, { Modal, ModalGateway } from "react-images";
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
