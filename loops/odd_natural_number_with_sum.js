let n=15;
let sum=0;

for(let i=1; i<=(n*2); i++)
{
    if(i%2!==0)
    {
        sum+=i;
        console.log(i);

    }
}
console.log(sum);



// -------OPTIIMIZED SOLUTION-------
sum=0;
for(let i=1;i<=n;i++)
{
    let odd=2*i-1;
    console.log(odd);
    sum+=odd;
}
console.log(sum);
