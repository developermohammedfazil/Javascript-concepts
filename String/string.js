//array method
function reverseString(str){
    return str.split("").reverse().join("");
}
console.log(reverseString("hello"))

// for loop
function reverseStrings(star){
    let reversed ="";
    for(let i= star.length-1; i>=0; i--){
        reversed +=star[i];
    }
    return reversed;
}
console.log(reverseStrings('World'));

//if a string is palindrome
function ispalindrome (stars){
    return stars === stars.split("").reverse().join("");
}
console.log(ispalindrome("malayalam"));
console.log(ispalindrome("racecar"));

// for loop palindrome
function inpalindrome(st){
    let left = 0 ,right=st.length -1;
    while(left < right){
        if(st[left]!==st[right]) return false;
        left++;
        right--;
    }
    return true;
}
console.log(inpalindrome("hello"));
console.log(inpalindrome("malayalam"));