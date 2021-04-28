/*
2 Crie uma função que receba um array de inteiros e retorne o índice do maior valor.
Array de teste: [2, 3, 6, 7, 10, 1]; .
Valor esperado no retorno da função: 4 .
*/
let array =[2, 3, 6, 7, 10, 1];

function maior (array) {
    let maior = 1;
    let indice;
    for (let index = 0; index < array.length; index +=1) {
        if (array[index] > maior) {
             maior = array[index];
             indice=index;
        }
    }
    return indice;
}

console.log(maior(array));
