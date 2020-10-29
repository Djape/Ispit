'use stroct';
let logo = document.querySelector('.logo');
let pozicija = 0;
let plus = true;

function Pomeranje() {
    if(plus == true){
      pozicija++;
  }
  else{
    pozicija--;
  }
  if (pozicija == 350) {
    plus = false;
  } 
  else if(pozicija == 0){
    plus = true;
  }
  logo.style.left = pozicija + 'px';
  window.setTimeout('Pomeranje();',10);
}