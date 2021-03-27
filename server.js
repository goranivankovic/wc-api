const express = require('express');
const cors = require('cors');
require('dotenv').config()
const cookieParser = require('cookie-parser');
const nodemailer = require('nodemailer');
const path = require('path');


const app =express()

const PORT =process.env.PORT || 5000;

app.use(express.json())
app.use(express.urlencoded({extended:true}))
app.use(cookieParser())


app.use(cors())



const allRoutes = require('./server/routes/allRoutes');

app.use('/api',allRoutes)










if(process.env.NODE_ENV === 'production'){
    app.use(express.static('client/build'));
    app.get('*',(req,res)=>{
        res.sendFile(path.join(__dirname,'client','build','index.html'));
    });
}





app.listen(PORT,()=>{
    console.log(`Server is running on ${PORT} : -)`);
})