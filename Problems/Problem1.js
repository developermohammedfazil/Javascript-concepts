//. Write a JavaScript function to calculate the sum of two numbers.  

function calculater (a,b){
    return 1+ 3 ;
}

console.log(calculater());
//
let a= 1;
let b =3;
function calculate(){
    return(a+b);
}
console.log(calculate());
//
function sumOfTwoNumbers(a, b) { 

    return a + b; 
  
  } 
  console.log(1+3);


  // Write a JavaScript program to find the maximum number in an array. 
const arr =[1,2,3,4,45];

const MaxArr =function(){
   return Math.max(...arr);
}
console.log(MaxArr());


// Write a JavaScript function to check if a given string is a palindrome
function Palindrome(str){
 return str === str.split("").reverse().join("");
}
console.log(Palindrome("hello"));
console.log(Palindrome("madam"));

//Write a JavaScript program to reverse a given string

function ReverseString(string){
    return string.split("").reverse().join("");
}
console.log(ReverseString("hello"));


// Write a JavaScript function that takes an array of numbers and returns a new array with only the even numbers. 

function FilterEvenNumber (numbers){
    return numbers.filter(num => num % 2 === 0);
}
const numbers =[1,2,3,4,5,6,7];
console.log(FilterEvenNumber(numbers));

function FilterOddNumber(numbers){
    return numbers.filter(num => num % 2 === 1);
}
console.log(FilterOddNumber(numbers));

// Write a JavaScript program to calculate the factorial of a given number. 

let number =[1,2,9,8,7,0,2];

let factorial = function(num){
    if(num === 0 || num === 1){
    return 1;
    }
    else{
    return num * factorial(num - 1) ;  
    }
}
 function ArrayFactorial(number){
 return number.map(factorial);
 }
console.log(ArrayFactorial(number));


//Write a JavaScript function to check if a given number is prime. 

function isPrime(num){
    if(num<=1) return false;

    for(let i = 2 ; i<= Math.sqrt(num); i++){
        if(num % i ===0) return false;
    }
    return true;
}
let num =[1,2,3,4,5,6,7];
console.log(isPrime(num));



// array of all element pass to the loop and iteration..
let Numbers = [1,2,3,4,5,6,7];

function isPrime(nums){
    if(nums<=1) return false;

    for(let i = 2 ; i<= Math.sqrt(nums); i++){
        if(nums% i ===0 ) return false;
    }
    return true;
}
function isPrimeArray(Numbers){
    return Numbers.map(isPrime);
}
console.log(isPrimeArray(Numbers));



//factorial 

function factorialNum(n){
    let result = 1;
    
    for(let i= 1; i<=n; i++ ){
        result *= i;
    }
    return result;
    }
    console.log(factorialNum(3));

    //. FizzBuzz

    function FizzBuzz(){
        for(let i=1; i<=20; i++){
            if(i%3 ===0  && i%5 ===0) console.log('fizzbuzz');
            else if(i%3 ===0)console.log('fizz');
            else if(i%5 ===0) console.log('buzz');
            else console.log(i);
        }
    }
    FizzBuzz();

    //Find Largest Number in Array
    const MaxNum =[2,7,3,9,1];
    const Maxvalue = Math.max(...MaxNum);
    console.log(Maxvalue);

    let maxx = MaxNum[0];
    for(let i= 1; i <MaxNum.length; i++){
       if(MaxNum[i]>maxx) maxx = MaxNum[i]; 
    }
    console.log("Max:", maxx);

    //I initialize the first number as max and loop to compare each element. If I find a bigger number, I update max.


    //Count Vowels in a String
    const countVowels =(st) => {  //craete a paramter as st
        let count = 0;  // set initial count zero
        const vowels ="aeiouAEIOU"; // store a vowels 
        for(let char of st){  // loop the each element in the st
            if(vowels.includes(char)) count++;// if vowels char found means take a count as 1
        }
        return count; //return the count 
    };
    console.log(countVowels("Hello"));

    //Sum numbers in an array

    const Num =[2,3,4,2,1];

    const sumOf = Num.reduce((a,b)=> a+b, 0);
    console.log(sumOf);

    //Filter numbers > 5 from array using .filter()

    const filternum =[1,4,5,7,8,9];
 
    const findfilter = filternum.filter(element => element >5);

    console.log(findfilter);
