const num =[1,2,3,4];
const additions = function(num){
    let result =[];
    for(let i=0 ; i<num.length; i++){
     result.push(i + num[i]);
    }
    return result;
}
 console.log(additions(num));
const Subtraction = function(num){
    let result =[];
    for(let i=0 ; i<num.length; i++){
     result.push(i-num[i]);
    }
    return result;
}
 console.log(Subtraction(num));
const multiplication = function(num){
    let result =[];
    for(let i=0 ; i<num.length; i++){
     result.push(i * num[i]);
    }
    return result;
}
 console.log(multiplication(num))




//same problem solve in other method
const sum =[1,2,3,4];

 const Additon = function(i, sum){
 return i + sum[i];
}
const Sub = function(i,sum){
 return i - sum[i];
}
const Multi = function(i, sum){
 return i * sum[i]; 
}
const results = function(sum,nums){
    let Answer =[];
    for(let i =0; i<sum.length; i++){
        Answer.push(nums(i,sum));
    }
    return Answer;
};

console.log(results(sum,Additon));
console.log(results(sum,Sub));
console.log(results(sum,Multi));


//using Array Map and object

const variable =[1,2,3,4];
const calculation =(arr,operation) =>
    arr.map((_,i) =>operation(i,arr));

const operations ={
    add:(i ,arr)=> i + arr[i],
    sub:(i ,arr)=> i - arr[i],
    mul:(i,arr)=> i * arr[i]
};
console.log(calculation(variable,operations.add));console.log(calculation(variable, operations.sub));
console.log(calculation(variable, operations.mul));