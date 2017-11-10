window.onload = function(){
var tupians = document.getElementsByClassName('tupian'),
    ddians  = document.getElementsByClassName('ddian'),
    left    = document.getElementById('left'),
    right   = document.getElementById('right'),
    container= document.getElementById('container'),
    lk      = document.getElementById('lk'),
    rk      = document.getElementById('rk'),
    pir11      = document.getElementById('pir11'),
    pir22      = document.getElementById('pir22');

var newtupian = tupians[0];
var newddian  = ddians[0];
var timerId;
var kaiguan = true;
var fn = ( function(){
   var i = 1;
    return function(){
// 图片轮播
      newtupian.setAttribute('class','tupian');
      tupians[i].setAttribute('class','tupian show');
      newtupian = tupians[i];
// 小圆点
      newddian.setAttribute('class','ddian');
      ddians[i].setAttribute('class','ddian active');
      newddian = ddians[i];
//循环
      i++;
      if(i == tupians.length){
      i = 0;
   } 
};
})();
timerId = setInterval(fn,1000);

container.onmouseover = function(){
  clearInterval(timerId);
};
container.onmouseout = function(){
  if(kaiguan){
     clearInterval(timerId);
     timerId = setInterval(fn,1000);
  }
 
};
left.onclick = function(){
 clearInterval(timerId);
 kaiguan = false;
 var back = (newtupian.previousElementSibling)?newtupian.previousElementSibling:tupians[4];
 newtupian.setAttribute('class','tupian');
 back.setAttribute('class','tupian show');
 newtupian = back;

 var backl = (newddian.previousElementSibling)?newddian.previousElementSibling:ddians[4];
 newddian.setAttribute('class','ddian');
 backl.setAttribute('class','ddian active');
 newddian = backl;
}; 

right.onclick = function(){
 clearInterval(timerId);
 kaiguan = false;
 var back1 = (newtupian.nextElementSibling)?newtupian.nextElementSibling:tupians[0];
 newtupian.setAttribute('class','tupian');
 back1.setAttribute('class','tupian show');
 newtupian = back1;

 var backr = (newddian.nextElementSibling)?newddian.nextElementSibling:ddians[0];
 newddian.setAttribute('class','ddian');
 backr.setAttribute('class','ddian active');
 newddian = backr;
}; 

// 点击小点出现对应图片
for(var i=0;i<ddians.length;i++){
    ddians[i].onclick = function(){
        clearInterval(timerId);
        kaiguan = false;
       var index = this.getAttribute('index');
       newtupian.setAttribute('class','tupian');
       tupians[index].setAttribute('class','tupian show');
       newtupian = tupians[index];

       newddian.setAttribute('class','ddian');
       this.setAttribute('class','ddian active'); 
       newddian = this;
    };
}
lk.onclick = function(){
   pir22.style.display = "none";
   pir11.style.display ="block";
}
rk.onclick = function(){
     pir22.style.display = "block";
      pir11.style.display ="none";

}

var hezis = document.getElementsByClassName('hezi');
var cheng = document.getElementById('cheng');

for(var i=0;i<hezis.length;i++){
  hezis[i].onmouseover = function(){
     cheng.style.display="block";
     // cheng.srtle.marginBottom='60px';
  }
  hezis[i].onmouseout = function(){
     cheng.style.display="none";
     // cheng.srtle.marginBottom='60px';
  }
}
document.ondblclick = function(e){
  e.preventDefault();
};


};