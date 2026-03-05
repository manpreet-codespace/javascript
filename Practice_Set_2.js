// topics are:  expressions and conditional statements and operators

// ques1: use logical op to find whether the age of person lies between the 
// 10 and 20

// let age= 3;


// if(age>10 && age<20)
// {
//     console.log("OK!");
// }
// else{
//     console.log("NOT OK!");

// }

// // ques2: Demonstrate the use of switch case stmt.

// let op= "-";


// let a=4,b=5;
// let result 
// switch(op){
//     case "+":
//         result=a+b;
//         break;
//     case "-":
//         result = a-b;
//         break;
//     case "*": 
//         result = a*b;
//         break;
//     case "/":
//         result=a/b;
//         break;
//     default:
//         break;

// }

// console.log(result);


// ques3: write a js program to find whether a number is divisible by 2 and 3.

let number="2";

if(number %2 ==0 && number %3==0){
    console.log("true");
}
else{
    console.log("false");
}

// ques4: write a js program to find whether a number is divisible by 2 or 3.

if(number %2 ==0 || number %3==0){
    console.log("true");
}
else{
    console.log("false");
}

// ques5 : write "you can drive" or you can't drive based on their age 
// using ternary operator

let age="18"
console.log((age>=18 ? "you can drive": "you can't drive"));
