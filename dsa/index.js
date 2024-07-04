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

// console.log(mergeSortedArrays([0, 3, 4, 31], [4, 6, 30, 35, 37]));
// console.log(mergeSortedArrays([2, 3, 4, 9], [1, 5, 8, 11]));

/*
Given an integer array nums, move all 0's to the end of it while maintaining the relative order of the non-zero elements.
Note that you must do this in-place without making a copy of the array.
*/
let myArray = [0, 1, 0, 2, 3, 4];
myArray = [0, 0, 1];

var moveZeroes = function (nums) {
  const zeroIndexes = [];
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] == 0) {
      zeroIndexes.push(i);
      // nums.push(nums.splice(i, 1)[0]);
    }
  }
  // console.log(zeroIndexes);
  // console.log(nums);
};

moveZeroes(myArray);

//Under the hood implementation of arrays
class CustomArray {
  constructor() {
    this.length = 0;
    this.data = {};
  }

  get(index) {
    return this.data[index];
  }

  push(item) {
    this.data[this.length] = item;
    this.length++;
    return this.length;
  }

  pop() {
    const lastItem = this.data[this.length - 1];
    delete this.data[this.length - 1];
    this.length--;
    return lastItem;
  }

  delete(index) {
    const item = this.data[index];
    this.shiftItems(index);
    return item;
  }

  shiftItems(index) {
    for (let i = index; i < this.length - 1; i++) {
      this.data[i] = this.data[i + 1];
    }
    delete this.data[this.length - 1];
    this.length--;
  }
}

//Hast table with class
class HashTable {
  constructor(size) {
    this.data = new Array(size);
  }

  //? O(1)
  #hash(key) {
    let hash = 0;
    for (let i = 0; i < key.length; i++) {
      hash = (hash + key.charCodeAt(i) * i) % this.data.length;
    }
    return hash;
  }

  //? O(1)
  set(key, value) {
    const address = this.#hash(key);
    if (!this.data[address]) {
      this.data[address] = [];
    }
    this.data[address].push([key, value]);
    return this.data;
  }

  //? 0(1) or O(n) if there's a collision
  get(key) {
    let address = this.#hash(key);
    const currentBucket = this.data[address];
    if (currentBucket) {
      for (let i = 0; i < currentBucket.length; i++) {
        if (currentBucket[i][0] === key) return currentBucket[i][1];
      }
    }
    return undefined;
  }
}

const firstHashTable = new HashTable(50);

firstHashTable.set('Mike', 23);

firstHashTable.set('Gray', 20);

firstHashTable.set('Dan', 15);

console.log(firstHashTable.get('Gray'));

console.log(firstHashTable.data);
