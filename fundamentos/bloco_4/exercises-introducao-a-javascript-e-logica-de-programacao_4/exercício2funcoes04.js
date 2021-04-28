/*
4. Crie uma função que receba um array de nomes e retorne o nome com a maior quantidade de caracteres.
Array de teste: ['José', 'Lucas', 'Nádia', 'Fernanda', 'Cairo', 'Joana']; .
Valor esperado no retorno da função: Fernanda . */
nomes = ['José', 'Lucas', 'Nádia', 'Fernanda', 'Cairo', 'Joana'];

function maiornome (nomes) {
    let maior = [];
    for (let indexnome = 0; indexnome < nomes.length; indexnome +=1){
        if (maior.length < nomes[indexnome].length){
            maior = nomes[indexnome];
        }
    }
    return maior;
}

console.log(maiornome(nomes));