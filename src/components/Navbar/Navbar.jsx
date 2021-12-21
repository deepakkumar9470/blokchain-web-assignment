import React, { useState } from 'react'


import './Navbar.css'
import { FiMenu } from 'react-icons/fi'
import { RiCloseLine } from 'react-icons/ri'

import IMAGES from '../../imgs'


const Menu = () => {
    return (
        <>
                <p><a href="#home">About</a></p>    
                 <p><a href="#discover">Case Studies</a></p>    
                 <p><a href="#pricing">Services</a></p>
                 <p><a href="#pricing">Blog</a></p>
       </>
    )
}
const Navbar = () => {

    const [toggleMenu, setToggleMenu] = useState(false)

    return (
        <div className="navbar">



            <div className="navbar_links">
                <div className="navbar_logo">
                 <img  className="logo1" src={IMAGES.logo1} alt="canva logo" />
                 <img  className="logo2" src={IMAGES.logo2} alt="canva logo" />
                </div>


              <div className="navbar_links_container">
                      <Menu/>        
              </div>   

            </div>

             <div className="leftDiv">
               <div className="form_div">
               <img className="search_img" src={IMAGES.search} alt="search" />
               <input type="text" placeholder="Search Here.." />
              </div>
                  
                  <div className="login">
                      <img className="user" src={IMAGES.user} alt="user" />
                      <p>login</p>
                  </div>
             </div>

             <div className="navbar_menu">
                 {toggleMenu ? 
                 <RiCloseLine 
                   color="#000" 
                   size={27}
                   onClick={()=>setToggleMenu(false)}/> 
                 
                 :

                 <FiMenu
                  color="#000" 
                  size={27}
                  onClick={()=>setToggleMenu(true)}/>

                 }
               {
                   toggleMenu && (
                    <div className="navbar_menu_container">
                       <div className="navbar_menu_container_links">

                            <Menu/>


                        </div>
                    </div>

                   )
               }

             </div>
             
       </div>
    )
}

export default Navbar
