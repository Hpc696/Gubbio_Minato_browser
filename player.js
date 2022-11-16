let gioca = document.getElementById('invia')
gioca.addEventListener('click', giocatore, false);
function giocatore(){
    console.log('cliccato giocatore')
    document.getElementById('modifica').textContent = document.getElementById('gioc').value; 
}

export {giocatore};