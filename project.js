var popout = document.getElementById("popout");


var close = document.getElementById("close");


close.onclick = function() {
  popout.style.display = "none";
}
var t=setTimeout(popupFunction,100000);

function popupFunction()
{
popout.style.display='block';
}
setInterval(popupFunction,15000)

window.onclick = function(event) {
  if (event.target == popout) {
    popout.style.display = "none";
  }
}
window.onclick = function(event) {
  if (event.target == popout) {
    popout.style.display = "block";
  }
}

function toggleHide(){
  let btn = document.getElementById('btn');
  let para = document.getElementById('para'); 
  let img = document.getElementById('img')
  if(para.style.display != 'none'){
  para.style.display = 'none';
  img.style.margin='1px';
  btn.style.marginLeft='60px'
  }
  else{
  para.style.display = 'block';
  img.style.marginLeft='150px';
  btn.style.marginLeft='200px';
  }
}

function toggleHide1(){
  let btn1 = document.getElementById('btn1');
  let para1 = document.getElementById('para1'); 
  if(para1.style.display != 'none'){
  para1.style.display = 'none';
  img1.style.margin='1px';
  btn1.style.marginLeft='60px'
  }
  else{
  para1.style.display = 'block';
  img1.style.marginLeft='170px';
  btn1.style.marginLeft='230px';
  }
}
function toggleHide2(){
  let btn2 = document.getElementById('btn2');
  let para2 = document.getElementById('para2'); 
  if(para2.style.display != 'none'){
  para2.style.display = 'none';
  img2.style.margin='1px';
  btn2.style.marginLeft='60px'
  }
  else{
  para2.style.display = 'block';
  img2.style.marginLeft='170px';
  btn2.style.marginLeft='230px';
  }
}
function toggleHide3(){
  let btn3 = document.getElementById('btn3');
  let para3 = document.getElementById('para3'); 
  if(para3.style.display != 'none'){
  para3.style.display = 'none';
  img3.style.margin='1px';
  btn3.style.marginLeft='60px'
  }
  else{
  para3.style.display = 'block';
  img3.style.marginLeft='170px';
  btn3.style.marginLeft='230px';
  }
}
function toggleHide4(){
  let btn4 = document.getElementById('btn4');
  let para4 = document.getElementById('para4'); 
  if(para4.style.display != 'none'){
  para4.style.display = 'none';
  img4.style.margin='1px';
  btn4.style.marginLeft='60px'
  }
  else{
  para4.style.display = 'block';
  img4.style.marginLeft='170px';
  btn4.style.marginLeft='230px';
  }
}
function toggleHide5(){
  let btn5 = document.getElementById('btn5');
  let para5 = document.getElementById('para5'); 
  if(para5.style.display != 'none'){
  para5.style.display = 'none';
  img5.style.margin='1px';
  btn5.style.marginLeft='60px'
  }
  else{
  para5.style.display = 'block';
  img5.style.marginLeft='170px';
  btn5.style.marginLeft='230px';
  }
}
function toggleHide6(){
  let btn6 = document.getElementById('btn6');
  let para6 = document.getElementById('para6'); 
  if(para6.style.display != 'none'){
  para6.style.display = 'none';
  img6.style.margin='1px';
  btn6.style.marginLeft='60px'
  }
  else{
  para6.style.display = 'block';
  img6.style.marginLeft='170px';
  btn6.style.marginLeft='230px';
  }
}
function toggleHide7(){
  let btn7 = document.getElementById('btn7');
  let para7 = document.getElementById('para7'); 
  if(para7.style.display != 'none'){
  para7.style.display = 'none';
  img7.style.margin='1px';
  btn7.style.marginLeft='60px'
  }
  else{
  para7.style.display = 'block';
  img7.style.marginLeft='170px';
  btn7.style.marginLeft='230px';
  }
}

function setWindowBeforeUnload(changed) {
  $(window).on("beforeunload", function() {
    if (confirmLeave && changed && changed()) {
      return "You haven't saved the information. If you leave this page, the information will be lost.";
    }
  });
}