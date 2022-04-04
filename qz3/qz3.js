document.addEventListener("key",logkey);   //使用keydown輸出會延遲一步，使用keyup卻沒有，為什麼?
function logkey() {
let x=document.getElementById("word").value; 
document.getElementById("constant").innerHTML = x;
}
