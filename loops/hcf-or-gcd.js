let a=20,b=28,hcf;
let min= Math.min(a,b);
for(let i=1;i<=min;i++)
{
    if(a%i===0 && b%i===0)
    {
        hcf=i;
    }
}
console.log(hcf);




// -----if-else method-----

if(a===0)
{
    hcf=b;

}
else if(b===0)
{
    hcf=a;
}
else{
    while(a!==b)
    {
        if(a>b)
        {
            a-=b
        }
        else{
            b-=a
        }

    }
    hcf=a;

}

console.log(hcf);
