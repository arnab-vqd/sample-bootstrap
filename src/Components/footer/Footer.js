import React, { useState } from 'react';
import { Nav } from 'react-bootstrap';
import '../footer/footer.css';
const Footer = () => {
    const[hovered,setHovered]=useState(false);
   const onMouseEnter = e => {
        setHovered({ hovered: true });
      };
    
     const onMouseLeave = e => {
        setHovered({ hovered: false });
      };
      
  return (<div>
      <footer className="footer bg-footr    ">
       <div className="container">
        <div className="row">
     
            <div className="col-md-3">
                <h2><Nav.Link  className='logocls'><img src="/assets/logo-transparent.png" alt="logo" className="logo-default"/></Nav.Link ></h2>
                <p className='font-13'>Keep away from people who try to belittle your ambitions Small people always do that but the really great Friendly.</p>
                <div className="d-table w-100 address-item  ">
                <span className=" d-table-cell align-middle"><i className="fas fa-mobile fa-2x"></i></span>
                <p className=" d-table-cell align-middle font-13">
                    +01 - 123 - 4567 <Nav.Link  className="d-block p-0 text-white" href="#">web@support.com</Nav.Link >
                </p>
                </div>
                <ul className="li-inline-cs list-style-none font-white ">
                <li><a href="#" className="facebook p-1 "><i className="fab fa-facebook"></i> </a> </li>
                <li><a href="#" className="twitter p-1"><i className="fab fa-twitter"></i> </a> </li>
                <li><a href="#" className="linkedin p-1"><i className="fab fa-linkedin"></i> </a> </li>
                <li><a href="#" className="insta p-1"><i className="fab fa-instagram"></i> </a> </li>
              </ul>
            </div>
            <div className="col-lg-3 col-md-6 col-sm-6">
                <div>
                <h3 className="whitecolor bottom25 font-24 ">Latest News</h3>
                <ul className="latest_news whitecolor list-style-none p-0">
                    <li className='bdr-btm '> <Nav.Link  id="toggle-white" className='p-0 font-14 toggle-white ' href="#." onMouseEnter={e=>{ setHovered(true)}} onMouseLeave={e=>{ setHovered(false)}} >Aenean tristique justo et... </Nav.Link > <span id=" toggle-blue" className={hovered?"date  toggle-blue font-13 ":"date  toggle-blue font-13 hovered "}>15 March 2019</span> </li>
                    <li className='bdr-btm '> <Nav.Link className='p-0 font-14 toggle-white ' href="#." onMouseEnter={e=>{ setHovered(true)}} onMouseLeave={e=>{ setHovered(false)}}>Phasellus dapibus dictum augue... </Nav.Link > <span className={hovered?"date  toggle-blue font-13 ":"date  toggle-blue font-13 hovered "}>15 March 2019</span> </li>
                    <li className='bdr-btm '> <Nav.Link  className='p-0 font-14 toggle-white ' href="#.">Mauris blandit vitae. Praesent non... </Nav.Link > <span className="date blue-clr toggle-blue font-13">15 March 2019</span> </li>
                </ul>
                </div>
            </div>
            <div className="col-lg-3 col-md-6 col-sm-6">
                <div className='pl-3 navigation'>
                <h3 className=" font-24  ">Navigation</h3>
                <ul className="links  b p-0 list-style-none" >
                    <li><Nav.Link className='text-white font-14 ' href="#home">Home</Nav.Link ></li>
                    <li><Nav.Link className='text-white font-14 ' href="#about">About Us</Nav.Link ></li>
                    <li><Nav.Link className='text-white font-14 ' href="#pricing">Our Pricing</Nav.Link ></li>
                    <li><Nav.Link className='text-white font-14 ' href="#portfolio">Portfolio</Nav.Link ></li>
                    <li><Nav.Link className='text-white font-14 ' href="#blog">Our Blog</Nav.Link ></li>
                    <li><Nav.Link className='text-white font-14 ' href="#contact">Contact Us</Nav.Link ></li>
                </ul>
                </div>
            </div>
            <div className="col-lg-3 col-md-6 col-sm-6">
                <div>
                <h3 className="whitecolor bottom25 font-24 ">Business hours</h3>
                <p className='font-13'>Our support available to help you 24 hours a day, seven days week</p>
                <ul className=" text-white  font-14 b p-0 list-style-none">
                    <li className='pxy-8-0'><span>Monday-Saturday: .................</span> <span>8.00-18.00</span></li>
                    <li className='pxy-8-0'><span>Friday: ......................................</span> <span>09:00-21:00</span></li>
                    <li className='pxy-8-0'><span>Sunday: ....................................</span> <span>09:00-20:00</span></li>
                    <li className='pxy-8-0'><span>Calendar Events: .....................</span> <span>24-Hour Shift</span></li>
                </ul>
                </div>
            </div>
    </div>
    </div>
  </footer>
  </div>);
};

export default Footer;
