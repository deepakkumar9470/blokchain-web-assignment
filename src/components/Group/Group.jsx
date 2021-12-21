import React from 'react'
import './Group.css'
import IMAGES from '../../imgs'


const Group = () => {
    return (
        <div className="group_container">
     
         <div className="group_rightSide">
             <img src={IMAGES.group} alt="rightimg" />
           </div>


                 
        <div className="group_leftSide">
            <div className="group_upper">
            <div className="circle"></div>
            
            <p>“Certainly from my perspective, 
                Dream City has been a great success—with 
                 <a href="#">CPIOT Platform </a>
                giving us that enterprise-level of
                 assured quality on top.”</p>
            </div>

                 <div className="name">
                     <p>Meetun Norsha</p>
                     <span>INDIA</span>
                 </div>

              
               
        </div> 

          
          


      </div>
    )
}

export default Group
