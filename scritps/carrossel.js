let avancarDom = document.getElementById('prox');
let voltarDom = document.getElementById('anterior');
let carrosselDom = document.querySelector('.carrossel');
let listaDom = document.querySelector('.carrossel .lista');
let thumbailDom = document.querySelector('.carrossel .thumbnail');

avancarDom.onclick = function(){
    exibirSlider('next');
}

voltarDom.onclick = function(){
    exibirSlider('back');
}
/*O append Child em arvores DOM s[o muda a posição do objeto */

function exibirSlider(tipoEvento){
    //Pega todos os itens
    let items = document.querySelectorAll('.carrossel .lista .item');
    let itemsThumbnails = document.querySelectorAll('.carrossel .thumbnail .item')

    if(tipoEvento === 'next'){
        /*Você vai pegar o proximo item e jogar na tela */
        console.log(listaDom)
        listaDom.appendChild(items[0]);
        /*Coloca no final da fila o primeiro item da fila */
        thumbailDom.appendChild(itemsThumbnails[0])
    }

    if(tipoEvento === 'back'){
        let posicaoUltimoItem = items.length -1;
        listaDom.prepend(items[posicaoUltimoItem]);
        thumbailDom.prepend(itemsThumbnails[posicaoUltimoItem]);
    }
}