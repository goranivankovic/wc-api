import NextCors from 'nextjs-cors';
import f1 from '../../../../components/Json/world1998.json'
import f2 from '../../../../components/Json/world2018.json'




const fr=[f1,f2]


export default async function handler(req, res) {
  await NextCors(req, res, {
    // Options
    methods: ['GET', 'HEAD', 'PUT', 'PATCH', 'POST', 'DELETE'],
    origin: '*',
    optionsSuccessStatus: 200, // some legacy browsers (IE11, various SmartTVs) choke on 204
 });


    res.json( 
   
        fr
     
  
)}