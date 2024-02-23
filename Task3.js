let express=require("express")
let app=express()
app.use(express.json())
let port=3023

let local=require("node-localstorage").LocalStorage
// //console.log(local);
// let st=local.LocalStorage
// //console.log(st);
let storage=new local("store2")

app.post("/login",(req,res)=>{
    let data=JSON.parse(storage.getItem("store2"))
    console.log(data)
    // res.send(data)
    var count=0
    data.filter((val,ind)=>{ 
        if(val["username"]==req.body.username && val['GMail']==req.body.GMail && val['password']==req.body.password){
            count++   
        }  
    })
    if(count>0){
        res.send(`user exist ${count} times`)
    }
    else{
        res.send(`user not exsisted`)
    }
})
app.listen(port,()=>{
    console.log(`${port} success`);
})