console.log("chai aur code");

require('dotenv').config()
// console.log(process.env)

const express = require('express')  //require module syntax

// import express from "express"    //same as above but different style in js 

const app = express()  //variable app

const port = 3000  


//my github data with the help of url.
const githubData={   
  "login": "ananya2313",
  "id": 132429678,
  "node_id": "U_kgDOB-S3bg",
  "avatar_url": "https://avatars.githubusercontent.com/u/132429678?v=4",
  "gravatar_id": "",
  "url": "https://api.github.com/users/ananya2313",
  "html_url": "https://github.com/ananya2313",
  "followers_url": "https://api.github.com/users/ananya2313/followers",
  "following_url": "https://api.github.com/users/ananya2313/following{/other_user}",
  "gists_url": "https://api.github.com/users/ananya2313/gists{/gist_id}",
  "starred_url": "https://api.github.com/users/ananya2313/starred{/owner}{/repo}",
  "subscriptions_url": "https://api.github.com/users/ananya2313/subscriptions",
  "organizations_url": "https://api.github.com/users/ananya2313/orgs",
  "repos_url": "https://api.github.com/users/ananya2313/repos",
  "events_url": "https://api.github.com/users/ananya2313/events{/privacy}",
  "received_events_url": "https://api.github.com/users/ananya2313/received_events",
  "type": "User",
  "site_admin": false,
  "name": "Ananya",
  "company": null,
  "blog": "",
  "location": null,
  "email": null,
  "hireable": null,
  "bio": null,
  "twitter_username": null,
  "public_repos": 8,
  "public_gists": 0,
  "followers": 1,
  "following": 0,
  "created_at": "2023-05-03T05:48:15Z",
  "updated_at": "2024-03-30T09:04:45Z"
}

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


app.get('/github',(req,res)=>{
    res.json(githubData)  // getting github data using the varialbe we creaed above
    })



// app.listen(port, () => {
//   console.log(`Example app listening on port ${port}`)
// })

app.listen(process.env.PORT, () => {
  console.log(`Example app listening on port ${port}`)
})
