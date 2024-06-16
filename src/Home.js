
import React, {  useState } from "react";
import "./App.css"


export default function Home() {
    
  return (
    <div>
    
        <div className='mt-3'  style={{ marginLeft : "5px"}}> <img src="CaptureLogo.svg" width ="200px" hight = "200px" alt='vector' ></img></div>
          <div class="container mt-5">        
            <div class="row">
              <div class="col-lg-6 mt-5">
                <p style={{fontSize:"40px", fontWeight:"10px"}}><b>Launch your Data Career in <br/>
                 Weeks, not Years</b></p>
                 <h6><span style={{ fontSize: "20px"}}>What to expect:</span></h6>
                  <p style={{fontSize: "20px"}}>- <span style={{ color: "#616A6B" }}><b>Short-answer </b></span> questions & <span style={{ color: "#616A6B" }}><b>No </b></span> cover letter</p>
                   <p style={{fontSize: "20px"}}>- Takes 4 mins on average</p>
                  
                   <button  class="btn mt-5" type="button"
              ><b>Start Your Journey</b></button> 
             
                    
                  
              </div>
              <div class="col-lg-6 mt-1">
                 <img src="CaptureMen.svg" width ="600px" hight = "500px" alt='vector'></img>
               
              </div>
            </div>
          </div>
        
        </div>
  )
}
