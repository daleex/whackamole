var pos,x=0,img,tm,pp,opt,ss=60;
function start() {
  var elem = document.getElementById("myButton1");
    if (elem.value=="START") elem.value = "RESTART";
    else elem.value = "START";
  if (ss==60){
    cont=0;
   
    opt=document.getElementById('sel').value;
    if (opt=="prin") {
      opt=1000;
    }
    if (opt=="fac") {
      opt=800;
    }
    if (opt=="med") {
      opt=600;
    }
    if (opt=="diff") {
      opt=400;
    }
    var y = document.getElementById("tab");
    y.addEventListener("click", click );
  
    pos=document.getElementsByTagName('td');
    img=pos[0].style.background;
  
    pp = setInterval(pop,opt);
    tm = setInterval(temp,1000);
  
    document.getElementById('nc').value=cont;
  
    document.getElementById('tempo').value=ss;
  }
  else{
    location.reload();
  }
}
function checkTime(i)
{
if (i < 10) {i = "0" + i};
return i;
}
var ss;
function temp() {
  ss--;
  sec = checkTime(ss);
  document.getElementById('tempo').value=sec;
  if(ss==0){
  pos[x].style.background="";
  clearInterval(tm);
  clearInterval(pp);
  pos[0].style.background=img;
  x=0;
  }
}
function pop() {
  pos[x].style.background="";
  x=caso(0,8);
  pos[x].style.background=img;
}
cont=0;
function click(lol) {
  a=lol.target.style.background;
  if (a==img&&sec!=0) {
    lol.target.style.background="";
    lol.target.style.background="url('whit.png') no-repeat center center";
    lol.target.style.backgroundSize="25vw 15vw";
    cont++;
  }
  document.getElementById('nc').value=cont;
}
function rotate() {
  hammer=document.getElementById("tab").style.cursor="url('hammer1.cur'), auto";
}
function rotate1() {
  hammer=document.getElementById("tab").style.cursor="url('hammer.cur'), auto";
}
function caso(min, max) {
max = Number(max);
min = Number(min);
return Math.floor(Math.random() * (max - min + 1)) + min;
}
