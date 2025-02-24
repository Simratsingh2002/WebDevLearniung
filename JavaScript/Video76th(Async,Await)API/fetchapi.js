const factpara=document.querySelector(".fact");
const displayarea=document.querySelector(".display");

const URL="https://catfact.ninja/fact";
//fetch method used to fetch data , and response or request are objects
const facts=async()=>{
    console.log("getting data....");
    let response=await fetch(URL);       //api returns a promise and return JSON format notation data
    console.log(response)
    console.log(response.status)
    let data= await response.json();    //now returned data has to convereted to usbale json format,earlier it was notation but unusable  we cant get info out of that , this also returns a promise so await used
    console.log(data.fact);   //now it was used data ,so this gives us the data we actually need
    displayarea.innerText=data.fact;

}
factpara.addEventListener("click",facts);
//We request server or api by fetch method ... requets diff type - GET request,post request(to upload data) ,delete reuest(to delete on server)  the method we used above is default get request , u can take a look while working with any api , they have different fetch methods for having post or delete requests.