function outerFunction(){
    let count = 0 ;  //This variable is inside the outer function
    return function innerFunction(){
        count++;  // Inner function can access `count`
        console.log(count);
    };
}
const counter = outerFunction();  // `counter` now holds `innerFunction`
counter();
counter();
