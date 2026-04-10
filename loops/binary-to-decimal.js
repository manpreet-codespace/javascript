let binary="1011";
let length= binary.length;
let num,decimal=0;

num=parseInt(binary);

for(let i=0;i<length;i++)
{
    rem=num%10;
    decimal+=rem*Math.pow(2,i);
    num=Math.floor(num/10);


}
console.log(decimal);


// ---parseInt-----
console.log(parseInt(binary,2));


// ----using bitwise OR operator------
for(let i=0;i<length;i++)
{
    if(binary[i]==="1")
    {
        decimal |= 1<<(length-i-1);

    }
    
}
console.log(decimal);