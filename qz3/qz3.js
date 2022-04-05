document.addEventListener("keydown",logkey);
function logkey() {
let x=document.getElementById("word").value; 
document.getElementById("constant").innerHTML = x;
}
