//Write a JavaScript program to find the largest element in a nested array. 

function findlargestElement(nestedArray){
    let largest = nestedArray[0][0];
    for(let arr of nestedArray){
       for(let num of arr){
        if(num > largest){
            largest = num;
        }
    } 
 }
    return largest;
}

//Given two strings s and t, return true if t is an anagram of s, and false otherwise.
function isAnagram(){
    if(s.length !== t.length) return false;
    return s.split('').sort().join('')=== t.split('').sort().join('');
}
console.log(isAnagram("anagram","nagaram"));
console.log(isAnagram("car","cat"));


//number boxes in array.find the unique value of this box.

const Box = function(arr){
    let result =[];
    for(let i = 0; i< arr.length; i++){
        if(arr !== arr){
            return result; 
        }else if(arr==arr){
            return;
        }
    }
}
const BoxResult = arr(1,2,2,4,5,5);
console.log(Box(BoxResult));




// Write a JavaScript function that returns the Fibonacci sequence up to a given number of terms. 



//reverse a string without built in method

function reverseStr(str){
    let reversed = [];
    for(let i= str.length -1 ; i >= 0 ;i--){
         reversed += str[i];
    }
   return reversed;
}
console.log(reverseStr("hello"));

// remove the duplicates
function removeDup(arr){
    return [...new Set(arr)];
}
console.log(removeDup([1,2,4,4,5,6,6]));


//find first non repeat character in string.
function firstNonRepeatingChar(str) {
    for (let char of str) {
        if (str.indexOf(char) === str.lastIndexOf(char)) {
            return char; // Found the first unique character
        }
    }
    return null; // If no unique character is found
}

// Example usage:
console.log(firstNonRepeatingChar("aabbcde")); // Output: "c"
console.log(firstNonRepeatingChar("aabbcc"));  // Output: null
console.log(firstNonRepeatingChar("swiss"));   // Output: "w"


//simple function check if two strings are anagrams

function areAnagroms(str1 ,str2){
    return str1.split("").sort().join("") === str2.split("").sort().join("");
}
console.log(areAnagroms("listen" , "silent"));
console.log(areAnagroms("hello","world"));
console.log(areAnagroms("race","care"));

