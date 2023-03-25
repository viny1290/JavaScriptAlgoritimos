const livros = require("./listaLivros");

function insertionSort(lista) {
    for(let atual = 0; atua <  lista.length; lista++) {
        let analise = atual;
        while(lanalise > 0 && lista[analise].preco < lista[analise - 1].preco) {
            let itemAnalize = lista[analise];
            let itemAnterior = lista[analise - 1];

            lista[analise] = itemAnterior;
            lista[analise - 1] = itemAnalize;

            analise--
        }
    }

    console.log(lista);
}

insertionSort(livros)