/*
5. Crie uma função que receba um array de inteiros e retorne o inteiro que mais se repete.
Array de teste: [2, 3, 2, 5, 8, 2, 3]; .
Valor esperado no retorno da função: 2 . */
let array = [2, 3, 2, 5, 8, 2, 3];
function repetido (array2) {
    let array = array2;
    let numerorepetido = 0, contadorRepet = 0, numeroRepetidoFinal = 0, contadorRepetFinal = 0;

    for (let index = 0; index < array.length; index +=1 ) {
        numerorepetido = array[index];
        for (let index2 = 0; index2 < array.length; index2 +=1 ) {
            if (numerorepetido == array[index2]) {
                contadorRepet +=1;
            }
        }
        if (contadorRepetFinal < contadorRepet) {
            contadorRepetFinal = contadorRepet;
            numeroRepetidoFinal = numerorepetido;
        }
        contadorRepet = 0;
    }
    return numeroRepetidoFinal;
}

console.log (repetido (array));