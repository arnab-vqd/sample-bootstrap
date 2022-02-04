import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import AboutUs from './Components/aboutUs/AboutUs';
import ContactUs from './Components/contactUs/ContactUs';
import CrouselSection from './Components/crouselSection/CrouselSection';
import Footer from './Components/footer/Footer';
import Header from './Components/header/Header'
import LetestBlog from './Components/letestBlog/LetestBlog';
import MapSection from './Components/mapSection/MapSection';
import Stayconnected from './Components/stayconnected/Stayconnected';
import OurPriceing from './Components/ourPriceing/OurPriceing';
import Protfolio from './Components/portfolio/Portfolio';
import ServiceSlider from "./Components/serviceSlider/ServiceSlider";

function App() {
  return (
    <div>
      <Header/>
      <CrouselSection/>
      <ServiceSlider/>
      <AboutUs/>
      <OurPriceing/>
      <Protfolio/>
      <LetestBlog/>
      <ContactUs/>
      <MapSection/>
      <Stayconnected/>
      <Footer/>
    </div>
  );
}

export default App;
