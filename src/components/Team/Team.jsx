import React from 'react'


import './Team.css'

import IMAGES from '../../imgs'

const Team = () => {
    return (
        <div className="team_container">
             
             <h3>Our Core Team Players.</h3>

            <div className="team_player">
            
                  <div className="teams">
                      <img className="pranay" src={IMAGES.team1} alt="pranay" />
                      <h2>Pralay Mandal</h2>
                      <span>CEO</span>
                  </div>

                  <div className="teams">
                      <img className="bitu" src={IMAGES.team2} alt="bitu" />
                      <h2>Bitu Saud</h2>
                      <span>Creative Head</span>
                  </div>

                  <div className="teams">
                      <img className="manab" src={IMAGES.team3} alt="manab" />
                      <h2>Manab Ranjan Das</h2>
                      <span>Marketing</span>
                  </div>
                  
            
             </div> 
  
          


        </div>
    )
}

export default Team
