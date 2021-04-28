/*Crie uma função que receba uma string word e outra string ending . Verifique se a string ending é o final da string word . Considere que a string ending sempre será menor que a string word .
Valor de teste: 'trybe' e 'be'
Valor esperado no retorno da função: true
verificaFimPalavra('trybe', 'be') ;
Retorno esperado: true
verificaFimPalavra('joaofernando', 'fernan') ;
Retorno esperado: false*/
function verificaFimPalavra (word2, ending2) {

   let word = word2.split('');
    let ending = ending2.split('');
    let index2 =(word.length) - (ending.length);
    let cont = 0;

    for (let index = 0; index < ending.length; index +=1) {
        console.log (ending[index]);
        console.log (word[index2]);
        if (ending[index] == word[index2]){
            cont +=1;
        }
        index2 +=1;
    }
    if (cont == ending.length){
        return true;
    } else {
        return false;
    }
}
console.log (verificaFimPalavra('trybe', 'be'));