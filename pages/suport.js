import React from 'react'

import suportStyle from '../styles/Suport/Suport.module.css'


import {FaJava , FaNode ,FaPhp ,FaPython ,FaLaravel} from 'react-icons/fa'

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

         <FaJava  className={suportStyle.threedDiv_items} />

          <FaNode className={suportStyle.threedDiv_items} style={{color:"green"}}/>

          <FaPhp className={suportStyle.threedDiv_items} style={{color:"#0D5DCD"}}/>

        </div>  

        <div className={suportStyle.fourDiv}>

        <DiRuby  className={suportStyle.threedDiv_items} style={{color:"red"}}/>


        <FaPython className={suportStyle.threedDiv_items} style={{color:"#0D5DCD"}}/>

        <FaLaravel className={suportStyle.threedDiv_items} style={{color:"red"}}/>

        </div>  





        <div className={suportStyle.prazanDiv}> </div>


    </div>


    </div>
   
  )
}

export default suport