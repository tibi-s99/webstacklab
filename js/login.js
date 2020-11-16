function login(){
var username = document.getElementById("t3").value;
var password = document.getElementById("t4").value;
if ( username == "tibi" && password == "tibi86#"){
alert ("Thank You for Login & You are Redirecting to Musitracks Premium");
window.location = "index.html"; 
return false;
}
else{
alert ("Incorrect Username and/or Password");
return false;
}
}
