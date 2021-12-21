import React from 'react'

import './Join.css'

import IMAGES from '../../imgs'

const Join = () => {
    return (
        <div className="join_container">

                 
        <div className="join_text">
            
            <h3>Join our team be a great skills elit.</h3>
            
        </div> 

           <div className="join_rightText">
                  <p>We’re a team of creatives who 
                      are excited about unique ideas & help.</p>

                   <button>
                      Send your CV
                      <img src={IMAGES.arrowRightBlack} alt="btnarrow" />  
                    </button>    
             
           </div>
          
          

         </div>
    )
}

export default Join
