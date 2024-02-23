let sql=require("mysql")
let connect=sql.createConnection({
    host:"localhost",
    user:"root",
    password:"@Madhu2001",
    database:"task4"
})

connect.connect(()=>{
    console.log("connection successful");
})

module.exports=connect