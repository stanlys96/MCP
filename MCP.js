/*

1. We have array of integers called nums, write a function to return all numbers (in a form  of array of integers) that when subtracted by any of integers in nums doesn't return  number that is < 0 
for example : nums = [3,1,4,2], your output should be : [4], because when 4 is subtracted  by 3 or 1 or 4 or 2 doesn't return number that is < 0 
2. We have array of integers called nums and an integer called x, write a function to return  all numbers (in a form of array of integers) that when divided by any of integers in nums  doesn't return x 
for example : nums = [1,2,3,4], x = 4, your output should be : [1,2,3], because only 4  divided by 1 is 4 (x) 
3. We have a string called word and an integer called x, write a function to return an array  of strings containing all strings that has length x. 
for example : word = "souvenir loud four lost", x = 4, your output should be ["loud", "four",  "lost"] because those strings has length of 4 
● Please submit your code in java / any language of your skill into gitlab, and share us  back, your gitlab repo url. 
● Please asks if you had any question, especially if you still don't understand. 

*/

// 1.
const nums = [3, 1, 4, 2];
function numbers(array) {
  let output = [];
  for (let i = 0; i < array.length; i++) {
    let noNegative = true;
    for (let j = 0; j < array.length; j++) {
      if (array[i] - array[j] < 0) {
        noNegative = false;
      }
    }
    if (noNegative === true) {
      output.push(array[i]);
    }
  }
  return output;
}
console.log(numbers(nums));

// 2. 
const numberArray = [1, 2, 3, 4, 5, 6];
function numX(array, x) {
  let output = [];
  for (let i = 0; i < array.length; i++) {
    let suitable = true;
    for (let j = 0; j < array.length; j++) {
      if (array[i] / array[j] === x) {
        suitable = false;
      }
    }
    if (suitable) {
      output.push(array[i]);
    }
  }
  return output;
}
console.log(numX(numberArray, 3));

// 3. 
const word = "souvenir loud four lost";
function wordLength(input, length) {
  let arrayInput = input.split(' ');
  let output = [];
  for (let i = 0; i < arrayInput.length; i++) {
    if (arrayInput[i].length === length) {
      output.push(arrayInput[i]);
    }
  }
  return output;
}
console.log(wordLength(word, 8));