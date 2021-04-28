/*function verificaPalindrome (palavra) {
    let auxiliar=[];
    let index1=0;
    let palin = true;
    for (index = palavra.length -1; index >= 0; index -=1){
        auxiliar[index1] = palavra[index];
        if (auxiliar[index1] != palavra[index]){
            palin =false;         
        }
        index1 +=1;
    }
    return console.log(auxiliar, palin);
};


    console.log(verificaPalindrome('sarara'));*/

    function verificaPalindrome(palavra) {
        let arrayLetras = palavra.split('');
        let isPalindrome = true;
        for (let index in arrayLetras) {
          if (arrayLetras[index] != palavra[(palavra.length - 1) - index]) {
            isPalindrome = false;
          }
        }
        return isPalindrome;
      }

      console.log(verificaPalindrome('arara')); //true
console.log(verificaPalindrome('desenvolvimento')); //false