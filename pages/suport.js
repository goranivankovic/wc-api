import React from 'react'

import suportStyle from '../styles/Suport/Suport.module.css'


import {FaJava , FaNode ,FaPhp ,FaPython ,FaLaravel ,FaUser ,FaClock } from 'react-icons/fa'

import {DiRuby} from 'react-icons/di'
import Nav from '../components/Nav'

function suport() {
  return (

    <div>

      <Nav />

    
      <div className={suportStyle.main} id="suport">

      <div className={suportStyle.headline}>OUR API WORKS WITH</div>

      <div className={suportStyle.secondDiv}>
       <div>Whathever your programming language, our data works with </div> 
                           <div>and remain the same across all platforms.</div>
          </div>


        <div className={suportStyle.threedDiv}>

         <FaJava  className={suportStyle.threedDiv_items} style={{color:"orange"}} />

          <FaNode className={suportStyle.threedDiv_items} style={{color:"green"}}/>

          <FaPhp className={suportStyle.threedDiv_items} style={{color:"#0D5DCD"}}/>

        </div>  

        <div className={suportStyle.fourDiv}>

        <DiRuby  className={suportStyle.threedDiv_items} style={{color:"red"}}/>


        <FaPython className={suportStyle.threedDiv_items} style={{color:"#0D5DCD"}}/>

        <FaLaravel className={suportStyle.threedDiv_items} style={{color:"red"}}/>

        </div>  


    <div className={suportStyle.headline}>POPULAR NEWS</div>

       <div className={suportStyle.fiveDiv}>
      


     {/* Box 1 */}
      <div className={suportStyle.fiveDivBox}>

          <span className={suportStyle.fiveDivBoxImage}></span>

          <div>WC-API November 02, 2023 <FaClock /> </div>

          <div>Many of us have been asking for it and looking forward to it. It is now available!</div>

          <div>You can find all the information about this new API directly in the documentation.</div>

          <div>Here is the list of available endpoints:</div>
          <div>- Teams</div>
          <div>- Year</div>
            <div>- Winer</div>
          <div>- Fixtures</div>
          <div>- Games</div>
          <div>- Standings</div>
          <div>It is of course available on our Read More</div>
      </div>














      
     {/* Box 2 */}
      <div className={suportStyle.fiveDivBox}>

          <span className={suportStyle.fiveDivBoxImage2}></span>

          <div>WC-API June 08, 2023  <FaClock  /></div>

          <div>The new version of API-FOOTBALL (3.9.2) is now available.</div>

          <div>The major feature is the new endpoint odds which as the name suggests returns the odds of the games in progress.</div>

          <div>Here is the list of all the new features: </div>
          <div> </div>
          <div>Endpoint</div>
          <div>- Add endpoint odds/live</div>
            <div>- Add endpoint odds/live/bets</div>
          <div>Endpoint fixtures</div>
          <div>- Add the ids parameter that allows to retrieve</div>
          <div>- Data from several fixtures including, events</div>
    
      </div>









  
     {/* Box 3 */}
      <div className={suportStyle.fiveDivBox}>

          <span className={suportStyle.fiveDivBoxImage3}></span>

          <div>WC-API March 9, 2023  <FaClock  /></div>

          <div>The 2023 F1 season is about to start and for that we have improved our API with more data and new endpoints.</div>
           <div>NEW ENDPOINTS:</div>
          <div>- rankings/fastestlaps : Get the ranking of the fastest laps for a race.</div>
          <div>- rankings/startinggrid : Get the starting grid for a race.</div>
          <div>- pitstops : Get the list of pit stops made by all drivers during a race.</div>

        <div>MORE DATA:</div>
          <div>- Races endpoint, add a fastest lap field which</div>
          <div>- Contains the driver id and the time to</div>
          <div>- Results</div>
          <div> </div>
         
  


      </div>





    


         </div>






        <div className={suportStyle.prazanDiv}> </div>


    </div>


    </div>
   
  )
}

export default suport