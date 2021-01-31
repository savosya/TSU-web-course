let line , elems, result;

function add_line() {   
   if (document.querySelector('.container').children.length > 0) {
      line = document.querySelector('.line').cloneNode(true);
      line.children[0].value = null;
      line.children[1].value = null;
      document.querySelector('.container').appendChild(line);
   } else if (document.querySelector('.container').children.length == 0) {
      document.querySelector('.container').insertAdjacentHTML('afterbegin', `
         <div class="line">
            <input type="textarea" class="line_1">
            <input type="number" class="line_2">
            <input type="button" class="up" value="&#9650">
            <input type="button" class="down" value="&#9660">
            <input type="button" class="delete" value="&#10006">
         </div>`);
      }
   }

function up(node1, node2) {
   document.querySelector('.container').insertBefore(node1, node2);
}

function down(node1, node2) {
   if(node2 == null){
      node2 = node1.parentNode.firstChild;
      document.querySelector('.container').insertBefore(node1, node2);
   } else if (node2 != null) {
      document.querySelector('.container').insertBefore(node2, node1);
   }
}

function save(){
   elems = document.getElementsByClassName('line');
   result = document.querySelector('.result');
   while (result.firstChild) {
      result.removeChild(result.firstChild);
   }

   for(i = elems.length-1; i >= 0; i--){
      col_1 = elems[i].children[0].value;
      col_2 = elems[i].children[1].value;
      if (elems[i].children[0].value == "") col_1 = '___';
      if (elems[i].children[1].value == "") col_2 = '___';
      result.insertAdjacentHTML('afterbegin', 
      `<div class="out">'${col_1}':'${col_2}'</div>`);
   }
}

document.querySelector('body').addEventListener('click', e => {
   if (e.target.classList.contains('up')) {
      up(e.target.parentNode, e.target.parentNode.previousElementSibling);
   } else if (e.target.classList.contains('down')){
      down(e.target.parentNode, e.target.parentNode.nextElementSibling);
   } else if (e.target.classList.contains('delete')) {
      e.target.parentNode.remove();
   } else if (e.target.classList.contains('add')) {
      add_line();
   } else if (e.target.classList.contains('save')){
      save();
     }
   });