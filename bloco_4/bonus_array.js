let array = [45, 27, 57, 1330, 560, 800, 200, 70, 945, 54];
let position = 0;

for (let index = 1; index < array.length; index += 1) {

    for (let secondIndex = 0; secondIndex < index; secondIndex += 1) {
      if (array[index] < array[secondIndex]) {
        position = array[index];
        array[index] = array[secondIndex];
        array[secondIndex] = position;
      }
    } 
}
console.log(array); // ordem crescente

for (let index = 1; index < array.length; index += 1) {

    for (let secondIndex = 0; secondIndex < index; secondIndex += 1) {
      if (array[index] > array[secondIndex]) {
        position = array[index];
        array[index] = array[secondIndex];
        array[secondIndex] = position;
      }
    } 
}
console.log(array); // ordem decrescente
