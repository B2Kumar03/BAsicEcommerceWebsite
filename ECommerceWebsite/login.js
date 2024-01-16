import navbar from "./navebar.js"

let navbar1=document.getElementById('navbar')

navbar1.innerHTML=navbar()
let login=document.getElementById('login')
console.log(login);

let mn=document.getElementById('mnavbar')

mn.innerHTML=mnavbar()



login.addEventListener('submit',function(ev){
    ev.preventDefault()
    let cspassword=document.getElementById('spassword')
    let email=document.getElementById('semail')
    console.log(email);
    
    let id=JSON.parse(localStorage.getItem("UserDetails")) || []
    console.log((id));
    
    if(id==[]){
        alert("Create an account.")
    }
    else{
        if(id.email===email.value && id.password===cspassword.value){
            localStorage.setItem('isAuth',"true")
            alert("Login successfully")
        }
    }
})


