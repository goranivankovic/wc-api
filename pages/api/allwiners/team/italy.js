import NextCors from 'nextjs-cors';
import i1 from '../../../../components/Json/world1934.json'
import i2 from '../../../../components/Json/world1938.json'
import i3 from '../../../../components/Json/world1982.json'
import i4 from '../../../../components/Json/world2006.json'



const it=[i1,i2,i3,i4]


export default async function handler(req, res) {
  await NextCors(req, res, {
    // Options
    methods: ['GET', 'HEAD', 'PUT', 'PATCH', 'POST', 'DELETE'],
    origin: '*',
    optionsSuccessStatus: 200, // some legacy browsers (IE11, various SmartTVs) choke on 204
 });


    res.json( 
   
        it
     
  
)}