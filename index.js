console.log("chai aur code");

require('dotenv').config()
// console.log(process.env)

const express = require('express')  //require module syntax

// import express from "express"    //same as above but different style in js 

const app = express()  //variable app

const port = 3000  

app.get('/', (req, res) => {   
  res.send('Hello World!')  //req ke liye ek response send hoga ir Hello World
})

app.get('/twitter',(req,res)=>{
    res.send('ananyadotcom')
})

app.get('/login',(req,res)=>{
    res.send('<h1>Please subscibe to my channel</h1>')
})

app.get('/youtube',(req,res)=>{
    res.send('https://www.youtube.com')  //repsonse link ke form me ni aaya hai
    })



// app.listen(port, () => {
//   console.log(`Example app listening on port ${port}`)
// })

app.listen(process.env.PORT, () => {
  console.log(`Example app listening on port ${port}`)
})
