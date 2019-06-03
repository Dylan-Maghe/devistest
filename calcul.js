// FIDUCIAIRE

let prix = 0;
const Comptabilite = 3;
const Comptaconnectee = 1;
const Immobilise = 1;
const Analytique = 1;
const Budgétaire = 1;
const ISOC = 0;
const Facturationdebase = 35;
const Legislationlux = 0.5;
const euro = " €";

const action1clic = document.getElementById('action1clic');
const action2clic = document.getElementById('action2clic');
const action3clic = document.getElementById('action3clic');
const action4clic = document.getElementById('action4clic');
const action5clic = document.getElementById('action5clic');
const action6clic = document.getElementById('action6clic');
const action7clic = document.getElementById('action7clic');
const action8clic = document.getElementById('action8clic');
const action9clic = document.getElementById('action9clic');

let action1 = () => {
    if(action1clic.value >= 1){
         prix += Comptabilite;
         console.log('if');
        }
        else if(action1clic.value < 0){
            prix -= Comptabilite;
            console.log('else if 2');
        }
else if (action1clic.value = -1){
    prix += prix;
    console.log('prix' + prix);
}
document.getElementById('affichage').innerText = prix+euro;
console.log(prix);
    }


let action2 = () =>{
    if(action2clic.checked==true){
        if(action2clic.value=="Comptaconnectee"){
            prix += Comptaconnectee;
        }
    }
        else{
            prix -= Comptaconnectee;
        }
    
    document.getElementById('affichage').innerText = prix+euro;
    console.log(prix);
}

let action3 = () =>{
    if(action3clic.checked==true){
        if(action3clic.value=="Immobilise"){
            prix += Immobilise;
        }
    }
        else{
            prix -= Immobilise;
        }
    
    document.getElementById('affichage').innerText = prix+euro;
    console.log(prix);
}

let action4 = () =>{
    if(action4clic.checked==true){
        if(action4clic.value=="Analytique"){
            prix += Analytique;
        }
    }
        else{
            prix -= Analytique;
        }
    
    document.getElementById('affichage').innerText = prix+euro;
    console.log(prix);
}

let action5 = () =>{
    if(action5clic.checked==true){
        if(action5clic.value=="Budgétaire"){
            prix += Budgétaire;
        }
    }
        else{
            prix -= Budgétaire;
        }
    
    document.getElementById('affichage').innerText = prix+euro;
    console.log(prix);
}

let action6 = () =>{
    if(action6clic.checked==true){
        if(action6clic.value=="ISOC"){
            prix += ISOC;
        }
    }
        else{
            prix -= ISOC;
        }
    
    document.getElementById('affichage').innerText = prix+euro;
    console.log(prix);
}

let action7 = () =>{
    if(action7clic.checked==true){
        if(action7clic.value=="Facturation de base"){
            prix += Facturationdebase;
        }
    }
        else{
            prix -= Facturationdebase;
        }
    
    document.getElementById('affichage').innerText = prix+euro;
    console.log(prix);
}

let action8 = () =>{
    if(action8clic.checked==true){
        if(action8clic.value=="Législation lux"){
            prix += Legislationlux;
        }
    }
        else{
            prix -= Legislationlux;
        }
    
    document.getElementById('affichage').innerText = prix+euro;
    console.log(prix);
}




function masquer_div(id)
{
  if (document.getElementById(id).style.display == 'none')
  {
       document.getElementById(id).style.display = 'block';
  }
  else 
  {
       document.getElementById(id).style.display = 'none';
  }
}

