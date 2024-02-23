
const express=require("express")
const fs=require("fs")
const app=express()

app.use(express.json())

app.get("/",(req,res)=>{
  fs.readFile("./Express_Store1.json",(err,data)=>{
    res.send(data)
  })
})
app.post("/",(req,res)=>{
 fs.readFile("./Express_Store1.json",(err,data)=>{
    console.log();
    const ar=JSON.parse(data)
    ar.push(req.body)
    console.log(ar)
    
    fs.writeFile("./Express_Store1.json",JSON.stringify(ar,null,2),(err)=>{
        res.send("hello")
    })
  })    
})

app.listen(3050,()=>{
    console.log("running")
})