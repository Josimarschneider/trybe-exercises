let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let soma=0; media =0;
/*//exercici01
for (let index =0; index < numbers.length; index ++) {
    console.log(numbers[index]);
}
//exercici02
for (let index =0; index < numbers.length; index ++) {
    console.log(soma=soma+numbers[index]);
}
//exercici03
for (let index =0; index < numbers.length; index ++) {
    soma=soma+numbers[index];
}
  console.log(soma/numbers.length); */
//exercici04
  for (let index =0; index < numbers.length; index ++) {
    soma=soma+numbers[index];
}   
  media = soma/numbers.length
  if (media > 20){
      console.log('valor maior que 20');
  } else {
      console.log('valor menor ou igual a 20');
  }
  


