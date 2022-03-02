import React from 'react';
import BusinessNextLevel from './businessNextLevel/BusinessNextLevel';
import CounterSection from './counterSection/CounterSection';
import Exparts from './Exparts/Exparts';
import MobileApp from './mobileApp/MobileApp';
import WorkOnProgress from './workOnProgress/WorkOnProgress';
const AboutUs = () => {
  return(<div id="about">
  <BusinessNextLevel/>
  <WorkOnProgress/>
  <MobileApp/>
  <CounterSection/>
  <Exparts/>
  </div>);
};

export default AboutUs;
