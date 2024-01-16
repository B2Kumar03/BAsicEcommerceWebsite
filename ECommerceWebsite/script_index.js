import navbar from "./navebar.js"
let navbar1=document.getElementById('navbar')
// console.log(navbar1);
navbar1.innerHTML=navbar()
let searchbox=document.getElementById('searchbox')

function chageplaceholder(){
    searchbox.placeholder="Enter Product name..."  
}

function searchproduct(){
    alert("Product not found")
}