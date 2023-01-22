import React from 'react'
import {BiFootball} from 'react-icons/bi'
import {BsCodeSlash,BsClockHistory} from 'react-icons/bs'
import {FiMail} from 'react-icons/fi'
import {AiOutlineBarChart,AiOutlineClockCircle} from 'react-icons/ai'

import aboutStyle from './../styles/About/About.module.css'
import Nav from '../components/Nav'

function About() {
  return (

    <div>

      <Nav />

 


    <div className={aboutStyle.main} id="about">



     <div className={aboutStyle.headline}>WELCOME TO WORLD-CUP-API</div>



    {/* Second Div */}

     <div className={aboutStyle.secondDiv}>

         <div className={aboutStyle.secondDivItemsWhite}>  

         <div className={aboutStyle.icons}><BiFootball /></div>
         <div className={aboutStyle.secondDivItemsWhiteHeadline}>  COVERAGE</div>
         <div> We cover all world cups </div>
         <div> history & scoring</div>
         <div> with data, standings</div>
         <div>events, statistics..</div>

         </div>


         <div className={aboutStyle.secondDivItemsOrange}> 

         <div className={aboutStyle.icons}><BsCodeSlash /></div>
         <div className={aboutStyle.secondDivItemsWhiteHeadline}>EASY INTEGRATION </div>
         <div> We have built a simple and </div>
         <div> logical architecture to </div>
         <div>facilitate your </div>
         <div>developments.</div>

          </div>


          </div>



 
       {/* Threed Div */} 


     <div className={aboutStyle.threddDiv}> 


     
        <div className={aboutStyle.secondDivItemsOrange}>

        <div className={aboutStyle.icons}><BsClockHistory /></div>
         <div className={aboutStyle.secondDivItemsWhiteHeadline}>HISTORICAL DATA </div>
         <div> Several years of data  </div>
         <div> available, ideal for</div>
         <div>statistics and betting, </div>
         <div>fantasy football etc..</div>

            </div>


        <div className={aboutStyle.secondDivItemsWhite}> 

        <div className={aboutStyle.icons}><AiOutlineBarChart /></div>
         <div className={aboutStyle.secondDivItemsWhiteHeadline}>MATCH ODDS</div>
         <div> We provide </div>
         <div> pre-match odds </div>
         <div>between one , and </div>
         <div>days before the match.</div>

         </div>


     </div>





        {/* Four Div */}
 
     
     <div className={aboutStyle.fourDiv}> 




          <div className={aboutStyle.secondDivItemsWhite}> 

        <div className={aboutStyle.icons}><FiMail /></div>
         <div className={aboutStyle.secondDivItemsWhiteHeadline}>SUPPORT 24/7</div>
         <div> We will answer you </div>
         <div> as soon as possible. </div>
         <div>Our support </div>
         <div>service is available here.</div>

         </div>






     
        <div className={aboutStyle.secondDivItemsOrange}>

        <div className={aboutStyle.icons}><AiOutlineClockCircle /></div>
         <div className={aboutStyle.secondDivItemsWhiteHeadline}>SCORE</div>
         <div> SCORE </div>
         <div> Matches and events</div>
         <div>updated in </div>
         <div>all our plans..</div>

            </div>


   


     </div>







     <div className={aboutStyle.prazanDiv2}></div>

    </div>



    </div>
   
  )
}

export default About