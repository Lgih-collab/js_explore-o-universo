//procure e selecione o elemento com classe card-destino

let primeiroCard = document.querySelector('.card-destino');

// procure e selecione o botão de curiosidade da lua 
let botaocuriosidade = document.querySelector(".botao-curiosidade");


// procure o selecione o paragrafo com a curiosidade da lua
let curiosidade = document.querySelector(".curiosidade");

/*monitore o clique no botão de curiosidades e, quando acontecer o clique, verifique se a curiosidade esta oculta.
se estiver, faça ficar visivel, mude o aria-expanded para true e troque o texto do botão para "ocultar curiosidade".*/
botaocuriosidade.addEventListener('click', function(){
    if(curiosidade.hidden){
        curiosidade.hidden = false;
        
        botaocuriosidade.setAttribute("aria-expanded", "true");

        botaocuriosidade.textContent = "ocultar curiosidade";
    } else {
        curiosidade.hidden = true
        botaocuriosidade.setAttribute("aria-expanded", "false");
        botaocuriosidade.textContent = "ver curiosidades";

    }
    
});