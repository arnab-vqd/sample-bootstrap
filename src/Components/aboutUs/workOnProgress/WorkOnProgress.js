import React from "react";
import "../workOnProgress/workOnprogress.css"
class WorkOnProgress extends React.Component{
constructor(props){
  super(props);
  this.state={active:Boolean};

}
setClassEnter=()=>{
console.log("before enter ",this.state);
this.setState({active:false})  
console.log("after enter ",this.state);

}
setClassRemove=()=>{
console.log("before leve ",this.state);
this.setState({active:true})  ;
console.log("after leve ",this.state);

}

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
            <li onMouseEnter={this.setClassEnter} onMouseLeave={this.setClassRemove} >
              <span className={this.state.active?"circle":"circle circle-active"}>01</span>
              <p className="pt-5 font-14 text-center ">Concept</p>
              <p className="font-13 text-center p-10" >Quisque tellus risus, adipisci viverra bibendum urna.</p>
            </li>
            <li onMouseEnter={this.setClassEnter} onMouseLeave={this.setClassRemove}>
              <span className={this.state.active?"circle":"circle circle-active"}>02</span>
              <p className="pt-5 font-14 text-center ">Plan</p>
              <p className="font-13 text-center p-10">Quisque tellus risus, adipisci viverra bibendum urna.</p>
            </li>
            <li onMouseEnter={this.setClassEnter} onMouseLeave={this.setClassRemove} >
              <span className={this.state.active?"circle circle-active":"circle "}>03</span>
              <p className="pt-5 font-14 text-center">Design</p>
              <p className="font-13 text-center p-10">Quisque tellus risus, adipisci viverra bibendum urna.</p>
            </li>
            <li onMouseEnter={this.setClassEnter} onMouseLeave={this.setClassRemove}>
              <span className={this.state.active?"circle":"circle circle-active"}>04</span>
              <p className="pt-5 font-14 text-center">Development</p>
              <p className="font-13 text-center p-10">Quisque tellus risus, adipisci viverra bibendum urna.</p>
            </li>
            <li onMouseEnter={this.setClassEnter} onMouseLeave={this.setClassRemove}>
              <span className={this.state.active?"circle":"circle circle-active"}>05</span>
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