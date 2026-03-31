let num=47;
let pattern ="";
let rem;
while(num>0)
{
    rem=num%2;
    pattern+=rem;
    num=Math.floor(num/2);

}
console.log(pattern.split("").reverse().join(""));


// ----unsigned right shift operator-----
num=47;

console.log((num >>> 0).toString(2));


// ------Array and math method-----

let arr=[];
while(num>0){
    arr.unshift(num%2);
    num=Math.floor(num/2);
    
}
console.log(arr);
console.log(arr.join(""));
