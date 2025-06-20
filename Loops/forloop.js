//for Loop
//Used when you know how many times you want to run the loop.

const subjects=["physics","chemistry","maths"];
for(let i=0;i< subjects; i++)
{
    console.log(subjects[i].subjects)
}
for(let department in subjects)
{
    console.log(subjects[department])
}
for(let department of subjects){
    console.log(department)
}
subjects.forEach((subjects)=>console.log('subjects'))
document.getElementById('result').innerHTML=subjects


//while Loop
//Used when you don’t know how many times the loop will run, but you have a condition.
let i = 1 ;
while(i<=5){
    console.log(i);
    i++;
}

//do-while Loop
//Similar to while, but ensures the loop runs at least once even if the condition is false.

let j = 1;
do{
    console.log(j);
    j++;
}while(j <= 10);