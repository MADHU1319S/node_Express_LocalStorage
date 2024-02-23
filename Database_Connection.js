const express=require("express")
const app=express()
app.use(express.json())

let con=require("./SQL_DB_Connect.js")

app.post("/register",(req,res)=>{
    con.query("insert into users set ?",req.body,(err,data)=>{
        console.log(data);
        console.log(err);
        res.status(200).json({
            "status":200,
            "res":"successfully data stored in SQL"
        })
    })  
})

app.get("/users",(req,res)=>{
    con.query("select*from users",(err,data)=>{
        if(err){
            res.send(err)
        }
        else{
            res.status(200).json(data)
        }
    })
})


app.listen(3120,()=>{
    console.log("server success");
})