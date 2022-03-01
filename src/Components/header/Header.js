import React ,{useEffect} from 'react';
import { Navbar, Nav, Container, NavLink, Offcanvas } from "react-bootstrap";
import '../header/header.css'

const Header = () => {

    useEffect(() => {
        window.addEventListener('scroll', isSticky);
        return () => {
            window.removeEventListener('scroll', isSticky);
        };
    });
    const isSticky = (e) => {
        const header = document.querySelector('.header-section');
        const scrollTop = window.scrollY;
        scrollTop >= 250 ? header.classList.add('is-sticky') : header.classList.remove('is-sticky');
    };
  return (<div>
     <Navbar   className='header-section' expand={false}>
            <Container >
                <Navbar.Brand to="/">
                    {isSticky? <img src="/assets/logo.png" alt='logo1'className="logo-scrolled"/>:<img src="/assets/logo-transparent.png" alt="logo" className="logo-default"/>}
                {/* <img src="../assets/images/logo-transparent.png" alt="logo" className="logo-default"/> */}
                {/* <img src="/assets/logo.png" alt='logo1'className="logo-scrolled"/> */}
                </Navbar.Brand>

                <div className="">
                <ul className="navbar-flex link-color mx-auto ms-xl-auto me-xl-0" >
                    <li className="nav-item">
                    <NavLink to="/" activeClassName="active">
                        Home
                    </NavLink>
                    </li>
                    <li className="nav-item">
                    <Nav.Link to="/">About</Nav.Link>
                    </li>
                    <li className="nav-item">
                    <Nav.Link to="/">Our Pricing</Nav.Link>
                    </li>
                    <li className="nav-item">
                    <Nav.Link to="/">Portfolio</Nav.Link>
                    </li>
                    <li className="nav-item">
                    <Nav.Link to="/">Our Blog</Nav.Link>
                    </li>
                    <li className="nav-item">
                    <Nav.Link to="/">Contact Us</Nav.Link>
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
                            <Nav.Link className='link active' to="/">Home</Nav.Link>
                            <Nav.Link className='link' to="/signup">About</Nav.Link>
                            <Nav.Link className='link' to="/">Our Pricing</Nav.Link>
                            <Nav.Link className='link' to="/">Our Blog</Nav.Link>
                            <Nav.Link className='link' to="/">Contact Us</Nav.Link>
                            <Nav.Link className='link' to="/">Portfolio</Nav.Link>                          
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
