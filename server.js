const express = require("express")
const multer = require("multer")
const os = require("os")
const app = express();


const fs = require("fs")
const path = require("path")


const homeDir = path.join(os.homedir(),"desktop");
const dir = path.join(homeDir,"movies")
//fs.writeFileSync("file name.txt","bye")
console.log(dir)
// for(i=0; i<5; i++)
// {
    
//     fs.writeFileSync(`${dir}/hello${i}.txt`,"some simple text file")
// }

fs.readdir(dir,(err,files)=>{
    console.log(files)
})