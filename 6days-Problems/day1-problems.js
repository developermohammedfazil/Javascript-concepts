/* let, const, var – usage difference

if-else, for loop, while loop

Arrays: push, pop, map, filter, forEach

Functions: function, arrow functions */


// 1.Write a function to reverse a string.

function reverseString(str){
 return str.split("").reverse().join("");
}
const reversed = reverseString("hello");
console.log(reversed);

//2.Write a function to find the max number in an array

let arr =[1,3,4,5];
function FindMaxNumber(arr){
   return Math.max(...arr);
}
const values = FindMaxNumber(arr);
console.log(values);

// 3.Write a function to count vowels in a string.
let names = ["apple","orange","blue berry"];

function Countvowels(names){ 
   let lengths = names.map(name => name.length);
   return lengths;
}

const stringsCount = Countvowels(names);
console.log(stringsCount); 

//4.Write a function to remove duplicates from array
 
let array=[ 1,2,3,3,1];

function RemoveDuplicates(array){
  return array.filter((num,index)=> array.indexOf(num) === index); 
}
console.log(RemoveDuplicates(array));

//5.Write a function to check palindrome (e.g., “madam”)

function palindrome(string){
  return string === string.split("").reverse().join("");
}
console.log(palindrome("hello"));
console.log(palindrome("madam"));



