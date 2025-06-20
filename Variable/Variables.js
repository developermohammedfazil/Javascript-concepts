function testVar(){
    if(true){
        var x = 10; // Declared inside if block
    }  x = 20 // x is updated var is non block scope is a hoisted.global scope.
    console.log(x);
    // 10 (Accessible outside the if block due to function scope)
  
}
testVar();

function testLet(){
    if(true){
        let y = 11;
        y = 20;// y is updated inside the block
        console.log(y)
    }
    //console.log(y); // ❌ Error: y is not defined (outside block)
}
testLet();


function testConst(){
    if(true){
        const z = 12;
         // z = 40; // ❌ Error: Assignment to constant variable
        console.log(z);
    }
}
testConst();