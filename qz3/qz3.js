document.addEventListener("keydown",logkey);
function logkey() {
var x=document.getElementById("word").value; 
document.getElementById("constant").innerHTML = x;
}
