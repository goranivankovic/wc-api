import NextCors from 'nextjs-cors';
import g1 from '../../../../components/Json/world1954.json'
import g2 from '../../../../components/Json/world1974.json'
import g3 from '../../../../components/Json/world1990.json'
import g4 from '../../../../components/Json/world2014.json'


const ger=[g1,g2,g3,g4]


export default async function handler(req, res) {
  await NextCors(req, res, {
    // Options
    methods: ['GET', 'HEAD', 'PUT', 'PATCH', 'POST', 'DELETE'],
    origin: '*',
    optionsSuccessStatus: 200, // some legacy browsers (IE11, various SmartTVs) choke on 204
 });


    res.json( 
     ger
     
  
)}