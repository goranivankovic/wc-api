import React from 'react'

import sve from '../components/Example'
import Nav from '../components/Nav'

import docuStyle from '../styles/Docu/Docu.module.css'

function documentation() {
  return (
    <div>


      <Nav />

     <div className={docuStyle.main} id="documentation">

        <div className={docuStyle.headline} style={{borderBottom:"2px solid #0D5DCD"}}> DOCUMENTATION </div>



        <div className={docuStyle.firstDiv}>
          
          <div>API-FOOTBALL(1.0.0)</div>

                <div className={docuStyle.firstDivHeadline}>Introduction</div>
                 <div>Welcome to WC-API!!!</div>
                 <div> You can use our API to access all API endpoints, </div>
                 <div> which can get information about Football & World Cups.</div>
        
                    <div>We have language bindings in :</div>
                    <div> C, Java, Javascript, NodeJs, Php, PowerShell, Python, Ruby, Shell!</div>
                   <div>You can view code examples in the light area to the right.</div>
                  

   
        </div>




        <div className={docuStyle.secondDiv}>
          
        

          <div className={docuStyle.firstDivHeadline}>Authentication</div>

     <div>  We uses API keys to allow access to the API. </div>
     <div> You can get a new API key if u following the instructions.</div>    

      <div> Our API expects for the API key to be included in all API requests, </div>
        <div> to the server in a header that looks like the following:</div>     
       <div>The API is configured to work only with GET requests, </div>
       <div>and has limit of requests per day.</div>   
  
     
        </div>


        <div className={docuStyle.headline}> <span>EXAMPLE ONE</span> </div>
        <div className={docuStyle.threedDiv}>

            <div>Exemple GET all Worl Cup winers.</div>
            <div>Example URL: <span style={{color:"#0D5DCD"}}> https://nscoder-wc-api.vercel.app/api/allwiners</span></div>
            <div>Available on Pro-Plan & Free-Plan.</div>
            <div>All world cup winers 1930-2018</div>
            <div>With country,stadium,attendance</div>
            <div>First you must get a API-KEY go to pricing ,</div>
            <div>and choose your Plan.</div>

        </div>





        


        <div className={docuStyle.headline}> <span>EXAMPLE TWO</span> </div>
        <div className={docuStyle.threedDiv}>


            <div>Exemple GET World Cup winner by Year.</div>
            <div>Example URL: <span style={{color:"#0D5DCD"}}> https://nscoder-wc-api.vercel.app/api/allwiners/year/1954 </span></div>
            <div>Available only on Pro-Plan.</div>
            <div>You will GET a World Cup winner in year 1954.</div>
            <div>Quater-Finals,Semi-Finals,Finals,Attendance,Stadium.</div>
            <div>First you must get a API-KEY go to pricing ,</div>
            <div>and choose your Plan.</div>

  
        </div>





        
        
        <div className={docuStyle.headline}><span>EXAMPLE THREE</span> </div>

        <div className={docuStyle.threedDiv}>

            <div>Exemple GET World Cup winner by Country Name.</div>
            <div>Example URL:  <span style={{color:"#0D5DCD"}}> https://nscoder-wc-api.vercel.app/api/allwiners/team/germany</span></div>
            <div>Available only on Pro-Plan.</div>
            <div>You will get all Germany world Cup Wins.</div>
            <div>With country,stadium,attendance</div>
            <div>First you must get a API-KEY go to pricing ,</div>
            <div>and choose your Plan.</div>

        </div>







          
        <div className={docuStyle.headline}><span>EXAMPLE FOUR</span> </div>

        <div className={docuStyle.threedDiv}>

 
            <div>Exemple GET World Cup winner by most wins.</div>
            <div>Example URL: <span style={{color:"#0D5DCD"}}> https://nscoder-wc-api.vercel.app/api/allwiners/mostWins/1</span></div>
            <div>Available only on Pro-Plan.</div>
            <div>You will GET a World Cup winner that have the most wins.</div>
            <div>That is Brazil.</div>
            <div>First you must get a API-KEY go to pricing ,</div>
            <div>and choose your Plan.</div>
    
      </div>




        <div className={docuStyle.prazanDiv}></div>

    </div>

    </div>
    
  )
}

export default documentation