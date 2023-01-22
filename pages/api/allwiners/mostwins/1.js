import NextCors from 'nextjs-cors';
import b1 from '../../../../components/Json/world1958.json'
import b2 from '../../../../components/Json/world1962.json'
import b3 from '../../../../components/Json/world1970.json'
import b4 from '../../../../components/Json/world1994.json'
import b5 from '../../../../components/Json/world2002.json'


const br=[b1,b2,b3,b4,b5]


export default async function handler(req, res) {
  await NextCors(req, res, {
    // Options
    methods: ['GET', 'HEAD', 'PUT', 'PATCH', 'POST', 'DELETE'],
    origin: '*',
    optionsSuccessStatus: 200, // some legacy browsers (IE11, various SmartTVs) choke on 204
 });


    res.json( 
     br
     
  
)}