import React from 'react'

import './Header.css'
 import IMAGES from '../../imgs'
const Header = () => {
  return (
    <div className="head_container">

                 
                 <div className="leftSide">
                     <h2>Smart Consulting Group.</h2>
                     <p>We helping client  to create technology that uses Blockchain, 
                       AI and IOT with our talented expert.</p>

                       <button>Consult with an exprt now!</button>
                       <span>Already a member? <a href="#">Sign in</a>.</span>
                        
                 </div> 

                   
                    <div className="rightSide">
                      <img src={IMAGES.rightImg} alt="rightimg" />
                    </div>


    </div>
  )
}

export default Header