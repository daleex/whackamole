var pos,x=0,img,tm,pp,opt,ss=60;
function start() {
  var elem = document.getElementById("myButton1");
    if (elem.value=="START") elem.value = "RESTART";
    else elem.value = "START";

  document.getElementById('hammer').style.display = 'block';
  document.body.style.cursor = 'none';
  if (ss==60){
    cont=0;
   
    opt=document.getElementById('sel').value;
    if (opt=="prin") {
      opt=800;
    }
    if (opt=="med") {
      opt=600;
    }
    if (opt=="diff") {
      opt=500;
    }
    if (opt=="hell") {
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
    lol.target.style.background="url('img/whit.png') no-repeat center center";
    lol.target.style.backgroundSize="25vw 15vw";
    if (lol.target.style.background!="url('whit.png')") {
      cont++;
    } 
  }
  document.getElementById('nc').value=cont;
}

function caso(min, max) {
max = Number(max);
min = Number(min);
return Math.floor(Math.random() * (max - min + 1)) + min;
}

document.addEventListener('mousemove', function(e) {
  const hammer = document.getElementById('hammer');

  const vw = window.innerWidth;
  const vh = window.innerHeight;
  
  const hammerWidth = hammer.offsetWidth;
  const hammerHeight = hammer.offsetHeight;
  
  let left = e.pageX - hammerWidth / 2;
  let top = e.pageY - hammerHeight / 2;

  if (left < 0) left = 0;
  else if (left + hammerWidth > vw) left = vw - hammerWidth;

  if (top < 0) top = 0;
  else if (top + hammerHeight > vh) top = vh - hammerHeight;
  
  hammer.style.left = left + 'px';
  hammer.style.top = top + 'px';
});


function rotate() {
  const hammer = document.getElementById('hammer');
  hammer.classList.add('hit');
  setTimeout(() => {
    hammer.classList.remove('hit');
  }, 100);
}
