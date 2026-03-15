// let num =6;
// let sum=0;

// for(let i=1; i<num ;i++)
// {
//     if(num %i ==0)
//     {
//         divisor=i;
//         console.log(divisor);

//         sum+=divisor;
//     }

// }
// console.log(sum );

// if(sum===num)
// {
//     console.log("perfect number");

// }
// else{
//     console.log("not a perfect number ");

// }

// -----perfect number in range ----- 

let start=1;
let end= 50;
let sum=0;
let divisor;


for(let i=start; i<=end;i++)
{
    sum=0;

    for(let j=1;j<i;j++)
    {
        if(i%j==0)
        {
            divisor=j;
            sum+=divisor;

        }
    }
    if(sum==i)
    {
            console.log("perfect number ",i);
    }

}
// If you want, I can also show:

// System design interview: Distributed Logger Architecture

// How Google / Netflix logging systems work

// How to build your own logger library (step-by-step).


// If you want, I can also explain:

// 3-tier architecture (very common interview question)

// Monolithic → Microservices migration

// Real architecture of Amazon / Netflix systems.