// Reverse an array without using .reverse()

const arr =["water",1,3,4,5];
const reversed = [];
for(let i =arr.length - 1; i>= 0; i--){
    reversed.push(arr[i]);
}
console.log(reversed);

//Find the largest number in an array

const num = [1,2,3,6,2];
const largest =Math.max(...num);
console.log(largest);

//Remove duplicates from an array

const Arr = [1,2,3,2,1];
const Removed = [...new Set(Arr)];
console.log(Removed);

//Using .filter() and indexOf()
const numbers = [1, 2, 3, 2, 4, 1];
const uniqueNumbers = numbers.filter((item, index) => {
  return numbers.indexOf(item) === index;
});
console.log(uniqueNumbers);

//Count the frequency of each element in an array

const integers = [1, 2, 2, 3, 1, 4, 2];
const frequency = {};

numbers.forEach((n) => {
  if (frequency[n]) {
    frequency[n]++;
  } else {
    frequency[n] = 1;
  }
});

console.log(frequency);

