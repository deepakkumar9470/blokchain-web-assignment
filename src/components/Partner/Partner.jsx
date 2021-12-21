import React from 'react'
import './Partner.css'


import IMAGES from '../../imgs'

const Partner = () => {
    return (
        <div className="partner_container">

                 
            <div className="partner_text">
            
              <img 
                className="arrowround"
                src={IMAGES.arrow_round} 
                alt="arrowround" />

              <h3>Why Choose Code Partner?</h3>
             


               <div className="partner_span">
               <p>So how does it work? Let’s check our Getting 
                Started tutorial for detailed info.</p>
               <span>
                   <img className="tick" src={IMAGES.tick} alt="tick1" />
                   Provides professional service with 
                ease and single point of contact.</span>
              <span>
              <img className="tick" src={IMAGES.tick} alt="tick1" />
                  Takes complete responsibility from start to end.</span> 
              <span>
                  <img className="tick" src={IMAGES.tick} alt="tick1" />
                  Dedicated Relationship Manager in place.</span>     
              </div> 

             <button className="consultButton">Consult with an exprt now!</button>               
        </div> 

          
           <div className="partner_para">
              <img src={IMAGES.leftImg} alt="consultimg" />
           </div>


       </div>
    )
}

export default Partner
