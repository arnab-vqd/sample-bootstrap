import React from 'react';
import { Navbar, Nav, Container, Offcanvas } from "react-bootstrap";
import '../header/header.css'

const Header = () => {
  return (<div>
     <Navbar   className='' expand={false}>
            <Container >
                <Navbar.Brand to="/">
                {/* <img src="../assets/images/logo-transparent.png" alt="logo" className="logo-default"/> */}
                <img src="/assets/logo.png" alt='logo1'className="logo-scrolled"/>
                </Navbar.Brand>

                <div className="">
                <ul className="navbar-flex link-color mx-auto ms-xl-auto me-xl-0" >
                    <li className="nav-item">
                    <Nav.Link className='' href="/about">Home</Nav.Link>
                    </li>
                    <li className="nav-item">
                    <Nav.Link href="/about">About</Nav.Link>
                    </li>
                    <li className="nav-item">
                    <Nav.Link href="/about">Our Pricing</Nav.Link>
                    </li>
                    <li className="nav-item">
                    <Nav.Link href="/about">Portfolio</Nav.Link>
                    </li>
                    <li className="nav-item">
                    <Nav.Link href="/about">Our Blog</Nav.Link>
                    </li>
                    <li className="nav-item">
                    <Nav.Link href="/about">Contact Us</Nav.Link>
                    </li>
                </ul>
            </div>  
                
            </Container >
            <Navbar.Toggle aria-controls="offcanvasNavbar" />
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
                            <Nav.Link className='link' href="/">Home</Nav.Link>
                            <Nav.Link className='link' href="/signup">About</Nav.Link>
                            <Nav.Link className='link' href="/about">Our Pricing</Nav.Link>
                            <Nav.Link className='link' href="/about">Our Blog</Nav.Link>
                            <Nav.Link className='link' href="/about">Contact Us</Nav.Link>
                            <Nav.Link className='link' href="/about">Portfolio</Nav.Link>                          
                        </Nav>
                    </Offcanvas.Body>
                    <div className="side-footer w-100">
                <Nav className="social-icons link-wrapper white icn-alin top40">
                    <Nav.Link href="/" className="facebook"><i className="fab fa-facebook-f"></i> </Nav.Link> 
                    <Nav.Link href="/" className="twitter"><i className="fab fa-twitter"></i> </Nav.Link> 
                    <Nav.Link href="/" className="insta"><i className="fab fa-instagram"></i> </Nav.Link> 
                </Nav>
                <p className="whitecolor">&copy; <span id="year">2019-2022</span> Trax. Made With Love by ThemesIndustry</p>
            </div>
                </Navbar.Offcanvas>
        </Navbar >
  </div>);
};

export default Header;
