let express=require("express")
let local=require("node-localstorage").LocalStorage
let storage=new local("./store")
let port=3020
let app=express()

app.use(express.json())
var array=[]
app.post("/",(req,res)=>{
    array.push(req.body)
    storage.setItem("store",JSON.stringify(array));
    const data=storage.getItem("store")
    res.send(data)
})
app.get("/",(req,res)=>{
    const dis=storage.getItem("store")
    res.send(dis)
})



app.listen(port,()=>{
    console.log(`this ${port} success`)
})
