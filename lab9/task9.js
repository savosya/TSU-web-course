
let box, i, j, chars, result, str, errfix = 0;
const screen = document.querySelector('.screen');

document.querySelector('.calc').addEventListener('click', e => {
   if(e.target.classList.contains('num')) {
      screen.lastChild !== null && screen.lastChild.classList.contains('a') ? clear() : {};
      numLimit(chars) ? addNum(e.target.innerHTML) : notValid('Too many digits');
   } else if (e.target.classList.contains('operation')) {
      operate(e.target.innerHTML);
   } else if (e.target.classList.contains('dot')) {
      decimal(e.target.innerHTML);
   } else if (e.target.classList.contains('clear')) {
      clear();
   } else if (e.target.classList.contains('arrow')) {
      arrow();
   } else if (e.target.classList.contains('equal-sign')) { 
      screen.lastChild !== null && !screen.lastChild.classList.contains('o') && !screen.lastChild.classList.contains('a') ? calculate() : {};
   } 
});
function addNum(value){
   if (screen.lastChild == null || !screen.lastChild.classList.contains('n')) {
      box = document.createElement('div');
      box.setAttribute('class', 'n');
      screen.appendChild(box);
      screen.lastChild.insertAdjacentText('beforeend', value);
   } else { 
      screen.lastChild.insertAdjacentText('beforeend', value);
   }
}
function decimal(dot){
   if(screen.lastChild == null || screen.lastChild.classList.contains('o')){
      box = document.createElement('div');
      box.setAttribute('class', 'n');
      screen.appendChild(box);
      screen.lastChild.insertAdjacentText('beforeend', 0);
      screen.lastChild.insertAdjacentText('beforeend', dot);
   } else if (screen.lastChild.classList.contains('n')){
      let toput = true;
      for(i = 0; i < screen.lastChild.childNodes.length; i++){
         if(screen.lastChild.childNodes[i].nodeValue == dot){
            toput = false;
         }
      }
      if(toput == false){
         notValid('Too many dots');
      } else{
         screen.lastChild.insertAdjacentText('beforeend', dot);
      }
   }
}
function operate(operand){
   if(screen.childNodes.length > 0){
      if(screen.lastChild.classList.contains('a')){
         clear();
         addNum(str);
      }
      lastChar = screen.lastChild.lastChild.nodeValue;
      if(isNaN(parseInt(lastChar))) {
         notValid('Invalid syntax');
      } else {
         box = document.createElement('div');
         box.setAttribute('class', 'o');
         screen.appendChild(box);
         screen.lastChild.insertAdjacentText('beforeend', operand);
      }
   } else {
      notValid('You need to have a number before operand.');
   }
}
function clear(){
   while (screen.firstChild) {
      screen.removeChild(screen.firstChild);
   }
}
function arrow(){
   if(screen.childNodes.length > 0){
    screen.lastChild.removeChild(screen.lastChild.lastChild);
    if(screen.lastChild.childNodes.length == 0) {
      screen.removeChild(screen.lastChild);
      }
   }
}
function calculate(){
   str = '';
   for(i = 0; i < screen.childNodes.length; i++){
      str += screen.childNodes[i].textContent;
   }
   clear();
   box = document.createElement('div');
   box.setAttribute('class', 'a');
   screen.appendChild(box);
   str=eval(str);
   screen.lastChild.insertAdjacentText('beforeend', `=${str}`);
}
function notValid(msg){
   if(errfix == 0){
      document.querySelector('.validation1').setAttribute('class', 'validation');
      document.querySelector('.validation').textContent = msg;
      setTimeout(()=>{
         errfix=0;
         document.querySelector('.validation').setAttribute('class', 'validation1')
      }, 1500);
   }
   errfix = 1;
}
function numLimit(chars){
   chars = 0;
   for(i = 0; i < screen.childNodes.length; i++){
      chars += screen.childNodes[i].childNodes.length;
   }
   let res= (chars < 18) ? true : false;
   return res;
}