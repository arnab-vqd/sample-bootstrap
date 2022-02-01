import React from 'react';

const ProtfolioGalary = () => {
  return (<>
  <div class="container">
      <div class="row pad-xy">
        
        <div className="col-md-12 text-center">
          <div>
            <span className="blue-clr font-18"> Let's Explore Out </span>
            <h2 className="font-48 text-black1 fw-4"> Our Portfolio </h2>
            <p className="font-14 mxy-1 gry-clr">Lorem ipsum dolor sit amet, consectetur adipisicing elit. A dolores omnis provident quam reiciendis voluptatum.</p>
          </div>
        </div>
        <div class="col-md-12">
          <div class="d-flex justify-content-center">
            <div data-filter="*" class="">
              <span>All</span>
            </div>
            <div data-filter=".digital" class=" filter-item">
              <span>Digital</span>
            </div>
            <div data-filter=".design" class=" filter-item">
              <span>Design</span>
            </div>
            <div data-filter=".brand" class=" filter-item">
              <span>Brand</span>
            </div>
            <div data-filter=".graphics" class=" filter-item">
              <span>Graphics</span>
            </div>
          </div>
        </div>
      </div>
      <div class="row">
        <div class="col-md-2">
          <img src="./img/gallery-5.jpg" />
        </div>
        <div class="col-md-2">
          <img src="./img/gallery-5.jpg" />
        </div>
        <div class="col-md-2">
          <img src="./img/gallery-5.jpg" />
        </div>
        <div class="col-md-2">
          <img src="./img/gallery-5.jpg" />
        </div>
        <div class="col-md-2">
          <img src="./img/gallery-5.jpg" />
        </div>
        <div class="col-md-2">
          <img src="./img/gallery-5.jpg" />
        </div>
      </div>
      <div class="row">
        <div class="col-md-2">
          <img src="./img/gallery-5.jpg" />
        </div>
        <div class="col-md-2">
          <img src="./img/gallery-5.jpg" />
        </div>
        <div class="col-md-2">
          <img src="./img/gallery-5.jpg" />
        </div>
        <div class="col-md-2">
          <img src="./img/gallery-5.jpg" />
        </div>
        <div class="col-md-2">
          <img src="./img/gallery-5.jpg" />
        </div>
        <div class="col-md-2">
          <img src="./img/gallery-5.jpg" />
        </div>
      </div>
    </div>
  </>);
};

export default ProtfolioGalary;
