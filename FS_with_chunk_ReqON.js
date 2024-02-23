var a=require("http"); 
var b=require("url");
var fs=require("fs");


var array=[]
a.createServer((req,res)=>{
    var bubu=b.parse(req.url,true)
    console.log(req.url);
    console.log(bubu);
    console.log(req.method);
   
    if(bubu.pathname==="/login"&& req.method==="GET"){
        fs.readFile("./store1.json",(err,data)=>{
            if(err){
                res.write(err);
                res.end();
            }
            else{
                res.write(data);
                res.end();
            }
        })
        
    }
    
    else if(bubu.pathname==="/register"&& req.method==="POST"){
        var body=""; 
        req.on("data",(chunk)=>{
            body=body+chunk.toString();
        })
        req.on("end",()=>{
            console.log(body);
            array.push(JSON.parse(body))
            fs.appendFile("./store1.json",JSON.stringify(array),(error)=>{
                console.log(error);
                res.write("ram");
                res.end();
            })
        })
    }

    else{
        res.write("Entered into the wrong page");
        res.end();
    }

}).listen(3003,()=>{
    
    console.log('server success');
})