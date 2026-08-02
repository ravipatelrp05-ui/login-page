function togglePassword(id){
let x=document.getElementById(id);

if(x.type==="password")
x.type="text";
else
x.type="password";
}

let signup=document.getElementById("signupForm");

if(signup){

signup.addEventListener("submit",function(e){

e.preventDefault();

let name=document.getElementById("name").value;
let email=document.getElementById("email").value;
let password=document.getElementById("password").value;

if(password.length<6){
alert("Password must be at least 6 characters");
return;
}

localStorage.setItem("name",name);
localStorage.setItem("email",email);
localStorage.setItem("password",password);

alert("Registration Successful");

window.location="index.html";

});

}

let login=document.getElementById("loginForm");

if(login){

login.addEventListener("submit",function(e){

e.preventDefault();

let email=document.getElementById("loginEmail").value;
let password=document.getElementById("loginPassword").value;

if(email===localStorage.getItem("email") &&
   password===localStorage.getItem("password")){

    alert("Login Successful");
    window.location="index.html";   // Stay on login page

}else{

    alert("Invalid Email or Password");

}

});

}

let pass=document.getElementById("password");

if(pass){

pass.addEventListener("keyup",function(){

let s=document.getElementById("strength");

if(pass.value.length<6)
s.innerHTML="Weak Password";
else if(pass.value.length<10)
s.innerHTML="Medium Password";
else
s.innerHTML="Strong Password";

});

}

function logout(){

window.location="index.html";

}