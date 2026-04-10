
// sum of series 
let n=5;

let power, term, fact=1, x=2;
let sum=1;

for(let i=1; i<n ;i++)
{
    let power = 1;
    let fact=1;

    for(let j=1; j<=i;j++)
    {
        power*=x;

    }
    for(let j=2; j<=i;j++)
    {
        fact*=j;
    }
    term = power/fact;

    sum+=term;

}
console.log(sum);


// ------ x-x^3 + x^5 - x^7 + x^9 - ------

sum=0;

for(let i=0; i<n; i++)
{
    power=1;
    let p= 2*i+1;
    for(let j=1; j<=p; j++)
    {
        power= power*x;

    }
    if(i%2 == 0){
        sum+=power;
    }
    else{
        sum-=power;

    }
}
console.log(sum);

