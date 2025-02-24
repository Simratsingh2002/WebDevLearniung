const { error } = require("console")
const fs= require("fs")
 //console.log(fs)   //this would give all fucntionaliies of filemodule     ,as const fs would have the exported object fdrom there ,and when we will go in it then we can get more things we ewant
console.log("starting")
// fs.writeFileSync("harry.txt","simratisagoodboi")   this runs in synchronous , means first it will finish then only code will go below.

fs.writeFile("simrat2txt","I love you simrt",()=>{    //asynchornous function
    console.log("done writing,now reading")
    fs.readFile("simrat2txt",(error,data)=>{
        console.log(error,data.toString())
    })
})
fs.appendFile("simrat2txt","I love u too",(e,d)=>{
    console.log(d)
}
) 