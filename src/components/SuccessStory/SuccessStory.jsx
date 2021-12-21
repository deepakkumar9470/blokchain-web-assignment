import React from 'react'

import './SuccessStory.css'

import IMAGES from '../../imgs'

const SuccessStory = () => {
    return (
        <div className="success_container">

                 
                <div className="success_text">
                    <h3>Our Success Story.</h3>
                    
                </div> 

          
           <div className="arrow_wrapper">
                 <img src={IMAGES.arrowleft} alt="lef" />
                 

                 <img className="arrowright" src={IMAGES.arrowRight} alt="right" />
                
           </div>


      </div>
    )
}

export default SuccessStory
