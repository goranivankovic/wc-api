import React from 'react'
import Link from 'next/link';
import pricingStyle from './../styles/Pricing/Pricing.module.css'
import Nav from '../components/Nav';

import { FaRegSmileWink , FaRegKissWinkHeart  , FaGlasses , FaRegHeart  ,FaMoneyBill  } from "react-icons/fa";
import { GoComment  } from "react-icons/go";

function pricing() {
  return (

    <div>
      <Nav />
    <div className={pricingStyle.main} id="pricing">
         <div className={pricingStyle.prazanDiv}></div>



  <div className={pricingStyle.headline}>COMMENTS FROM USERS</div>



          <div className={pricingStyle.coomentDiv}>

            <div>Super api, recommend it to everyone. <FaRegSmileWink className={pricingStyle.iconsColor} /></div>
             <div>Just keep up the great work.   <FaRegKissWinkHeart  className={pricingStyle.iconsColor}/>        </div>
            <div>Great, keep up the good work!    <FaRegHeart className={pricingStyle.iconsColor} />     </div>
            <div>Great job wc-api, keep it up. <FaGlasses  className={pricingStyle.iconsColor}/>        </div>
            <div>Your Api is super the best on the market. <FaRegHeart className={pricingStyle.iconsColor} /></div>
            <div>The best with price and quality. <FaMoneyBill className={pricingStyle.iconsColor} />      </div>


            <div>Just keep it up.        </div>
            <div>Great Api  the best on the market. <FaRegHeart className={pricingStyle.iconsColor} /></div>
            <div>The best with price and quality. <FaMoneyBill className={pricingStyle.iconsColor} />      </div>




          </div>






         





      <div className={pricingStyle.headline}>CHOOSE YOUR PERFECT PLAN</div>




      <div className={pricingStyle.firstDiv}>

        <div className={pricingStyle.firstDivOne}>
          <div className={pricingStyle.firstDivHeadline}>Free Plan</div>
          <div  className={pricingStyle.firstDivText}>
          <div>Price: 0$ Month </div>
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