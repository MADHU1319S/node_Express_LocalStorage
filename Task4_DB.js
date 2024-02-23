let express=require("express")
let app=express()
app.use(express.json())

let connection=require("./Task4.js")
const { parse } = require("picomatch")


app.post("/register",(req,res)=>{
    var {username,email,password}=req.body;
    connection.query("select * from users where username =? or email =? or password =? ",[username,email,password],(err,data)=>{
        if(err){
            res.send(err)
        }
        else{
            if(data.length>0){
                res.send("user already existed")
            }
            else{
                connection.query("insert into users set ?",req.body,(err,data)=>{
                    console.log(data);
                    console.log(err);
                    res.status(200).json({
                        "status":200,
                        "res":req.body
                    })
                })
            }
        }
    })  
})


app.post("/login",(req,res)=>{
    var {username,email,password}=req.body;
    connection.query("select * from users where username =? and email =? and password =? ",[username,email,password],(err,data)=>{
        if(err){
            res.send(err)
        }
        else{
            if(data.length>0){
                res.send("login success")
            }
            else{
                res.send("wrong details")
            }
        }
    })
})


app.get("/getusers",(req,res)=>{
    connection.query("select * from users",(err,data)=>{
        if(err){
            res.send(err)
            console.log(err);
        }
        else{
            res.send(data);
            //res.status(200).json(data);
            console.log(data);
        }
    })
})


app.listen(3024,()=>{
    console.log("port 3024 success");
})