import React from "react";
import "../workOnProgress/workOnprogress.css"
class WorkOnProgress extends React.Component{
    render(){
        return(<>
            <section className=" dark-bg">
      <div className="container  pad-xy">
        <div className="row p-0-5">
          <div className="col-md-12 text-center text-white">
            
              <span className="font-18 mb-6">Quisque tellus risus, adipisci </span>
              <h2 className="font-normal font-48 mb-6">Our Work Process </h2>
            
          </div>
        </div>

        <div className="row p-0-5">
          <ul className=" text-white li-inline-cs line-add list-style-none ">
            <li>
              <span className="circle">01</span>
              <p className="pt-5 font-14 text-center ">Concept</p>
              <p className="font-13 text-center p-10" >Quisque tellus risus, adipisci viverra bibendum urna.</p>
            </li>
            <li>
              <span className="circle">02</span>
              <p className="pt-5 font-14 text-center ">Plan</p>
              <p className="font-13 text-center p-10">Quisque tellus risus, adipisci viverra bibendum urna.</p>
            </li>
            <li>
              <span className="circle">03</span>
              <p className="pt-5 font-14 text-center">Design</p>
              <p className="font-13 text-center p-10">Quisque tellus risus, adipisci viverra bibendum urna.</p>
            </li>
            <li>
              <span className="circle">04</span>
              <p className="pt-5 font-14 text-center">Development</p>
              <p className="font-13 text-center p-10">Quisque tellus risus, adipisci viverra bibendum urna.</p>
            </li>
            <li>
              <span className="circle">05</span>
              <p className="pt-5 font-14 text-center">Quality Check</p>
              <p className="font-13 text-center p-10">Quisque tellus risus, adipisci viverra bibendum urna.</p>
            </li>
          </ul>
        </div>
      </div>
    </section>
        </>)
    }
}

export default  WorkOnProgress;