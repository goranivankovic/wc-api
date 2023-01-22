import NextCors from 'nextjs-cors';

import w1 from '../../../components/Json/world1930.json'



import w2 from '../../../components/Json/world1934.json'

import w3 from '../../../components/Json/world1938.json'

import w4 from '../../../components/Json/world1950.json'
import w5 from '../../../components/Json/world1954.json'

import w6 from '../../../components/Json/world1958.json'
import w7 from '../../../components/Json/world1962.json'

import w8 from '../../../components/Json/world1966.json'
import w9 from '../../../components/Json/world1970.json'
import w10 from '../../../components/Json/world1974.json'
import w11 from '../../../components/Json/world1978.json'

import w12 from '../../../components/Json/world1982.json'
import w13 from '../../../components/Json/world1986.json'

import w14 from '../../../components/Json/world1990.json'

import w15 from '../../../components/Json/world1994.json'
import w16 from '../../../components/Json/world1998.json'
import w17 from '../../../components/Json/world2002.json'
import w18 from '../../../components/Json/world2006.json'
import w19 from '../../../components/Json/world2010.json'

import w20 from '../../../components/Json/world2014.json'
import w21 from '../../../components/Json/world2018.json'






const world =[w1,w2,w3,w4,w5,w6,w7,w8,w9,w10,w11,w12,w13,w14,w15,w16,w17,w18,w19,w20,w21]





export default async function handler(req, res) {
  await NextCors(req, res, {
    // Options
    methods: ['GET', 'HEAD', 'PUT', 'PATCH', 'POST', 'DELETE'],
    origin: '*',
    optionsSuccessStatus: 200, // some legacy browsers (IE11, various SmartTVs) choke on 204
 });


    res.json( 
   
       world
     
  
)}