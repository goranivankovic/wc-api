import NextCors from 'nextjs-cors';
import a1 from '../../../../components/Json/world1978.json'
import a2 from '../../../../components/Json/world1986.json'




const ar=[a1,a2]


export default async function handler(req, res) {
  await NextCors(req, res, {
    // Options
    methods: ['GET', 'HEAD', 'PUT', 'PATCH', 'POST', 'DELETE'],
    origin: '*',
    optionsSuccessStatus: 200, // some legacy browsers (IE11, various SmartTVs) choke on 204
 });


    res.json( 
   
       ar
     
  
)}