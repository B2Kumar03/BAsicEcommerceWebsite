import navbar from "./navebar.js"
let navbar1=document.getElementById('navbar')
navbar1.innerHTML=navbar()

let flag='password'
console.log(spassword.type)

//   Hidden to show password
function peyeChanger(ev){
    let eye=document.getElementById('eye');
    let spassword=document.getElementById('spassword')
    // ev.preventDefault()
    if(flag===spassword.type){
        eye.src="./eye.png"
        spassword.type='text'
    }
    else{
        eye.src="./hidden.png"
        spassword.type='password'

    }
    
    
}

//   Hidden to show Cpassword

console.log(spassword.type)

function ceyeChanger(ev){
    let ceye=document.getElementById('hidden');
    let cspassword=document.getElementById('cpassword')
    let cflag='password'
    // ev.preventDefault()
    if(cflag===cspassword.type){
        ceye.src="./eye.png"
        cspassword.type='text'
    }
    else{
        ceye.src="./hidden.png"
        cspassword.type='password'

    }
    
    
}


// storing data in lockalstorage

let obj={}


let submit=document.getElementById('sign');
let flag2=true

submit.addEventListener('submit' ,function(ev){
    ev.preventDefault()
    let m=document.getElementById('message')
    m.style.display='block'
    

    let spassword=document.getElementById('spassword')
    let cspassword=document.getElementById('cpassword')
    let email=document.getElementById('semail')
    if(email.value=="" && spassword.value=="" && cpassword.value==""){
        email.style.borderBottom='2px solid red'
        spassword.style.borderBottom='2px solid red'
        cpassword.style.borderBottom='2px solid red'
        alert("Please enter both email and password.");
        return

      
    }
    var check=JSON.parse(localStorage.getItem("UserDetails")) ||{}
    if(email.value===check.email){
        alert("You have already Resister go to login.")
        window.location.href="./login.html"
        return
    }
     if(spassword.value==""){
        spassword.style.borderBottom='2px solid red'
        // alert("Please enter both email and password.");
        return
    }
    if(email.value==""){
        // flag2=false
        email.style.borderBottom='2px solid red'
        alert("Please enter both email and password.");
        return
    }
    if(spassword.value===cspassword.value){
        obj.password=spassword.value
    }
    else{
        alert("Conform password dont matched....")
    }
    obj.email=email.value 
    localStorage.setItem("UserDetails",JSON.stringify(obj))
    console.log(obj)

    alert("Account is succesfully created now go to login..")
    window.location.href="./login.html"

   

    
})

