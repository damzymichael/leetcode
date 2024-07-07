/* 
Day 1
STEPS
? Split text into an array of texts by whitespaces 
? Use regex to test each texts for numbers grab the first digit in the first number and last digit in the last number
*/

// const multiLineString = `
//    Mike
//    Dan
//    Josh
// `;

// for (let i = 0; i < multiLineString.length; i++) {
//   const currentLetter = multiLineString[i];
//   if (/\s/.test(currentLetter)) console.log('whitespace');
// }

// const array = [1, 2, 3, 4, 5, 6];

// const lastThreeItems = array.splice(-3)

// array.unshift(...lastThreeItems)

// console.log(array)

const matches = 'jhkj7dd6jj82dffds8dd34'.match(/\d+/g);

console.log(matches);

console.log(isNaN(Number('kj')));
