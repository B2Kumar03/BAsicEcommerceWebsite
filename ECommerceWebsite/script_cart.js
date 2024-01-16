
// let Auth=localStorage.getItem('isAuth')
// if(Auth==="autheticate"){
//     window.location.href="./login.html"
// }
import navbar from "./navebar.js"
let navbar1=document.getElementById('navbar')
navbar1.innerHTML=navbar()
let product=document.getElementById("products_continer")
let elemen=JSON.parse(localStorage.getItem('cartDetails')) ||[]
console.log(elemen);

elemen.forEach(function(element){
    let title=document.createElement('h3')
    let imge=document.createElement('img')
    let p=document.createElement('p')
    let p1=document.createElement('p')
    p1.innerText=element.rating.rate+" ⭐";
    let box=document.createElement('div')
    let cartbutton=document.createElement('button')
      cartbutton.innerText="Remove Cart"

      title.innerText=element.title
      imge.src=element.image
      p.innerText=element.price
      imge.style.width="100px"
      box.append(title,imge,p,p1,cartbutton)
      product.append(box)

      cartbutton.onclick=function(){
        removeCart(element)
      }

})


function removeCart(obj){
    let elemen=JSON.parse(localStorage.getItem('cartDetails')) ||[]

    elemen.pop(obj)
    localStorage.setItem("cartDetails",JSON.stringify(elemen))
    location.reload();
}