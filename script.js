let btn = document.getElementById('btn'); //creo un variabile collegata al bottone, in modo da poterlo richiamare 

btn.addEventListener('click', function(){ //aggiungo un ascoltatore di eventi che al click sul bottone, in base al valore della mia selezione, si comporterà modi diversi
    let selected = document.getElementById('selector').value; //ho creato una variabile che mi permette di impostare un valore diverso in base alla difficoltà selezionata
    let field = document.getElementById('field');
    field.innerHTML = '';
    
    if(selected==1){
        for (let index = 0; index < 100; index++) {
            field.innerHTML += ` <div class="quadrato quadrato_easy"></div>`
        }
    }else if(selected==2){
        for (let index = 0; index < 81; index++) {
            field.innerHTML += ` <div class="quadrato quadrato_peasy"></div>`
        }
    }else if(selected==3){
        for (let index = 0; index < 49; index++) {
            field.innerHTML += ` <div class="quadrato quadrato_lemon_squeeze"></div>`
        }
    }
})