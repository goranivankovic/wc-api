import React from 'react'
import Link from 'next/link';
import pricingStyle from './../styles/Pricing/Pricing.module.css'
import Nav from '../components/Nav';

function pricing() {
  return (

    <div>
      <Nav />
    <div className={pricingStyle.main} id="pricing">
         <div className={pricingStyle.prazanDiv}></div>

      <div className={pricingStyle.headline}>Choose your Perfect Plan to use our WC-API</div>




      <div className={pricingStyle.firstDiv}>

        <div className={pricingStyle.firstDivOne}>
          <div className={pricingStyle.firstDivHeadline}>Free Plan</div>
          <div  className={pricingStyle.firstDivText}>
          <div>Price: 0$ Month</div>
          <div>100 requests / per month</div>
          <div>Countries</div>
          <div>Fixtures</div>
          <div>Attendance</div>
          <div>Finals</div>
          </div>
       <Link href="/pricing/free"><button className={pricingStyle.firstDivButton}>Free Plan</button></Link>   
           </div>



        <div className={pricingStyle.firstDivTwo}>
        <div className={pricingStyle.firstDivHeadline}>Pro Plan</div>
          <div className={pricingStyle.firstDivText}>
          <div >Price: 8$ Month</div>
          <div>2000 requests / per day</div>
          <div>Countries/Fixtures</div>
          <div>Attendance/Finals</div>
          <div>Quater-Finals/Semi-Finals</div>
          <div>Finals</div>
          </div>
          <Link href="/pricing/pro"><button className={pricingStyle.firstDivButton}>Pro Plan</button></Link>

        </div>

      </div>



   

   <div className={pricingStyle.secondDiv}>By subscribing, you agree to the Terms of use</div>
    </div>

    </div>
  )
}

export default pricing