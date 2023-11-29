import React from 'react'

import footerStyle from '../styles/Footer/Footer.module.css'
import { AiOutlineFacebook,AiFillGithub ,AiOutlineLinkedin ,AiOutlineYoutube} from 'react-icons/ai'
import { FaTwitter  } from 'react-icons/fa'
import Nav from '../components/Nav'

function footer() {
  return (
    
     <div>

      <Nav />

     <div className={footerStyle.main} id="contact">
        <div className={footerStyle.empty}></div>



        <div className={footerStyle.firstDiv}>

      <div className={footerStyle.firstDiv_first_row}>
          <div className={footerStyle.firstDiv_first_row_headline }>PRODUCTS</div>

          <div>Football Data</div>
          <div>The WC-API</div>
          <div>All football Data</div>
          <div>30 Day Kick Start Plan</div>
          <div>Our documentation</div>

      </div>

      <div className={footerStyle.firstDiv_first_row}>

      <div className={footerStyle.firstDiv_first_row_headline }>Data</div>

         <div>Countries/Fixtures</div>
         <div>Stadium/Attendance</div>
        <div>Finals/Results</div>
        <div>Date/Time</div>
        <div>2000 Requests/Per day</div>
          
          </div>

          <div className={footerStyle.firstDiv_first_row}>
          <div className={footerStyle.firstDiv_first_row_headline }>CONTACT</div>

          
          <div>footballapiuk@gmail.com</div>
          <div>Support Centre</div>
          <div>Github Support </div>
          <div>Google Support </div>
          <div>Linkedin Support </div>
          
          </div>


       </div>


       <div className={footerStyle.empty}></div>
    </div>

    </div>
  
  )
}

export default footer