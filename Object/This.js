//The this keyword refers to the object from which a function was called. Its value depends on the context in which the function is executed

const obj ={
    name:'Fazil',
    greet:function(){
        console.log(`Hello,${this.name}`);
    }
};
obj.greet();