import React from "react";
import '../letestBlog/letestBlog.css'
import { Nav } from "react-bootstrap";

class LetestBlog extends React.Component{
render( ){
    return(<>
        <section className=" bg-blog  pad-xy" id="blog">
    <div className="container">
      <div className="row">
        <div className="col-md-12 text-center">
          <div>
            <span className="blue-clr font-16">Read Out Our</span>
            <h2 className="font-48 text-black1"> Latest Blog </h2>
            <p className="font-14 mxy-1 gry-clr">Lorem ipsum dolor sit amet, consectetur adipisicing elit. A dolores omnis provident quam
              reiciendis voluptatum.</p>

          </div>
        </div>
      </div>

      <div className="row">
        <div className="col-md-4 text-center pad-top">

            <div className="card cwdt-90">
              <Nav.Link href="#" className="p-0 card-overflow"><img className="card-img-top"  src="assets/blog-1.jpg"
                  alt="Card image cap"/></Nav.Link>
              <div className="card-body pxy-48">

                <h3 className="text-capitalize  "><Nav.Link className='text-black1 text-start' href="#">Next Large Social Network</Nav.Link></h3>
                <ul className="li-inline-cs  list-style-none  p-0">
                  <li className="li-class"><Nav.Link href="#" ><i className="fa fa-calendar font-14  gry-clr"></i><span className="ml-7 font-12">Jan 14</span></Nav.Link></li>
                  <li className="li-class"><Nav.Link href="#" > <i className="fa fa-user font-14  gry-clr"></i><span className="ml-7 font-12">Peter</span></Nav.Link></li>
                  <li className="li-class comment"><Nav.Link href="#" ><i className="fa fa-comment font-14  gry-clr"></i><span className=" font-12 ml-7">7</span></Nav.Link></li>
                </ul>


                <p className=" text-secondary text-start font-14">Lorem Ipsum is simply dummy text of the printing industry. Lorem has been dummy text ever since the 1500s...</p>
              </div>
            </div>
        </div>
        <div className="col-md-4 text-center pad-top">
            <div className="card cwdt-90">
              <Nav.Link href="#" className="p-0 card-overflow">
              <div id="carouselExampleControls" className="carousel slide" data-bs-touch="false" data-bs-ride="carousel">
                  <div className="carousel-inner">
                    <div className="carousel-item active">
                      <img src="assets/blog-1.jpg" className="d-block w-100" alt="..."/>
                    </div>
                    <div className="carousel-item">
                      <img src="assets/blog-2.jpg" className="d-block w-100" alt="..."/>
                    </div>
                    <div className="carousel-item">
                      <img src="assets/blog-4.jpg" className="d-block w-100" alt="..."/>
                    </div>
                  </div>
                  <button className="carousel-control-prev " type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
                  <i className="fa fa-long-arrow-alt-left" aria-hidden="true"></i>
                    {/* <span className="carousel-control-prev-icon prev-btn-icon" aria-hidden="true"></span> */}
                  </button>
                  <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
                  <i class="fa fa-long-arrow-alt-left"></i>
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                  </button>
                </div>

              </Nav.Link>
              <div className="card-body pxy-48">

<h3 className="text-capitalize  "><Nav.Link className='text-black1 text-start' href="#">The Art of Finding Great Ideas</Nav.Link></h3>
<ul className="li-inline-cs  list-style-none  p-0">
  <li className="li-class"><Nav.Link href="#" ><i className="fa fa-calendar font-14  gry-clr"></i><span className="ml-7 font-12">Jan 14</span></Nav.Link></li>
  <li className="li-class"><Nav.Link href="#" > <i className="fa fa-user font-14  gry-clr"></i><span className="ml-7 font-12">Peter</span></Nav.Link></li>
  <li className="li-class comment"><Nav.Link href="#" ><i className="fa fa-comment font-14  gry-clr"></i><span className=" font-12 ml-7">7</span></Nav.Link></li>
</ul>


<p className=" text-secondary text-start font-14">Lorem Ipsum is simply dummy text of the printing industry. Lorem has been dummy text ever since the 1500s...</p>
</div>
            </div>
        </div>
        <div className="col-md-4 text-center pad-top">
          <div>
            <div className="card cwdt-90">
              <video width="412" height="245" controls>
                <source src="https://youtu.be/iFUFFUb5W4w" type="video/mp4"/>
                <source src="https://youtu.be/iFUFFUb5W4w" type="video/ogg"/>
                Your browser does not support the video tag.
              </video>
             <div className="card-body pxy-48">

<h3 className="text-capitalize  "><Nav.Link className='text-black1 text-start' href="#">3 Tips for Creating Your Own Blog</Nav.Link></h3>
<ul className="li-inline-cs  list-style-none  p-0">
  <li className="li-class"><Nav.Link href="#" ><i className="fa fa-calendar font-14  gry-clr"></i><span className="ml-7 font-12">Jan 14</span></Nav.Link></li>
  <li className="li-class"><Nav.Link href="#" > <i className="fa fa-user font-14  gry-clr"></i><span className="ml-7 font-12">Peter</span></Nav.Link></li>
  <li className="li-class comment"><Nav.Link href="#" ><i className="fa fa-comment font-14  gry-clr"></i><span className=" font-12 ml-7">7</span></Nav.Link></li>
</ul>


<p className=" text-secondary text-start font-14">Lorem Ipsum is simply dummy text of the printing industry. Lorem has been dummy text ever since the 1500s...</p>
</div>
            </div>
          </div>
        </div>
      </div>

    </div>
  </section>
    </>)
}
}
export  default LetestBlog;