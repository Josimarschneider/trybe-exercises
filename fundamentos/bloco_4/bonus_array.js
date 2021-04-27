let array = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let position = 0;
let novoArray=[];
/*
for (let index = 1; index < array.length; index += 1) {

    for (let secondIndex = 0; secondIndex < index; secondIndex += 1) {
      if (array[index] > array[secondIndex]) {
        position = array[index];
        array[index] = array[secondIndex];
        array[secondIndex] = position;
      }
    } 
}
console.log('decrescente - ' + array); // ordem decrescente ===========================//============================

for (let index = 1; index < array.length; index += 1) {

    for (let secondIndex = 0; secondIndex < index; secondIndex += 1) {
      if (array[index] < array[secondIndex]) {
        position = array[index];
        array[index] = array[secondIndex];
        array[secondIndex] = position;
      }
    } 
}
console.log('crescente - ' + array); // ordem crescente
*/
for (let index = 0; index < array.length; index += 1) {
    if (index + 1 < array.length) {
        novoArray.push(array[index]*array[index +1]);
    } else {
        novoArray.push(array[index] * 2);
    }
}

console.log('multiplicado - ' + novoArray); 
