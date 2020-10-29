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

let divTrening = document.querySelector('.trening');
let divTakmicenje = document.querySelector('.takmicenje');

let trening = [
  '../Slike/Galerija/Trening1.jpg',
  '../Slike/Galerija/Trening2.jpg',
  '../Slike/Galerija/Trening3.jpg',
  '../Slike/Galerija/Trening4.jpg',
  '../Slike/Galerija/Trening5.jpg'
];

let takmicenje = [
  '../Slike/Galerija/Takmicenje1.jpg',
  '../Slike/Galerija/Takmicenje2.jpg',
  '../Slike/Galerija/Takmicenje3.jpg',
  '../Slike/Galerija/Takmicenje4.jpg',
  '../Slike/Galerija/Takmicenje5.jpg',
  '../Slike/Galerija/Takmicenje6.jpg',
];

let brojacSlika1 = 0;
let brojacSlika2 = 0;

let prethodno = document.querySelectorAll('#prethodno');
let sledece = document.querySelectorAll('#sledece');

prethodno[0].addEventListener('click', prethodnaSlikaTrening);
sledece[0].addEventListener('click', sledecaSlikaTrening);

prethodno[1].addEventListener('click', prethodnaSlikaTakmicenje);
sledece[1].addEventListener('click', sledecaSlikaTakmicenje);

function prethodnaSlikaTrening(){
    divTrening.animate([{opacity: '0.1'}, {opacity: '1'}], {duration:500, fill:'forwards'})
  
    brojacSlika1--;
  
    if(brojacSlika1 < 0){
      brojacSlika1 = 4;
    }
  
    divTrening.style.backgroundImage = `url(${trening[brojacSlika1]})`;
}
function sledecaSlikaTrening(){
    divTrening.animate([{opacity:'0.1'}, {opacity:'1'}], {duration:500, fill:'forwards'})
    
    brojacSlika1++;
    
    if(brojacSlika1 > 4){
      brojacSlika1 = 0;
    }
  
    divTrening.style.backgroundImage = `url(${trening[brojacSlika1]})`;
}
  
function prethodnaSlikaTakmicenje(){
    divTakmicenje.animate([{opacity: '0.1'}, {opacity: '1'}], {duration:500, fill:'forwards'})
  
    brojacSlika1--;
  
    if(brojacSlika1 < 0){
      brojacSlika1 = 5;
    }
  
    divTakmicenje.style.backgroundImage = `url(${takmicenje[brojacSlika1]})`;
}
function sledecaSlikaTakmicenje(){
    divTakmicenje.animate([{opacity:'0.1'}, {opacity:'1'}], {duration:500, fill:'forwards'})
    
    brojacSlika1++;
    
    if(brojacSlika1 > 5){
      brojacSlika1 = 0;
    }
  
    divTakmicenje.style.backgroundImage = `url(${takmicenje[brojacSlika1]})`;
}