import React from 'react';
import PartnerCrousel from './partnerCrousel/PartnerCrousel';
import ProtfolioGalary from './protfolioGalary/ProtfolioGalary';
import ProtfolioSay from './protfolioSay/ProtfolioSay';
class Protfolio extends React.Component{
 render(){
     return(
         <>
        <ProtfolioGalary/>
         <ProtfolioSay/>
         <PartnerCrousel/>
         </>
     )
 }
}
export default Protfolio;
