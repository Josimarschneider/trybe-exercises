/*
3.Crie uma função que receba um array de inteiros e retorne o índice do menor valor.
Array de teste: [2, 4, 6, 7, 10, 0, -3]; .
Valor esperado no retorno da função: 6 .
*/
let indice =0;
let array = [2, 4, 6, 7, 10, 0, -3];


function menor (array) {
    for (let index in array) {
        if (array[index] < array[indice]){
            indice = index;
        }
    }
    return indice;
}

console.log (menor(array));