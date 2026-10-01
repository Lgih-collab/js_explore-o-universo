//selecionartodos os cards
let cards = document.querySelectorAll(".card-destino");

/*percorrer todos os cards selecionados para cada um (separadamente)
pegar os botoes (botão curiosidade e o botão favoritod) */
cards.forEach (function(card){
    let botaocuriosidade = card.querySelector('.botao-curiosidade');
    let botaofavorito = card.querySelector('.botao-favorito');
    let curiosidade = card.querySelector('.curiosidade');

    botaocuriosidade.addEventListener("click", function (){
        if(curiosidade.hidden){
            curiosidade.hidden = false;
            botaocuriosidade.setAttribute("aria-expanded","true");
            botaocuriosidade.textContent = "ocultar curiosidades";
        } else {
            curiosidade.hidden = true;
            botaocuriosidade.setAttribute("aria-expanded", "false");
            botaocuriosidade.textContent = "ver curiosidade"
        };
    });

    botaofavorito.addEventListener("click", function(){
        //apçicar/remover a classe 'favoritado'
            let favoritado = card.classList.toggle('favoritado');

        //atualizar o estado do botão (aria-pressed)
        botaofavorito.setAttribute("aria-pressed", favoritado);

        //atualizar o texto do botão (☆ favoritado ou ★ favoritado)
        if(favoritado){
            botaofavorito.textContent = "★ favoritado"
        } else {
            botaofavorito.textContent = "☆ favorito"}
    })
});