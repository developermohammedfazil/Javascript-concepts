//Global Scope
//Variables declared outside any function or block are global.

//They can be accessed anywhere in the script.
let globalVar ="i am global";

function showGlobal(){
    console.log(globalVar); // inside
}
showGlobal();
console.log(globalVar); //outside


// Local Scope (Function Scope)

//Variables declared inside a function are local to that function.

//They cannot be accessed outside the function.

function showLocal(){
    let localVar ="i am local";
    console.log(localVar);
}
showLocal();
console.log(localVar);


//Block Scope (let & const)
//Variables declared using let or const inside {} (a block) are only accessible within that block.

//var does not have block scope (it gets hoisted).

if(true){
    let blockVar ="i exist only inside the block";
    console.log(blockVar);
}
console.log(blockVar);




