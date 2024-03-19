// const connectMongoose=require('./db')
const express=require('express')
// const port=process.env.PORT ||5000;
var cors=require('cors')
// connectMongoose();
require('./db')
const path = require("path");
//express se server bana raha hua aur uska name app de diya 
const app=express()
app.use(express.json())
app.use(cors())
//server bana hai expeess ki help se 
// app.get("/", (req, res) => {
// app.use(express.static(path.resolve(__dirname, "frontend", "build")));
// res.sendFile(path.resolve(__dirname, "frontend", "build", "index.html"));
// });
// this is running ,testing local hsot 
// app.get('/',(req,res)=>{
//     res.send("hellow ,server is running fine ")
// })
// app.get('/about',(req,res)=>{
//     res.send("the response is for /about requst ")
// })
app.get('/test',(req,res)=>{
    res.send("the respoonse for /test requset ")
})
app.get('/home',(req,res)=>{
    res.send("for /home request")
})


app.use('/',require('./Routes/Auth'))
app.get("/", (req, res) => {
    app.use(express.static(path.resolve(__dirname, "frontend", "build")));
    res.sendFile(path.resolve(__dirname, "frontend", "build", "index.html"));
  });
app.listen(1000,()=>{
    console.log(` backend  is listening at http://localhost:1000`)
})
