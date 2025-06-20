//call()
//Calls a function with a given this value and arguments passed individually.

function greet(greeting,punctuation){
    console.log(greeting + " " + this.name + punctuation);
}
const person ={name : "fazil"};
greet.call(person, 'Hello' ,'sweetboy!');

//apply() Works like call(), but arguments are passed as an array.

function greet(greeting, punctuation) {
    console.log(greeting + ' ' + this.name + punctuation);
  }
  
  const person2 = { name: 'fazil' };
  
  greet.apply(person2, ['Hi', '?']); 


//bind() Returns a new function with this set to a specific object. It does not call the function immediately.

function greet(greeting, punctuation) {
    console.log(greeting + ' ' + this.name + punctuation);
  }
  const person3 = { name: 'Alice' };

  const greets = greet.bind(person3, 'Hey');
  
   greets("!!!");
 
 
  