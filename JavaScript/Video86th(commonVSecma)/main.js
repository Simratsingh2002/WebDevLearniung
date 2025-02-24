 //when in decription of ur module type in COMMON.JS , we import things by 
 //const x= require("//name odf file")    
 //console.log(x)  would print the output from "name odf file" which would have cxertain things exported like-   module.export(a), so a would go defualt into x of another file. 
 //node.js gives us additonal methgods aswe ll  , suppose we cn do ,console.log(x,__dirname,__filename)  ,and many more some of these defult are created by node.js itself in commonjs



 //when type woould be MODULE(ECMASCRIPT)  , it would be imported by ,, usual import x from "y"..
 //in this , if it another file we set something to be exported, we write it as export const a=1, then we import in another file by import {a} from "xyz"    , if we write export default x=3; it would be exported by any variable name.(without curly bracket)
