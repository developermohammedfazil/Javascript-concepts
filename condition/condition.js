//if-else
//Used to execute a block of code only if a condition is true.

let num =10;
if(num > 0){
    console.log("positive");
}
else{
    console.log("negative");
}

//if-else if-else Statement
//Used when there are multiple conditions.

let marks = 85 ;

if(marks >= 90){
    console.log("A grade");
}
else if(marks >= 80){
    console.log("B grade");
}
else if(marks >= 70){
    console.log("C grade");
}
else{
    console.log("fail");
}

//switch Statement
//Used when you have multiple cases to check for a single variable.

let day = 3;
 
switch(day){
    
    case 1:
    console.log("monday");
    break;

    case 2: 
    console.log("Tuesday");
    break;

    case 3:
    console.log("Wednesday");
    break;    

    case 4:
        console.log("Thursday");
        break;
    case 5:
        console.log("Friday");
        break;
    case 6:
        console.log("Saturday");
        break;
    case 7:
        console.log("Sunday");
        break;
    default:
        console.log("Invalid day");    
}

