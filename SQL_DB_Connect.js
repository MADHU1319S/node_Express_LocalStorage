let sql=require("mysql")

var ks=sql.createConnection({
    host:"localhost",
    user:"root",
    password:"@Madhu2001",
    database:"nodedb"
})

ks.connect(()=>{
    console.log("connected successfully");
})

module.exports=ks;