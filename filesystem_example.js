

var a=require("http"); 
var b=require("url");
var fs=require("fs");
// const { error } = require("console");

a.createServer((req,res)=>{

    // var bubu=b.parse(req.url,true)
    fs.readFile("./index.txt",(err,data)=>{

        if(err){
            res.write(err);
            res.end();
        }
        else{
            res.write(data);
            res.end();
        }

    })
    
// //     console.log(req.url);
// //     console.log(bubu);
// //    console.log(req.method);
//     console.log(bubu.query)
//     var l=bubu.query
//     if(bubu.pathname==="/login" && req.method==="GET"){

//         c.readFile("./json.json",JSON.stringify(l),((error,data)=>{
//             if(error){
//                 res.write(error);
//                 res.end();
//             }
//             else{
//                 res.write("one");
//                 res.end();
//             }
//         }))
//     }

//     else if(bubu.pathname==="/register" && req.method==="POST"){
//     res.write(JSON.stringify([{"two":"successfully registered"}]));
//     res.end();
//     }

//     else{
//         res.write("Entered into the wrong page");
//         res.end();
//     }

}).listen(3002,()=>{
    
    console.log('server success');
})