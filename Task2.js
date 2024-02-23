let express=require("express")
let app=express()
app.use(express.json())

let local=require("node-localstorage").LocalStorage
let storage=new local("./store2")
let port=3022
let array=[]

app.post("/register",(req,res)=>{
    array.push(req.body)
    storage.setItem("store2",JSON.stringify(array))
    res.send(`${req.body.username} registered success`)
})
app.get("/users",(req,res)=>{
    const kk=storage.getItem("store2")
    res.send(kk)
})

app.listen(port,()=>{
    console.log(`this ${port} success`)
})