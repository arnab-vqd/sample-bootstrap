import React ,{useEffect,useState} from 'react';
import { Navbar, Nav, Container, NavLink, Offcanvas } from "react-bootstrap";
import { Link, Button, Element, Events, animateScroll as scroll, scrollSpy, scroller } from 'react-scroll';
import '../header/header.css'

const Header = () => {
    const [istoggle,settoggle]=useState(false);

    useEffect(() => {
        window.addEventListener('scroll', isSticky);
        return () => {
            window.removeEventListener('scroll', isSticky)
        };
            
    });
    const isSticky = (e) => {
        const header = document.querySelector('.header-section');
        const scrollTop = window.scrollY;
        scrollTop >= 250 ? header.classList.add('is-sticky')   : header.classList.remove('is-sticky');
        istoggle=true;

    };
  return (<div>
      
     <Navbar   className='header-section' scrolling dark expand="md" fixed="top" expand={false}>
            <Container >
                <Navbar.Brand to="/">
                    {!istoggle? <img src="/assets/logo.png" alt='logo1'className="logo-scrolled"/>:<img src="/assets/logo-transparent.png" alt="logo" className="logo-default"/>}
                {/* <img src="../assets/images/logo-transparent.png" alt="logo" className="logo-default"/> */}
                {/* <img src="/assets/logo.png" alt='logo1'className="logo-scrolled"/> */}
                </Navbar.Brand>

                <div className="">
                <ul className="navbar-flex link-color mx-auto ms-xl-auto me-xl-0" >
                    <li className="nav-item">
                    <Link to="mainSection" spy={true} smooth={true} offset={50} duration={500} >
                        Home
                    </Link>
                    </li>
                    <li  className="nav-item">
                    <Link to="about" spy={true} smooth={true} offset={60} duration={500} >About</Link >
                    </li>
                    <li className="nav-item">
                    <Link to="ourPriceing" spy={true} smooth={true} offset={50} duration={500} >Our Pricing</Link >
                    </li>
                    <li className="nav-item">
                    <Link to="protfolio" spy={true} smooth={true} offset={50} duration={500} >Portfolio</Link >
                    </li>
                    <li className="nav-item">
                    <Link to="blog" spy={true} smooth={true} offset={50} duration={500} >Our Blog</Link >
                    </li>
                    <li className="nav-item">
                    <Link to="contactus" spy={true} smooth={true} offset={50} duration={500} >Contact Us</Link >
                    </li>
                </ul>
            </div>  
                
            </Container >
            <Navbar.Toggle aria-controls="offcanvasNavbar" className="color-white" />
            <Navbar.Offcanvas
                    id="offcanvasNavbar"
                    aria-labelledby="offcanvasNavbarLabel"
                    placement="end"
                    className='gradient-bg p-4 w-35'
                >
                    <Offcanvas.Header closeButton>
                        <Offcanvas.Title id="offcanvasNavbarLabel"></Offcanvas.Title>
                    </Offcanvas.Header>
                    <Offcanvas.Body className=' p-4'>
                        <Nav className="justify-content-end link-wrapper  text-white-clr flex-grow-1 pe-3">
                            <Link className='link ' to="/" >Home</Link >
                            <Link className='link' to="/signup">About</Link >
                            <Link className='link' to="/">Our Pricing</Link >
                            <Link className='link' to="/">Portfolio</Link >                          
                            <Link className='link' to="/">Our Blog</Link >
                            <Link className='link' to="contactus">Contact Us</Link >
                        </Nav>
                    </Offcanvas.Body>
                    <div className="side-footer w-100">
                <Nav className="social-icons link-wrapper white icn-alin top40">
                    <ul className="li-inline-cs list-style-none font-white ">
                        <li><Nav.Link to="/" className="facebook  "><i className="fab fa-facebook"></i> </Nav.Link> </li>
                        <li><Nav.Link to="/" className="twitter "><i className="fab fa-twitter"></i> </Nav.Link> </li>
                        <li><Nav.Link to="/" className="linkedin "><i className="fab fa-linkedin"></i> </Nav.Link> </li>
                        <li><Nav.Link to="/" className="insta "><i className="fab fa-instagram"></i> </Nav.Link> </li>
                    </ul>
                </Nav>
                <p className="whitecolor">&copy; <span id="year">2019-2022</span> Trax. Made With Love by ThemesIndustry</p>
            </div>
                </Navbar.Offcanvas>
        </Navbar >
  </div>);
};

export default Header;
