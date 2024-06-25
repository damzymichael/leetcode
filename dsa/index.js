/*
 Create a function to merge two sorted arrays and sort the new array
*/

//Todo STEPS
//? Choose the bigger array to loop through
//? Create a new empty array
//* Loop through the bigger array (deal with same size first)
//? Grab the current number in both arrays using the current index from the loop
//* Check if both elements are available in case of one array being bigger than the other(deal with same size first)
//? Push the lower number first and push the higher number last
//? Check the lower number in the current iteration and compare it with the last number in newArray
//? If the lower number is higher than the last number in the new array, replace the last number in the array with the lower number
//? Then push the last number in the array and the higher number

function mergeSortedArrays(array1, array2) {
  if (array1.length === 0) return array2;
  if (array2.length === 0) return array1;

  const biggerArray = array1.length > array2.length ? array1 : array2;

  const newArray = [];

  for (let i = 0; i < biggerArray.length; i++) {
    //Check if both exists in case of one array being larger than the other
    if (array1[i] != undefined && array2[i] != undefined) {
      let firstNumber = Math.min(array1[i], array2[i]);
      let lastNumber = Math.max(array1[i], array2[i]);

      //Before pushing, check if array is not empty and if last element in the array is greater than the lower element
      if (newArray.length > 0 && newArray[newArray.length - 1] > firstNumber) {
        const lastElementOfNewArray = newArray[newArray.length - 1];
        newArray[newArray.length - 1] = firstNumber;
        newArray.push(lastElementOfNewArray, lastNumber);
      } else newArray.push(firstNumber, lastNumber);
      //
    } else {
      //case  one of the array is bigger and only one exists
      let numberToPush = array1[i] ?? array2[i];

      if (newArray[newArray.length - 1] > numberToPush) {
        const lastElementOfNewArray = newArray[newArray.length - 1];
        newArray[newArray.length - 1] = numberToPush;
        newArray.push(lastElementOfNewArray);
      } else newArray.push(numberToPush);
    }
  }
  return newArray;
}

console.log(mergeSortedArrays([0, 3, 4, 31], [4, 6, 30, 35, 37]));
// console.log(mergeSortedArrays([2, 3, 4, 9], [1, 5, 8, 11]));
