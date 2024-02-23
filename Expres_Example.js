
const { error } = require("console");
let express=require("express")
let appData=express()
let port=3005
let fs=require("fs")

// appData.use((request,response,next)=>{
//     console.log("heyy")
//     next();
// })
appData.use(express.json());
var arrey=[]

appData.get("/",(request,response)=>{
   fs.readFile("./store1.json",(error,data)=>{
    response.send(data)
    console.log(request.body);
   })
});

appData.post("/",(request,response)=>{
        arrey.push(request.body);
        fs.appendFile("./store1.json",JSON.stringify(arrey),(error)=>{
            console.log(error)
            response.json("data added")
        })
    response.send("helo")
});

appData.listen(port,()=>{
    console.log(`server ${port} success`);
})