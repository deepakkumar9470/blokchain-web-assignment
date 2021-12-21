import React from 'react'

import './Marketing.css'

import IMAGES from '../../imgs'

const Marketing = () => {
    return (
        <div className="marketing_container">
            
              <div className="marketing_cards">
                  <img src={IMAGES.star} alt="start" />
                  <p>Marketing.</p>
                  <span className="span">Creating a spacing how people move through.</span>
              </div>
              
              <div className="marketing_cards">
                  <img src={IMAGES.star} alt="start" />
                  <p>Dev & Design.</p>
                  <span className="span">Creating a higher spacing how people move through. 
                      From its mel origins to the digital era.</span>
              </div>
              
              <div className="marketing_cards">
                  <img src={IMAGES.star} alt="start" />
                  <p>Creativity.</p>
                  <span className="span">Get a full cRontrol of debts in the
                   dsu digital world simplesity. labore et dolore magna aliqua</span>
               </div>

            
        </div>
    )
}

export default Marketing
