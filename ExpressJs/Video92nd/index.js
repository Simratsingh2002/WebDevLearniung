//EJS TEMPLATE is used to change or enter the content inside html or any other file.
//EJS is used to create dynamic content in html file 
//to install ejs use npm install ejs
//EJS KA KAAM H VALUES KO EXPRESS SE LAAKE TEMPLATE ME DALNA 
const express = require('express');

const app = express();
const port = 3000;
app.set('view engine', 'ejs');    //to set ejs template as a  view engine

// variable donoting way is <%= searchText %> //to print the value of variable in the file whicch we are targetting
app.get('/', (req, res) => {
    let siteName = "Adidas"
    let searchText = "Search Now"
    let arr = ["Hey", 54, 65]
    res.render("index", { siteName: siteName, searchText: searchText, arr })  //no need to write.ejs to identify file
})

app.get('/blog/:slug', (req, res) => {
    let blogTitle = "Adidas why and when?"
    let blogContent = "Its a very good brand"
    res.render("blogpost", {blogTitle: blogTitle, blogContent: blogContent})   //we use render to view the template . this says blogTitle in blogpost.ejs will be blogTitle of this request this file
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})