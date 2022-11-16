import {giocatore} from './player.js';

let bomba1 = Math.floor(Math.random()*16);
let bomba2 = Math.floor(Math.random()*16);
console.log(bomba1); console.log(bomba2);
let danno=0;
let click=0;

giocatore();

let celle = new Array();
for(let i=0; i<16; i++){
    celle[i] = document.getElementById('casella'+i);
    celle[i].addEventListener('click', function(){controllo(i)}, {once : true});
} 

function controllo(i){
    console.log('click su casella '+i)
    if(celle[i]==celle[bomba1]){
        console.log("beccato bomba1")
        document.getElementById('casella'+bomba1).innerHTML= "<img src='./images/bomb.png'/>"; danno++;
    } else if(celle[i]==celle[bomba2]){
        console.log("beccato bomba2")
        document.getElementById('casella'+bomba2).innerHTML= "<img src='./images/bomb.png'/>"; danno++;
    } else {
        console.log("via libera")
        document.getElementById('casella'+i).innerHTML= "<img src='./images/lola.jpg'/>"; click++;
    }
    if(danno==2){
        alert('HAI PERSO!');
        reset();
    }else if(danno<2 && click==14){
        alert('HAI VINTO!');
        reset();
    }
}

function reset() {
    for (let i=0; i<16; i++) {
        let cas = "casella"+i;
        document.getElementById(cas).innerHTML = "";
    }
    danno = 0;
    click = 0;
}
