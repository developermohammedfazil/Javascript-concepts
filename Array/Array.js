function findMinMax(arr){
  return{
    min:Math.min(...arr),
    max:Math.max(...arr)
  };
}
console.log(findMinMax([3,2,4,5,5,8]));

//for loop
function findminmax(numbers){
    let min =numbers[0], max = numbers[0];

    for(let i =1; i<numbers.length ; i++){
       if(numbers[i]<min) min =numbers[i];
       if(numbers[i]>max) max =numbers[i];
    }
    return{min,max};
}
console.log(findminmax([3,2,4,5,5,8]));

//reverse Array
let arr =["3,5,6,7"];
arr.reverse();
console.log(arr);



