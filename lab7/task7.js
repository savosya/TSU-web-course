
let n, w_m, h_m, r, figure, action, form, color;

function square(){
  form = 'square';
  draw(form);
}
function round(){
   form = 'round';
   draw(form);
}
function triangle(){
   form = 'triangle';
   draw(form);
}

function draw(form){
   n = document.querySelector("#n").value;
   for(i = 0; i < n; i++){
      figure = document.createElement('div');
      figure = createFigure(figure, form);
      figure.setAttribute('class', 'figure');
      figure.setAttribute('onclick', 'click()');
      figure.classList.add(form);
      document.querySelector('.workarea').appendChild(figure);
      console.log(w_m,h_m);
   }
}
function createFigure(figure, form) {
   color = getColor();
   if (form == 'square' || form == 'round'){
      r = Math.floor(Math.random(20, 300)*(300-20)+20);
      w_m = Math.random(document.querySelector('.holst').clientWidth)*1000;
      h_m = Math.random(document.querySelector('.holst').clientHeight)*580;
      figure.style.marginLeft = w_m + 'px';
      figure.style.marginTop = h_m + 'px';
      figure.style.width = r + 'px';
      figure.style.height = r + 'px';
      figure.style.backgroundColor = color;
      return figure;
   } else {
      r = Math.floor(Math.random(20, 100)*(100-20)+20);
      w_m = Math.random(document.querySelector('.holst').clientWidth)*1050;
      h_m = Math.random(document.querySelector('.holst').clientHeight)*720;
      figure.style.marginLeft = w_m + 'px';
      figure.style.marginTop = h_m + 'px';
      figure.style.borderLeft = r + "px solid transparent";
      figure.style.borderRight = r + "px solid transparent";
      figure.style.borderBottom = (r*1.75) + "px solid " + color;
      return figure;
   }
}
function getColor(){
   return '#' + Math.floor(Math.random()*16777215).toString(16);
}

function click(){
   document.getElementById('workarea').addEventListener('click', e => {
      color = getColor();
      if (e.target.classList.contains('square') || e.target.classList.contains('round')){
         e.target.style.backgroundColor = color;
      } else {
         e.target.style.borderBottomColor = color;
      }
   });

   document.getElementById('workarea').addEventListener('dblclick', e => {
      if (e.target.classList.contains('figure') ){
         document.getElementById('workarea').removeChild(e.target);
      }
   });
}
document.addEventListener("DOMContentLoaded", () => click());

