let n=5;

// for(let i=0; i<n; i++)
// {
//     let pattern = "";

//     for(let j=1;j<= n-i; j++)
//     {
//         pattern+=" ";

//     }

//     for(let j=1; j <= ((2*i)+1) ; j++)
//     {
//         pattern += "*";
//     }
//     console.log(pattern);

// }


// ----  9+99+999+9999+------    ----

let intTerm;
let sum=0;

for(let i=1; i<=n; i++)
{
    let term = "";
    for(let j=1; j<= i ; j++)
        {
        term+="9";
        intTerm= parseInt(term);
    }
    console.log(term);
    sum+= intTerm;

}
console.log(sum);

