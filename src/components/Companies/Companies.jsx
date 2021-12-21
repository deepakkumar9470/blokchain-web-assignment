import React from 'react'

import './Companies.css'
import IMAGES from '../../imgs'

const Companies = () => {
    return (
        <div className="companybrand_container">

                 
        <div className="companybrand_text">
            <span>NEWS</span>
            <h3>Our Partners.</h3>
            
        </div> 

           <div className="company_brands">
                
                
                <div className="google_brand">
                   <span>Cloud partners</span>
                   <img src={IMAGES.google} alt="google" />
                </div>
               

               <div className="ocean_brand">                  
                   <img src={IMAGES.digitalocean} alt="ocean" />
               </div>

               <div className="amazon_brand">                 
                   <img src={IMAGES.amazon} alt="amazon" />
               </div>

               <div className="ibm_brand">                 
                   <img src={IMAGES.ibm} alt="ibm" />
               </div>

           </div>

           <div className="openware_brand">
                   <span className="openware_span">Blockchain partners</span>
                   <img src={IMAGES.openware} alt="openware" />
               </div>
          
          

         </div>
    )
}

export default Companies
