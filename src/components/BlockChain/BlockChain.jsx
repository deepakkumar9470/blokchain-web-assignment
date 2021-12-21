import React from 'react'

import './BlockChain.css'
import IMAGES from '../../imgs'

const BlockChain = () => {
    return (
        <div className="blockchain_container">

                 
        <div className="blockchain_text">
            <img className="blockchain" src={IMAGES.blockchain} alt="blockchain" />
            <div className="iot_div">
            <img className="ai" src={IMAGES.ai} alt="blockchain" />
            <img className="iot" src={IMAGES.iot} alt="blockchain" />
            </div>
            
          
        </div> 

          
           <div className="blockchain_para">
               
                      <div className="para_text">
                         <h3>Expert Members</h3>
                         <span>+</span>
                      </div>   

                      <div className="para_text">
                         <div className="para2">
                         <h3>Secure & Trsuted</h3>
                         <p className="founders">Our founders Dustin Moskovitz and Justin quis 
                             Rosenstein met while leading Engineering team
                             at Facebook. </p>
                         </div>
                         <span>-</span>
                      </div> 
                      
                      <div className="para_text">
                         <h3>Expert Members</h3>
                         <span>+</span>
                      </div> 

                      <div className="para_text">
                         <h3>Big Resoruces</h3>
                         <span>+</span>
                      </div> 

                      

                         
           </div>


     </div>
    )
}

export default BlockChain
