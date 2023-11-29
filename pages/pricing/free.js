import React,{useEffect} from 'react'

import {BiFootball} from 'react-icons/bi'
import   Link  from 'next/link'
import freetStyle from '../../styles/Free/Free.module.css'

function free() {


  return (
    <div>

       <div className={freetStyle.main}>

           <div className={freetStyle.headline}>Your free API-key</div>

           <div className={freetStyle.firstDiv}>Be a part of the  WC-API  <BiFootball />  family</div>


           <div className={freetStyle.secondDiv}>
               <div>To get a free API-key you must follow the instructions.</div>
               <div>Exemple GET all Worl Cup winers.</div>
               <div style={{color:"#0D5DCD"}}>Example URL: https://nscoder-wc-api.vercel.app/api/allwiners </div>
               <div> Available on Pro-Plan & Free-Plan. </div>
               <div>All world cup winers 1930-2018, With country,stadium,attendance.</div>
              <div>  First you must get a API-KEY go to pricing .</div>
              <div> Free-Plan has limit of 200 requests per day.</div>
              <div>Please enter your email address in the right white text input & click submit button.</div>
              <div>Then u will receive email with your api key.</div>
              <div>Have fun implement on your projects.</div>
              <div>Your  WC-API <BiFootball /> family.</div>
           </div>



           <div className={freetStyle.fourdDiv}>
            <button className={freetStyle.buttonDiv}><Link href={'/'} style={{textDecoration:"none",color:"white"}}>Go Back</Link> </button>
            </div>
            

 
       </div>


   
    </div>
  )
}

export default free