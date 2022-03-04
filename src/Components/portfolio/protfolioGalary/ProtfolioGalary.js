import React, { useState, useCallback } from "react";
import { NavLink } from "react-bootstrap";
import Gallery from "react-photo-gallery";
// import Carousel, { Modal, ModalGateway } from "react-images";
import '../protfolioGalary/protfolioGalary.css'
import {photos} from './photos.js';
const ProtfolioGalary = () => {
  const [items,setItems]=useState(photos)
  const [visible, SetVisible]=useState(6)
const filterItems=(cateItem)=>{
  const updatedItems= photos.filter((curntElem)=>{
  console.log(curntElem.category);
  console.log("cateItem",cateItem);

    return curntElem.category===cateItem;
});
  console.log(updatedItems);
  setItems(updatedItems);
}

const loadMore=()=>{
  SetVisible((prevalue)=>prevalue+3);
}
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
          <div className="text-center ">
            <span className="blue-clr font-18"> Let's Explore Out </span>
            <h2 className="font-48 text-black1 fw-4"> Our Portfolio </h2>
            <p className="font-14 mxy-1 gry-clr">Lorem ipsum dolor sit amet, consectetur adipisicing elit. A dolores omnis provident quam reiciendis voluptatum.</p>
          </div>
        </div>
        <div class="col-md-12 p-0-5">
          <div class="d-flex justify-content-center">
          <nav aria-label="breadcrumb">
            <ol class="breadcrumb">
              <li class="breadcrumb-item active" aria-current="page"><NavLink to="/" onClick={()=>setItems(photos)}>All</NavLink></li>
              <li class="breadcrumb-item"><NavLink to="/" onClick={()=>filterItems('Digital')}>Digital</NavLink></li>
              <li class="breadcrumb-item"><NavLink to="/" onClick={()=>filterItems('Brand')}>Design</NavLink></li>
              <li class="breadcrumb-item"><NavLink to="/" onClick={()=>filterItems('Brand')}>Brand</NavLink></li>
              <li class="breadcrumb-item"><NavLink to="/" onClick={()=>filterItems('Graphics')}>Graphics</NavLink></li>
            </ol>
          </nav>
  
          </div>
          {/* <Gallery photos={photos} direction={"column"} />  */}



          {/* <!-- Gallery --> */}
<div class="row">
  {
    items.slice(0,visible).map((elems)=>{
      return(
        <div className="col-lg-4 col-md-12  p-0 team-area">
        <div className="single-team">
          <img src={elems.src}
            className="w-100 shadow-1-strong rounded "
            alt="Boat on Calm Water"
          />
           <div className="team-text">
             <div className="list-icons">
                <a href=" " className="protfolio-icons"><i className="fa fa-search-plus"></i></a>
                <a href=""className="protfolio-icons"><i className="fas fa-link"></i></a>
              </div>
                <h4 className="font-18 w-100">{elems.name}</h4>
            </div>
        </div>
        </div>

      )
     })
  }  
</div>
<button className="button btngrident btn btn-primary pad-xy" onClick={loadMore}> Load More</button>

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
