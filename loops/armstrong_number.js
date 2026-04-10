let number = "153";

let n = number.length; //length is the property of string not a number.  here value if is undefined when i use length property on number
let original = parseInt(number);
let num=original;

console.log(n);
let term;
let rem;
let sum = 0;

for (let i = 1; i <= n; i++) {

  rem = num % 10;
  console.log("rem", rem);

  term = rem ** n;
  console.log("term", term);

  sum += term;
  console.log("sum", sum);

  num = Math.floor(num/ 10);
  console.log("num", num);
}


console.log(original);

if (sum === original ) {
  console.log("armstrong number");
} else {
  console.log("not armstrong number");
}


// -----armstrong number in a range-----


// let number = "153";

// let n = number.length; //length is the property of string not a number.  here value if is undefined when i use length property on number
// let original = parseInt(number);
// let num=original;

// console.log(n);
// let term;
// let rem;
// let sum = 0;


let start=1, end=1000;
for(i=start; i<=end;i++)
{
        num=i;
        sum=0;
        let n=i.toString().length;


        while(num>0){
        
        rem = num% 10;
        
        term = rem ** n;
        
        sum += term;
        
        num= Math.floor(num/ 10);
    }
    
    if (sum === i) {
        console.log("armstrong number", i);
    } 
}
