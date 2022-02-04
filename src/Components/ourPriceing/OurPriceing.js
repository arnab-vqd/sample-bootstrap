import React from "react";
import '../ourPriceing/ourPriceing.css'
 const OurPriceing=()=>{

  //     const e = document.getElementById("filt-monthly");
  //     const d = document.getElementById("filt-hourly");
  //     const t = document.getElementById("switcher");
  //     const m = document.getElementById("monthly");
  //     const y = document.getElementById("hourly");

  // e.addEventListener("click", ()=>{
  //   t.checked = false;
  //   e.classList.add("toggler--is-active");
  //   d.classList.remove("toggler--is-active");
  //   m.classList.remove("hide");
  //   y.classList.add("hide");
  // });

  // d.addEventListener("click", ()=>{
  //   t.checked = true;
  //   d.classList.add("toggler--is-active");
  //   e.classList.remove("toggler--is-active");
  //   m.classList.add("hide");
  //   y.classList.remove("hide");
  // });

  // t.addEventListener("click", ()=>{
  //   d.classList.toggle("toggler--is-active");
  //   e.classList.toggle("toggler--is-active");
  //   m.classList.toggle("hide");
  //   y.classList.toggle("hide");
  // })


    
        return(
            <>
            
          

<section class="pricing-columns pricing-section pad-xy">

{/* <div className="row">
        <div className="col-md-12 text-center">
          <div>
            <span className="blue-clr font-16">Read Out Our</span>
            <h2 className="font-48 text-black1">  Pricing Offers  </h2>
            

          </div>
        </div>
      </div> */}
  <label class="toggler toggler--is-active " id="filt-monthly">Monthly</label>
  <div class="toggle">
    <input type="checkbox" id="switcher" class="check"/>
    <b class="b switch"></b>
  </div>
  <label class="toggler" id="filt-hourly">Hourly</label>
  <div id="monthly" class="wrapper-full">
    <div id="pricing-chart-wrap">
      <div id="pricing-chart" style={{padding:'0, 14rem'}}>
        <div id="smaller-plans">
            <div class="plan">
              <div class="price">
                <span class="dollar">$</span>
                <span class="amount" data-dollar-amount="22.59">22.59</span>
                <span class="slash">/</span>
                <span class="month">mo</span>
              </div>
              <ul>
                <li>20GB<span>SSD Disk</span></li>
                <li>512MB<span>Memory</span></li>
                <li>1 Core<span>vCPU</span></li>
                
                <li>333GB/mo<span>Transfer</span></li>
              </ul>
              <a class="button sign-up" href="https://orders.gigenetcloud.com/order.php?quick=79,20,512,730">Sign Up</a>
            </div>
           
            <div class="plan popular">
              <div class="price">
                <span class="dollar">$</span>
                <span class="amount" data-dollar-amount="56.88">56.88</span>
                <span class="slash">/</span>
                <span class="month">mo</span>
              </div>
                <p class="pop-plan">Most Popular Plan</p>
              <ul>
                <li>40GB<span>SSD Disk</span></li>
                <li>2GB<span>Memory</span></li>
                <li>1 Core<span>vCPU</span></li>
                <li>1333GB/mo<span>Transfer</span></li>
              </ul>
              <a class="button sign-up" href="https://orders.gigenetcloud.com/order.php?quick=79,40,2048,730">Sign Up</a>
            </div>
            <div class="plan">
              <div class="price">
                <span class="dollar">$</span>
                <span class="amount" data-dollar-amount="102.05">102.05</span>
                <span class="slash">/</span>
                <span class="month">mo</span>
              </div>
              <ul>
                <li>60GB<span>SSD Disk</span></li>
                <li>4GB<span>Memory</span></li>
                <li>2 Cores<span>vCPU</span></li>
                <li>2667GB/mo<span>Transfer</span></li>
              </ul>
              <a class="button sign-up" href="https://orders.gigenetcloud.com/order.php?quick=79,60,4096,730">Sign Up</a>
            </div>
            
        </div>
       
        </div>
      </div>
    </div>
<div id="hourly" class="wrapper-full hide">
    <p class="bandwidth">Pricing in USD. Excludes any applicable tax.</p>
    <div id="pricing-chart-wrap">
      <div id="pricing-chart">
        <div id="smaller-plans">
            <div class="plan ">
              <div class="price">
                <span class="dollar">$</span>
                <span class="amount" data-dollar-amount="0.03">0.03</span>
                <span class="slash">/</span>
                <span class="month">hr</span>
              </div>
              <ul>
                <li>20GB<span>SSD Disk</span></li>
                <li>512MB<span>Memory</span></li>
                <li>1 Core<span>vCPU</span></li>
                <li>Transfer<span>Pay as you use it</span></li>
              </ul>
              <a class="button sign-up" href="https://orders.gigenetcloud.com/order.php?quick=79,20,512,1">Sign Up</a>
            </div>
            <div class="plan ">
              <div class="price">
                <span class="dollar">$</span>
                <span class="amount" data-dollar-amount="0.05">0.05</span>
                <span class="slash">/</span>
                <span class="month">hr</span>
              </div>
              <ul>
                <li>30GB<span>SSD Disk</span></li>
                <li>1GB<span>Memory</span></li>
                <li>1 Core<span>vCPU</span></li>
                <li>Transfer<span>Pay as you use it</span></li>
              </ul>
              <a class="button sign-up" href="https://orders.gigenetcloud.com/order.php?quick=79,30,1024,1">Sign Up</a>
            </div>
            <div class="plan popular">
              <div class="price">
                <span class="dollar">$</span>
                <span class="amount" data-dollar-amount="0.08">0.08</span>
                <span class="slash">/</span>
                <span class="month">hr</span>
              </div>
              <p class="pop-plan">Most Popular Plan</p>
              <ul>
                <li>40GB<span>SSD Disk</span></li>
                <li>2GB<span>Memory</span></li>
                <li>1 Core<span>vCPU</span></li>
                <li>Transfer<span>Pay as you use it</span></li>
              </ul>
              <a class="button sign-up" href="https://orders.gigenetcloud.com/order.php?quick=79,40,2048,1">Sign Up</a>
            </div>
            <div class="plan">
              <div class="price">
                <span class="dollar">$</span>
                <span class="amount" data-dollar-amount="0.14">0.14</span>
                <span class="slash">/</span>
                <span class="month">hr</span>
              </div>
              <ul>
                <li>60GB<span>SSD Disk</span></li>
                <li>4GB<span>Memory</span></li>
                <li>2 Cores<span>vCPU</span></li>
                <li>Transfer<span>Pay as you use it</span></li>
              </ul>
              <a class="button sign-up" href="https://orders.gigenetcloud.com/order.php?quick=79,60,4096,1">Sign Up</a>
            </div>
            <div class="plan">
              <div class="price">
                <span class="dollar">$</span>
                <span class="amount" data-dollar-amount="0.28">0.28</span>
                <span class="slash">/</span>
                <span class="month">hr</span>
              </div>
              <ul>
                <li>80GB<span>SSD Disk</span></li>
                <li>8GB<span>Memory</span></li>
                <li>4 Cores<span>vCPU</span></li>
                <li>Transfer<span>Pay as you use it</span></li>
              </ul>
              <a class="button sign-up" href="https://orders.gigenetcloud.com/order.php?quick=79,80,8192,1">Sign Up</a>
            </div>
        </div>
       
        </div>
      </div>
    </div>
</section>
            </>
        )
    }

export default OurPriceing;