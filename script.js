
function formvalidation() {
const name = document.getElementById('name');
console.log(name.value)
const username = document.getElementById('username');
const email = document.getElementById('email');
const password= document.getElementById('password');

if (name.value==="") {
    alert("name cannot be written empty!");
    return;
}
if (username.value==="") {
    window.alert("username cannot be written empty!");
    return;
}
if (email.value==="") {
    alert("please enter a valid email");        
    return;
}
if (password.value==="") {
    alert("please enter a valid password");
    return;
}
}