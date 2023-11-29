import React,{useState} from 'react'

import navStyles from '../styles/Nav/Nav.module.css'
import {AiOutlineBars} from 'react-icons/ai'
import {BiFootball} from 'react-icons/bi'

import  Link   from 'next/link'






function Nav() {
  const[laz,setLaz]=useState(false)

  function navBar(){

    setLaz(!laz)

  }
  
    



  return (
    <div>

    
        <div className={navStyles.main}>

            <div className={navStyles.logo}><BiFootball  style={{color:"black"}}/> WC-API</div>

            <div className={navStyles.navItems}>

                
                     <Link  href="/" >HOME</Link>
                     <Link  href="/about" >ABOUT</Link>
                     <Link  href="/suport">SUPORT / NEWS</Link>
                     <Link  href="/documentation" >DOCUMENTATION</Link>
                     <Link  href="/pricing">COMMENTS / PRICING</Link>
                     {/* <Link  href="/" >CONTACT</Link> */}

                     <button>LOGIN</button>
             

            </div>

        </div>
   

  <AiOutlineBars  className={navStyles.bar} onClick={navBar}/>

 
            
             {laz ?
    
            <div className={navStyles.main768} id="main768">

                

                      <Link onClick={navBar} href="/" >Home</Link>
                     <Link onClick={navBar} href="/about" >ABOUT</Link>
                    <Link onClick={navBar} href="/suport">SUPORT / NEWS</Link>
                     <Link onClick={navBar} href="/documentation" >DOCUMENTATION</Link>
                          <Link onClick={navBar} href="/pricing">COMMENTS / PRICING</Link>
                   {/* <Link onClick={navBar} href="/footer" >CONTACT</Link> */}
 
               

                   


           </div>
 :""}


       


    </div>
  )
}

export default Nav