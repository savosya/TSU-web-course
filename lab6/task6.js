
let elem = document.querySelector('img');
let cat = document.getElementsByClassName('cat');
let dog = document.getElementsByClassName('dog');

function left(){
  elem.style.width = "auto";
  cat[0].style.width = "95%";
  cat[0].firstElementChild.style.width = "auto";
  dog[0].style.width= "5%";
  dog[0].firstElementChild.style.visibility = "hidden";
  cat[0].firstElementChild.style.visibility = "visible";
}

function right(){
  elem.style.width = "auto";
  cat[0].style.width = "5%";
  cat[0].firstElementChild.style.visibility = "hidden";
  dog[0].style.width= "95%";
  dog[0].firstElementChild.style.width = "auto";
  dog[0].firstElementChild.style.visibility = "visible";
}

function middle(){
  elem.style.width = '90%';
  dog[0].firstElementChild.style.visibility = "visible";
  cat[0].firstElementChild.style.visibility = "visible";
  dog[0].firstElementChild.style.width = "90%";
  cat[0].firstElementChild.style.width = "90%";
  dog[0].style.width= "50%";
  cat[0].style.width = "50%";
}
