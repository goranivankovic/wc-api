import NextCors from 'nextjs-cors';
import u1 from '../../../../components/Json/world1930.json'
import u2 from '../../../../components/Json/world1950.json'

const ur=[u1,u2]


export default async function handler(req, res) {
  await NextCors(req, res, {
    // Options
    methods: ['GET', 'HEAD', 'PUT', 'PATCH', 'POST', 'DELETE'],
    origin: '*',
    optionsSuccessStatus: 200, // some legacy browsers (IE11, various SmartTVs) choke on 204
 });


    res.json( 
     ur
     
  
)}