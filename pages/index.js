
import Image from 'next/image'
import { Inter } from '@next/font/google'
import Home from './home'
import About from './about'
import Suport from './suport'
import Documentation from './documentation'

import Pricing from './pricing'
import Nav from '../components/Nav'
import Footer from './footer'




const inter = Inter({ subsets: ['latin'] })

export default function index() {
  return (


    <div>
      <Nav />
      <Home />
      <About />
      <Suport />
      <Documentation />
      <Pricing />
      <Footer />



    </div>


    
    
  )
}
