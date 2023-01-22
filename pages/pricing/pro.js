import React from 'react'

import {BiFootball} from 'react-icons/bi'
import   Link  from 'next/link'
import proStyle from '../../styles/Pro/Pro.module.css'

function pro() {
  return (
      <div>

       <div className={proStyle.main}>

           <div className={proStyle.headline}>Your Pro API-key</div>

           <div className={proStyle.firstDiv}>Be a part of the  WC-API  <BiFootball />  family</div>
        

           <div className={proStyle.secondDiv}>
               <div>To get a Pro API-key you must follow the instructions.</div>
               <div>Exemple GET all Worl Cup winers.</div>
               <div style={{color:"#0D5DCD"}}>Example URL: https://nscoder-wc-api.vercel.app/api/allwiners <div> Available on Pro-Plan & Free-Plan.</div></div>
               <div>All world cup winers 1930-2018, With country,stadium,attendance First you must get a API-KEY go to pricing , and choose your Plan.</div>
              <div> Free-Plan has limit of 2000 requests per day.</div>
              <div>Have fun implement on your projects.</div>
              <div>Your  WC-API <BiFootball /> family.</div>
           </div>




     
         
        
       


           <div className={proStyle.fourdDiv}><Link href={'/'}><button className={proStyle.buttonDiv}>Go Back</button></Link> </div>

 
       </div>



     </div>

  )
}

export default pro