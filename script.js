import { log } from "console";
import fs from "fs"
import  EventEmitter  from "stream";
// const OS = require("os")
// console.log(OS.arch());
// console.log(OS.cpus())
// console.log(OS.freemem());

// fs.readFile("./example.txt", "utf-8", (err,data)=>{
//     if(err){
//         console.log(err);
//         return;
//     }
//     console.log(data);
// })

// const data = fs.readFileSync("./example.txt")


// const fsPromises = fs.promises;
// (async ()=>{
//     try{
//         await fsPromises.writeFile("test.txt", "Promise asosida yozilgan matn", "utf-8");
//         const data = await fsPromises.readFile("test.txt", "utf-8");
//         console.log("fayl mazmuni",data);
        
//     }catch(err){
//         console.log("Xatolik",err);   
//     }
// })();

// fs.readdir("../",(err,files)=>{
//     if (err) {
//         console.log("err",err);
        
//     }
//     files.forEach((file)=>{
//         console.log({file});
        
//     })
// })


const emitter = new EventEmitter();

emitter.on("message", (xabar=>{
    console.log("Yangi xabar:",xabar);
    
}));

emitter.emit("message", "assalomu alaykum");