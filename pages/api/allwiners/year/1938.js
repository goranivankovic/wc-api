import NextCors from 'nextjs-cors';
import w1938 from '../../../../components/Json/world1938.json'

export default async function handler(req, res) {
  await NextCors(req, res, {
    // Options
    methods: ['GET', 'HEAD', 'PUT', 'PATCH', 'POST', 'DELETE'],
    origin: '*',
    optionsSuccessStatus: 200, // some legacy browsers (IE11, various SmartTVs) choke on 204
 });


    res.json( 

       w1938
     
)}