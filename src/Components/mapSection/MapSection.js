import React from "react";
import '../mapSection/mapSection.css'

class MapSection extends React.Component{
    render(){
        return(<>
        <section>
<iframe
  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3615.541095417225!2d88.12877561432335!3d25.0157048451801!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39fafdb4940bffd9%3A0x7029c0aa6686970b!2sMalda%20Town!5e0!3m2!1sen!2sin!4v1607516954115!5m2!1sen!2sin"
  style={{width:"100%", height:"500", frameBorder:"0", style:"border:0;" ,allowFullScreen:"" ,ariaHidden:"false",
  tabIndex:"0"}}
  />
  {/* width="100%" height="500" frameBorder="0" style="border:0;" allowFullScreen="" aria-hidden="false"
  tabIndex="0" */}
</section>
        </>)

    }
}
export default MapSection;