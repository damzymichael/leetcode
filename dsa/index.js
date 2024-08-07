/*
TODO Create a function to merge two sorted arrays and sort the new array
TODO Steps
? Choose the bigger array to loop through
? Create a new empty array
* Loop through the bigger array (deal with same size first)
? Grab the current number in both arrays using the current index from the loop
* Check if both elements are available in case of one array being bigger than the other(deal with same size first)
? Push the lower number first and push the higher number last
? Check the lower number in the current iteration and compare it with the last number in newArray
? If the lower number is higher than the last number in the new array, replace the last number in the array with the lower number
? Then push the last number in the array and the higher number
*/

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

/* 
TODO Given an integer array nums, move all 0's to the end of it while maintaining the relative order of the non-zero elements.
TODO Note that you must do this in-place without making a copy of the array.
TODO Steps
? Iterate through the array with a for loop
? Through each iteration, check if the current number is zero
? If the current number is zero, remove it from the array using splice
!Bad because it immediately mutates the array and reduces the amount of iteration
*/

/* 
TODO Steps
? Duplicate the array and create a currIndex variable(to track back in nums array after modification)  and initialize it at zero
? Loop through the duplicate and check if each current value is a zero
? If it's a zero, Splice the nums array using the (index - currIndex) in the loop and increment currIndex by 1
*/

var moveZeroes = function (nums) {
  const duplicate = [...nums];
  let currIndex = 0;
  for (let i = 0; i < duplicate.length; i++) {
    if (duplicate[i] === 0) {
      const zero = nums.splice(i - currIndex, 1)[0];
      nums.push(zero);
      currIndex++;
    }
  }
};

// moveZeroes(myArray);

//Hash table implementation with class
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

  //Todo Create a delete function

  //! O(n**2) In case of collision BAD
  keys() {
    const keysArray = [];
    for (let i = 0; i < this.data.length; i++) {
      if (this.data[i]) {
        for (let j = 0; j < this.data[i].length; j++) {
          keysArray.push(this.data[i][j][0]);
        }
      }
    }
    return keysArray;
  }
}

//* First recurring characters with Map data structure
// function firstRecurringChar(array) {
//   const map = new Map();
//   for (let i = 0; i < array.length; i++) {
//     if (map.has(array[i])) return map.get(array[i]);
//     map.set(array[i], array[i]);
//   }
//   return undefined;
// }

//* First recurring characters with Objects
function firstRecurringChar(array) {
  const object = new Object();
  for (let i = 0; i < array.length; i++) {
    if (object.hasOwnProperty(array[i])) return object[array[i]];
    object[array[i]] = array[i];
  }
  return undefined;
}

let arrayToRotate = [1, 2, 3, 4, 5, 6, 7];

// arrayToRotate = [1, 2];

function rotateArray(nums, k) {
  for (let i = 0; i < k; i++) {}
}

rotateArray(arrayToRotate, 3);

// 10-->5-->16

const linkedListFormat = {
  head: {
    value: 10,
    next: {
      value: 5,
      next: {
        value: 16,
        next: null
      }
    }
  }
};

/* 
TODO Steps to prepend
? We grab the value of this.head(cause it's going to be the new next) before changing it 
? this.head.value would equal the new value passed into the function 
? this.head.next would be the value of the this.head we saved earlier
!? Use recursive function to set this.tail NOT NEDED - (We dont need to change the last value)
? Also increase the length
*/

class LinkedList {
  constructor(value) {
    this.head = {
      value: value,
      next: null
    };
    this.tail = this.head;
    this.length = 1;
  }

  append(value) {
    const newNode = {value, next: null};

    this.tail.next = newNode;

    this.tail = newNode;

    this.length++;

    return this;
  }

  prepend(value) {
    const currentNext = this.head;

    this.head = {value, next: currentNext};

    this.length++;

    return this;
  }
}

const newLinkedList = new LinkedList(5);

newLinkedList.prepend(10);

newLinkedList.append(16);
