import React from 'react'

import './Footer.css'
import IMAGES from '../../imgs'

const Footer = () => {
    return (
        <div className="footer_container">
               <hr/>
             <div className="footer">


                  <div className="footer_text">
                      <img className="footer_logo1" src={IMAGES.logo1} alt="footer1" />
                      <img className="footer_logo2" src={IMAGES.logo2} alt="footer1" />
                      <p>CODE PARTNER</p>
                  </div>
                
                  <div className="footer_links">
                      <h3>LINKS</h3>
                      <a href="#apps">Home</a>
                      <a href="#apps">Services</a>
                      <a href="#apps">About us</a>
                      <a href="#apps">Careers</a>
                      <a href="#apps">Press Release</a>
                      <a href="#apps">Blog</a>

                  </div>

                  <div className="footer_links">
                      <h3>LEGAL</h3>
                      <a href="#apps">Terms of use</a>
                      <a href="#apps">Terms & conditions</a>
                      <a href="#apps">Privacy policy</a>
                      <a href="#apps">Cookie policy</a>
                  </div>



                 
                  <div className="footer_links">
                      <p>NEWSLETTERT</p>
                      <span className="span1">Join over <a href="#">68,000</a> people getting our emails</span>
                      
                       <div className="input_wrapper">
                       <input type="text" placeholder="Enter your email"/>
                        <button>Sign Up</button>
                        <p className="span2">We only send interesting and relevant emails.</p>
                       </div>
                          
                      
                      

                  </div>

                


             </div>

             <hr className="under_hr" />


             <div className="copyright">
                 
                  <p>  Privacy & Terms.  Contact Us</p>
                 <span className="copyright_span">Copyright @2021 Code PartnerIT Solutions Pvt. Ltd.</span>
                

                 <div className="social_links">
                     <img src={IMAGES.facebook} alt="facebook" />
                     <img src={IMAGES.twitter} alt="facebook" />
                     <img src={IMAGES.linkedin} alt="facebook" />

                 </div>

             </div>
        </div>
    )
}

export default Footer
