function counter(){
    let count =0;
    return function(){
    count++;
    console.log(count);
    } ;
}
const mycounter =counter();
mycounter();
mycounter();
//A closure is when a function remembers the variables from its parent scope, even after the parent function has finished execution.


function outerFunction() {
    let count = 0;
    return function innerFunction() {
    count++;
    return count;
    };
    }
    
    const increment = outerFunction();
    console.log(increment()); // Outputs: 1
    console.log(increment()); // Outputs: 2