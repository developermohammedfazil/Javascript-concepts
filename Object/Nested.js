const employee = {
    name: "Fazil",
    position: "Frontend Developer",
    details: {
      age: 25,
      location: "India"
    }
  };


  
  // Destructuring nested object
  const { name, details: { age, location } } = employee;
  
  console.log(name);    
  console.log(age);     
  console.log(location); 
  // Default Values in Destructuring

  const product ={names:"laptop",price:"55000"};
//non existing property
const { names , price , stock="Out of Stock"} = product;
console.log(stock);
  
// Renaming while destructuring
const user ={firstname:"fazil", age:21};

const { firstname:userName , age:userAge } = user;

console.log(userName);
console.log(userAge);