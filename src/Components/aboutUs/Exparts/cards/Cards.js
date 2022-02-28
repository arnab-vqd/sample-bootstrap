import React from 'react';
import '../cards/card.css'
function Cards(props) {
    const data=[{img:'assets/expart.jpg',name:'Jessica Twai',details:'Agency Owner' },
        {img:'assets/expart1.jpg',name:'Jason Wudex ',details:'Agency Owner', },
        {img:'assets/expart2.jpg',name:'Jessica Twain',details:'Agency Owner', },
        {img:'assets/expart3.jpg',name:'Hayden Wood',details:'Agency Owner', }]
  return (<>
        <div className="row p-0-5 transfrom-body">
            
                {
                  data.map((thro,index)=>{
                    return(
                      
          <div className="col-md-3 text-center ">
                <div className="card " key={index}>
                <a href="#"><img className="card-img-top"  src={thro.img}
                    alt="Card image cap"/></a>
                <div className="card-body card-shape">

                  <div className="team-content">
                    <h4 className="darkcolor">{thro.name}</h4>
                    <p className='team-details'>{thro.details}</p>
                    <p className="social-icons-simple socila-icons-link  ">
                     <a className="facebook" href="/"><i className="fab fa-facebook-f "></i> </a>
                     <a className="twitter" href="/"><i className="fab fa-twitter"></i> </a>                 
                     <a className="insta" href="/"><i className="fab fa-instagram"></i> </a>             
                    </p>
                  </div>
                 
                </div>
              </div>
                    
            </div>
                    )
                  })
                }
          
        </div>
  </>);
}

export default Cards;
