function validateEmail(email){

return /^[^\s@]+@[^\s@]+\.[^\s@]+$/
.test(email);
}

document
.getElementById("regPassword")
.addEventListener(
"input",
function(){

let pass=this.value;
let strength=
document.getElementById(
"strength"
);

if(pass.length<6){

strength.innerText="Weak";
strength.style.color="red";
}
else if(pass.length<10){

strength.innerText="Medium";
strength.style.color="orange";
}
else{

strength.innerText="Strong";
strength.style.color="green";
}
});

function register(){

let email=
document.getElementById(
"regEmail"
).value;

let password=
document.getElementById(
"regPassword"
).value;

if(!validateEmail(email)){

alert("Invalid Email");
return;
}

localStorage.setItem(
"user",
JSON.stringify({
email,
password
})
);

alert(
"Registration Successful"
);
}

function login(){

let email=
document.getElementById(
"loginEmail"
).value;

let password=
document.getElementById(
"loginPassword"
).value;

let user=
JSON.parse(
localStorage.getItem(
"user"
)
);

if(
user &&
email===user.email &&
password===user.password
){

localStorage.setItem(
"loggedInUser",
email
);

window.location=
"dashboard.html";
}
else{

document.getElementById(
"message"
).innerText=
"Invalid Credentials";
}
}

function togglePassword(id){

let field=
document.getElementById(id);

field.type=
field.type==="password"
? "text"
: "password";
}

document
.getElementById("themeBtn")
.addEventListener(
"click",
()=>{

document.body.classList.toggle(
"dark"
);

});