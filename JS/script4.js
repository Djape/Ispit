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

function sacuvaj(forma){
  const ime = forma.ime.value;
  const prezime = forma.prezime.value;
  const email = forma.email.value;
  const brTelefona = forma.brTelefona.value;

  try{
    if(ime == "") throw new Error('Nije uneto ime.');
    else if(prezime == "") throw new Error('Nije uneto prezime.');
    else if(email == "") throw new Error('Nije unet emailt.');
    else if(brTelefona == "") throw new Error('Nije unet broj telefona.');
  }
  catch(error){
    return alert(error.message);
  }
}

let KontaktForma={
      ime : ime = document.querySelector('.ime').value,
      prezime : prezime = document.querySelector('.prezime').value,
      email : email = document.querySelector('.email').value,
      brTelefona : brTelefona = document.querySelector('.brTelefona').value,
      poruka : poruka = document.querySelector('.poruka').value
    }

const mojJSON = JSON.stringify(KontaktForma);

Upis(mojJSON);

function Upis(mojJSON){
    document.cookie += mojJSON + '-';
}

function Citanje(){
    const sviCookies = document.cookie;
    let nizCookies = sviCookies.split();
    
    for(let i = 0; i< nizCookies.length; i++){
      console.log(nizCookies[i]);
    }
}