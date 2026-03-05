// topics are: variables,datatypes

// question 1 : Create a variable type of string and try to add a number to it.

let a="manu";
let b=4;
console.log(a+b);


// question 2: USe a typeof operator to find datatype of the string in last question 

let type = typeof(a+b);
console.log(type)


// question 3 : Create a const object in javascript. Can you change it to hold a number later?
const obj ={
    name:"manu",
    age:20
}
console.log(obj);  //dont assign a number to the const obj

// question 4: Try to add a new key to the const obj of q3. were you able to do it?

obj["city"]= "nangal";

console.log(obj);


// question 5: write a JS program to create a word-meaning dictionary of 5 words.

const dict={
    appreciate: "recognize the full worth of",
    bonton: "good or elegant form or style"
}

console.log(dict);
console.log(dict["bonton"]);
console.log(dict.appreciate);


