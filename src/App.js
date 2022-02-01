import AboutUs from './Components/aboutUs/AboutUs';
import ContactUs from './Components/contactUs/ContactUs';
import CrouselSection from './Components/crouselSection/CrouselSection';
import Footer from './Components/footer/Footer';
import Header from './Components/header/Header'
import LetestBlog from './Components/letestBlog/LetestBlog';
import MapSection from './Components/mapSection/MapSection';
import Stayconnected from './Components/stayconnected/Stayconnected';
import OurPriceing from './Components/ourPriceing/OurPriceing';
// import ProtfolioSay from './Components/portfolio/protfolioSay/ProtfolioSay';
import Protfolio from './Components/portfolio/Portfolio';

function App() {
  return (
    <div>
      <Header/>
      <CrouselSection/>
      <AboutUs/>
      <OurPriceing/>
      <Protfolio/>
      {/* <ProtfolioSay/> */}
      <LetestBlog/>
      <ContactUs/>
      <MapSection/>
      <Stayconnected/>
      <Footer/>
    </div>
  );
}

export default App;
