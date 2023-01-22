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

            <div className={navStyles.logo}> WC-API <BiFootball  style={{color:"firebrick"}}/></div>

            <ul className={navStyles.navItems}>
                <Link href="/"  >Home</Link>
                <Link href="/about"  >About</Link> 
                <Link href="/suport"  >Suport</Link>
                <Link href="/documentation"  >Documentation</Link>
                <Link href="/pricing"  >Pricing</Link>
                <Link href="/footer"  >Contact</Link>
             

            </ul>

        </div>
   

  <AiOutlineBars  className={navStyles.bar} onClick={navBar}/>

 
            
             {laz ?
    
            <div className={navStyles.main768} id="main768">

                

                      <Link onClick={navBar} href="/" >Home</Link>
                     <Link onClick={navBar} href="/about" >About</Link>
                    <Link onClick={navBar} href="/suport">Suport</Link>
                     <Link onClick={navBar} href="/documentation" >Documentation</Link>
                     <Link onClick={navBar} href="/pricing">Pricing</Link>
                   <Link onClick={navBar} href="/footer" >Contact</Link>
 
               

                   


           </div>
 :""}


       


    </div>
  )
}

export default Nav