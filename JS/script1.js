'use strict';

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

prikaziVreme();
setInterval(prikaziVreme, 1000);

function prikaziVreme(){
  let datum = new Date();
  let sati = datum.getHours();
  let minuta = datum.getMinutes();
  let sekundi = datum.getSeconds();

  sati = dodajNulu(sati);
  minuta = dodajNulu(minuta);
  sekundi = dodajNulu(sekundi);
  document.querySelector('.sat').innerHTML=`${sati} : ${minuta} : ${sekundi}`;
}
function dodajNulu(vreme){
  if(vreme < 10){
    return '0' + vreme;
  }
  else{
    return vreme;
  }
}