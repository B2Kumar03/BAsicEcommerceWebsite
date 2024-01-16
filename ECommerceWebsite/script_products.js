import navbar from "./navebar.js"
let navbar1=document.getElementById('navbar')
navbar1.innerHTML=navbar()
let Auth=localStorage.getItem('isAuth') || []
if(Auth!="true"){
    window.location.href="./login.html"
}

let product=document.getElementById("products_continer")

function addCart(obj){
   let cartDetails=JSON.parse(localStorage.getItem("cartDetails")) || []
   cartDetails.push(obj)
  localStorage.setItem('cartDetails',JSON.stringify(cartDetails))

}
function rating(){
  fetch("./db.json")
  .then((res)=>res.json())
  .then((data)=>{
    data.sort(function(a,b){
      return b.rating.rate -a.rating.rate;
    })
    product.innerHTML=null;
    displayproducts(data)
  })

  
}


function priceLowtohigh(){

  fetch("./db.json")
  .then((res)=>res.json())
  .then((data)=>{
    data.sort(function(a,b){
      return a.price -b.price;
    })
    product.innerHTML=null;
    displayproducts(data)
  })

}


function  displayproducts(data){
   data.forEach(element => {
    let title=document.createElement('h3')
    let imge=document.createElement('img')
    let p=document.createElement('p')
    let p1=document.createElement('p')
    p1.innerText=element.rating.rate+" ⭐";
    let box=document.createElement('div')
    let cartbutton=document.createElement('button')
      cartbutton.innerText="Add Cart"

      title.innerText=element.title
      imge.src=element.image
      p.innerText=element.price
      imge.style.width="100px"
      box.append(title,imge,p,p1,cartbutton)
      product.append(box)

      cartbutton.onclick=function(){
        addCart(element)

      }

    
   });
      



}

let ebh1=document.getElementById('ebh')

ebh1.addEventListener('change',function(ev){
  ev.preventDefault()
  console.log(ebh1);
  let below=document.getElementById('below')
  let high=document.getElementById('high')
  let low=document.getElementById('low')
  let enterprice=document.getElementById('enterprice')
  let arr=[]
  if(below.value=="below"){
    alert('hii')
    fetch("./db.json")
  .then((res)=>res.json())
  .then((data)=>{
    data.forEach(function(ele){
      if(ele.price<enterprice.value){
        arr.push(ele)
      }
    })
    product.innerHTML=null;
    displayproducts(arr)
  })
     

  }
  else if(high.value==="high"){
    fetch("./db.json")
    .then((res)=>res.json())
    .then((data)=>{
      data.forEach(function(ele){
        if(ele.price>enterprice.value){
          arr.push(arr)
        }
      })
      product.innerHTML=null;
      displayproducts(data)
    })

  }

  else if(equal.value==="equal"){

    fetch("./db.json")
  .then((res)=>res.json())
  .then((data)=>{
    data.forEach(function(ele){
      if(ele.price<enterprice.value){
        arr.push(ele)
      }
    })
    product.innerHTML=null;
    displayproducts(arr)
  })


  }

})




fetch("./db.json")
.then((res)=>res.json())
.then((data)=>displayproducts(data)
  
)
.catch((err)=>console.log(err))




       

     



