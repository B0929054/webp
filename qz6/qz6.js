function myfuntion()
{
  var today =new Date();
  var h=today.getHours()
  var m=today.getMinutes()
  var s=today.getSeconds()
  document.getElementById("time").innerHTML=h+":"+m+":"+s;
}
setInterval(myfuntion,100)
