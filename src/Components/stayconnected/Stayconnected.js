import React from "react";
import '../stayconnected/stayconnected.css'
class Stayconnected extends React.Component{
    render(){
        return(
            <div>
                <section id="stayconnect">
    <div className="container position-relative mart-1">
        <div className="row">
            <div className="col-md-1"></div>
            <div className="col-md-10">
            <div className="bodycontainer">
        <div className="row bodycontainerbg">
          <div className="col-md-12 col-sm-12">

            <h3>Stay Connected</h3>

          </div>
          <div className="col-md-12 col-sm-12">
            <form>
              <div className="row">
                <div className="col-md-12 col-sm-12" id="result"></div>
                <div className="col-md-3 col-sm-6">
                  <div className="form-group">
                    <label htmlFor="userName"></label>
                    <input className="form-control" type="text" placeholder="Name" required="" id="userName"
                      name="userName"/>
                  </div>
                </div>
                <div className="col-md-3 col-sm-6">
                  <div className="form-group">
                    <label htmlFor="companyName"></label>
                    <input className="form-control" type="text" placeholder="Company" id="companyName" name="companyName"/>
                  </div>
                </div>
                <div className="col-md-3 col-sm-6">
                  <div className="form-group">
                    <label htmlFor="email"></label>
                    <input className="form-control" type="email" placeholder="Email" required="" id="email" name="email"/>
                  </div>
                </div>
                <div className="col-md-3 col-sm-6">
                  <button type="submit" className="button btn btn-primary mar-top-2 btngrident w-100"
                    id="submit_btn">subscribe</button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
            </div>
            <div className="col-md-1"></div>
        </div>
      
    </div>
  </section>
            </div>
        )
    }
}
export default Stayconnected;