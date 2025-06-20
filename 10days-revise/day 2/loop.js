//for loop
const fruits =["apple","banana","mango"];

for(let i = 0; i < fruits.length; i++){
    console.log(fruits[i]);
}

// forEach method
fruits.forEach(function(fruit){
    console.log(fruit);
})

const upperFruits = fruits.map(function(fruit)
{
    return fruit.toUpperCase();
});
console.log(upperFruits);

