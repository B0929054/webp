var i1=0,g1=1,k1=1;
var i2=0,g2=1,k2=1;
var i3=0,g3=1,k3=1;
var i4=0,g4=1,k4=1;
var i5=0,g5=1,k5=1;
var i6=0,g6=1,k6=1;
var char=[];//紀錄字圖網址
char[1]="A.jpg";
char[2]="B.jpg";
char[3]="C.jpg";
char[4]="D.jpg";
char[5]="E.jpg";
char[6]="F.jpg";
char[7]="G.jpg";
char[8]="H.jpg";
char[9]="I.jpg";  
char[10]="J.jpg";
char[11]="K.jpg";
char[12]="L.jpg";
char[13]="M.jpg";
char[14]="N.jpg";
char[15]="O.jpg";
char[16]="P.jpg";
char[17]="Q.jpg";
char[18]="R.jpg";
char[19]="S.jpg";
char[20]="T.jpg";
char[21]="U.jpg";
char[22]="V.jpg";
char[23]="W.jpg";
char[24]="X.jpg";
char[25]="Y.jpg";
char[26]="Z.jpg";
var str1="",str2="",str3="",str4="",str5="",str6="";//紀錄出現的字
function animationcomplete()//當有字圖到達時清空畫面結束
{
  $("*").empty();
}
function move_1()
{
  $("#word_1"+g1).animate({
    left:window.outerWidth//到達螢幕最邊時
  },5000,'linear',animationcomplete)
  g1++;
}
function move_2()
{
  $("#word_2"+g2).animate({
    left:window.outerWidth
  },9000,'linear',animationcomplete)
  g2++;
}
function move_3()
{
  $("#word_3"+g3).animate({
    left:window.outerWidth
  },8000,'linear',animationcomplete)
  g3++;
}
function move_4()
{
  $("#word_4"+g4).animate({
    left:window.outerWidth
  },7000,'linear',animationcomplete)
  g4++;
}
function move_5()
{
  $("#word_5"+g5).animate({
    left:window.outerWidth
  },9000,'linear',animationcomplete)
  g5++;
}
function move_6()
{
  $("#word_6"+g6).animate({
    left:window.outerWidth
  },6000,'linear',animationcomplete)
  g6++;
}
function generate()
{
  var num1 = Math.floor(Math.random() * 26)+1;
  i1++;
  //一直生產新的div物件放置圖片
  $("#an1").prepend("<div id='word_1" + i1 +"' style='position:absolute;'><img src='"+char[num1]+"' width='60'></div>");
  str1=String.fromCharCode(num1+64)+str1;
  move_1();
}
function generate_2()
{
  var num2 = Math.floor(Math.random() * 26)+1;
  i2++;
  $("#an2").prepend("<div id='word_2" + i2 +"' style='position:absolute;'><img src='"+char[num2]+"' width='60'></div>");
  str2=String.fromCharCode(num2+64)+str2;
  move_2();
}
function generate_3()
{
  var num3 = Math.floor(Math.random() * 26 )+ 1;
  i3++;
  $("#an3").prepend("<div id='word_3" + i3 +"' style='position:absolute;'><img src='"+char[num3]+"' width='60'></div>");
  str3=String.fromCharCode(num3+64)+str3;
  move_3();
}
function generate_4()
{
  var num4 = Math.floor(Math.random() * 26 )+ 1;
  i4++;
  $("#an4").prepend("<div id='word_4" + i4 +"' style='position:absolute;'><img src='"+char[num4]+"' width='60'></div>");
  str4=String.fromCharCode(num4+64)+str4;
  move_4();
}
function generate_5()
{
  var num5 = Math.floor(Math.random() * 26 )+ 1;
  i5++;
  $("#an5").prepend("<div id='word_5" + i5 +"' style='position:absolute;'><img src='"+char[num5]+"' width='60'></div>");
  str5=String.fromCharCode(num5+64)+str5;
  move_5();
}
function generate_6()
{
  var num6 = Math.floor(Math.random() * 26 )+ 1;
  i6++;
  $("#an6").prepend("<div id='word_6" + i6 +"' style='position:absolute;'><img src='"+char[num6]+"' width='60'></div>");
  str6=String.fromCharCode(num6+64)+str6;
  move_6();
}
$(document).ready(function() 
{ 
  $("#btn1").click(function()
  {
    setInterval(generate,1500);
    setInterval(generate_2,1500);
    setInterval(generate_3,1500);
    setInterval(generate_4,1500);
    setInterval(generate_5,1500);
    setInterval(generate_6,1500);
    $("#btn1").hide();
  });
} );
$(document).ready(function() 
{ 

  $("*").keydown(function(e)
  {
    var keyCode = (window.event) ? e.which : e.keyCode;
    var n = String.fromCharCode(keyCode);
    if(n==str1.substring(str1.length-1))
    {
      $("#word_1"+k1).stop();//先暫停動畫
      $("#word_1"+k1).remove()//再將物件移除
      k1++;
      str1=str1.substring(0,str1.length-1);
    }
    if(n==str2.substring(str2.length-1))
    {
      $("#word_2"+k2).stop();
      $("#word_2"+k2).remove();
      k2++;
      str2=str2.substring(0,str2.length-1);
    }
    if(n==str3.substring(str3.length-1))
    {
      $("#word_3"+k3).stop();
      $("#word_3"+k3).remove();
      k3++;
      str3=str3.substring(0,str3.length-1);
    }
    if(n==str4.substring(str4.length-1))
    {
      $("#word_4"+k4).stop();
      $("#word_4"+k4).remove();
      k4++;
      str4=str4.substring(0,str4.length-1);
    }
    if(n==str5.substring(str5.length-1))
    {
      $("#word_5"+k5).stop();
      $("#word_5"+k5).remove();
      k5++;
      str5=str5.substring(0,str5.length-1);
    }
    if(n==str6.substring(str6.length-1))
    {
      $("#word_6"+k6).stop();
      $("#word_6"+k6).remove();
      k6++;
      str6=str6.substring(0,str6.length-1);
    }   
  });
} );