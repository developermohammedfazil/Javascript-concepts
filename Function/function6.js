//function declaration
//A function that is defined using the function keyword and can be called before it is defined (due to hoisting).
// function to add two numbers

function add(a,b){
    return a+b;
}
console.log(add(5,3));

//. Function Expression
//A function that is stored in a variable. It cannot be called before its definition.
// function to multiply two numbers

const multiply = function(a,b){
    return a * b ;
};
console.log(multiply(4,2));

// Arrow Function (=>)
//A shorter way to write functions introduced in ES6. It does not have its own this.
//function to subtract two numbers

const subtract =(a,b) =>{
    return a - b ;
}
console.log(subtract(10 ,3));
    