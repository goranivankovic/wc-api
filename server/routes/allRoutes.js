
const express = require('express');
const nodemailer = require('nodemailer');



//1930-1938
const world1930=require('../Json/world1930.json')
const world1934=require('../Json/world1934.json')
const world1938=require('../Json/world1938.json')


//1950-1958
const world1950=require('../Json/world1950.json')
const world1954=require('../Json/world1954.json')
const world1958=require('../Json/world1958.json')


//1962-1970
const world1962=require('../Json/world1962.json')
const world1966=require('../Json/world1966.json')
const world1970=require('../Json/world1970.json')


//1974-1978
const world1974=require('../Json/world1974.json')
const world1978=require('../Json/world1978.json')


//1982-1990
const world1982=require('../Json/world1982.json')
const world1986=require('../Json/world1986.json')
const world1990=require('../Json/world1990.json')


//1994-1998
const world1994=require('../Json/world1994.json')
const world1998=require('../Json/world1998.json')


//2002-2010
const world2002=require('../Json/world2002.json')
const world2006=require('../Json/world2006.json')
const world2010=require('../Json/world2010.json')


//2014-2018
const world2014=require('../Json/world2014.json')
const world2018=require('../Json/world2018.json')








const allChampions =[world1930,world1934,world1950,world1954,world1958,
    world1962,world1966,world1970,world1974,world1978,world1982,world1986,world1990
    ,world1994,world1998,world2002,world2006,world2010,world2014,world2018

]

const uruguay=[
    world1930,
    world1950

]
const italy=[
    world1934,world1938,world1982,world2006
]
const germany=[
    world1954,world1974,world1990,world2014
]

const brazil=[
    world1958,world1962,world1970,world1994,world2002
]
const argentina=[
    world1978,world1986
]

const france=[
    world1998,world2018


]
const spain =[
    world2010
]





const router =express.Router()

//Rout all Winers
router.get(`/${process.env.API_KEY}/allwiners`,(req,res)=>{
  
    res.json(allChampions)
})


//Routes by Country name
router.get(`/${process.env.API_KEY}/allwiners/team=uruguay`,(req,res)=>{
  
    res.json(uruguay)
})


router.get(`/${process.env.API_KEY}/allwiners/team=italy`,(req,res)=>{
  
    res.json(italy)
})

router.get(`/${process.env.API_KEY}/allwiners/team=germany`,(req,res)=>{
  
    res.json(germany)
})

router.get(`/${process.env.API_KEY}/allwiners/team=brazil`,(req,res)=>{
    res.json(brazil)
  
})

router.get(`/${process.env.API_KEY}/allwiners/team=argentina`,(req,res)=>{
    res.json(argentina)
  
})

router.get(`/${process.env.API_KEY}/allwiners/team=france`,(req,res)=>{
    res.json(france)
  
})

router.get(`/${process.env.API_KEY}/allwiners/team=spain`,(req,res)=>{
    res.json(spain)
  
})


//Routes by year

router.get(`/${process.env.API_KEY}/allwiners/year=1930`,(req,res)=>{
    res.json(world1930)
  
})
router.get(`/${process.env.API_KEY}/allwiners/year=1938`,(req,res)=>{
    res.json(world1938)
  
})
router.get(`/${process.env.API_KEY}/allwiners/year=1950`,(req,res)=>{
    res.json(world1950)
  
})
router.get(`/${process.env.API_KEY}/allwiners/year=1954`,(req,res)=>{
    res.json(world1954)
  
})
router.get(`/${process.env.API_KEY}/allwiners/year=1958`,(req,res)=>{
    res.json(world1958)
  
})
router.get(`/${process.env.API_KEY}/allwiners/year=1962`,(req,res)=>{
    res.json(world1962)
  
})
router.get(`/${process.env.API_KEY}/allwiners/year=1966`,(req,res)=>{
    res.json(world1966)
  
})
router.get(`/${process.env.API_KEY}/allwiners/year=1970`,(req,res)=>{
    res.json(world1970)
  
})

router.get(`/${process.env.API_KEY}/allwiners/year=1974`,(req,res)=>{
    res.json(world1974)
  
})
router.get(`/${process.env.API_KEY}/allwiners/year=1978`,(req,res)=>{
    res.json(world1978)
  
})
router.get(`/${process.env.API_KEY}/allwiners/year=1982`,(req,res)=>{
    res.json(world1982)
  
})
router.get(`/${process.env.API_KEY}/allwiners/year=1986`,(req,res)=>{
    res.json(world1986)
  
})
router.get(`/${process.env.API_KEY}/allwiners/year=1990`,(req,res)=>{
    res.json(world1990)
  
})
router.get(`/${process.env.API_KEY}/allwiners/year=1994`,(req,res)=>{
    res.json(world1994)
  
})
router.get(`/${process.env.API_KEY}/allwiners/year=1998`,(req,res)=>{
    res.json(world1998)
  
})
router.get(`/${process.env.API_KEY}/allwiners/year=2002`,(req,res)=>{
    res.json(world2002)
  
})
router.get(`/${process.env.API_KEY}/allwiners/year=2006`,(req,res)=>{
    res.json(world2006)
  
})
router.get(`/${process.env.API_KEY}/allwiners/year=2010`,(req,res)=>{
    res.json(world2010)
  
})
router.get(`/${process.env.API_KEY}/allwiners/year=2014`,(req,res)=>{
    res.json(world2014)
  
})
router.get(`/${process.env.API_KEY}/allwiners/year=2018`,(req,res)=>{
    res.json(world2018)
  
})


//Route Number of World Cup titles

router.get(`/${process.env.API_KEY}/allwiners/mostWins=1`,(req,res)=>{
    res.json(brazil)
  
})

router.get(`/${process.env.API_KEY}/allwiners/mostWins=2`,(req,res)=>{
    res.json(germany)
  
})
router.get(`/${process.env.API_KEY}/allwiners/mostWins=3`,(req,res)=>{
    res.json(italy)
  
})
router.get(`/${process.env.API_KEY}/allwiners/mostWins=4`,(req,res)=>{
    res.json(uruguay)
  
})
router.get(`/${process.env.API_KEY}/allwiners/mostWins=5`,(req,res)=>{
    res.json(france)
  
})
router.get(`/${process.env.API_KEY}/allwiners/mostWins=6`,(req,res)=>{
    res.json(spain)
  
})







































module.exports =router