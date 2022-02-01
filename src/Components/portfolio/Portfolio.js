import React from 'react';
import ProtfolioGalary from './protfolioGalary/ProtfolioGalary';
import ProtfolioSay from './protfolioSay/ProtfolioSay';
class Protfolio extends React.Component{
 render(){
     return(
         <>
        <ProtfolioGalary/>
         <ProtfolioSay/>
         </>
     )
 }
}
export default Protfolio;
