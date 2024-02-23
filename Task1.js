let express=require("express")
let app=express()
app.use(express.json())

let local=require("node-localstorage").LocalStorage
let storage=new local("store")

app.get("/users",(req,res)=>{
    const jm=storage.getItem("store")
    res.send(jm)
    console.log(jm);
})
app.listen(3021,()=>{
    console.log("3021 port success")
})
