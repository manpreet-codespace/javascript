// -----using asterik-------

let n=5;
for (let i=1; i<=n;i++)
{
    let pattern =" ";

    for(let j=1;j<=i;j++)
    {
        pattern+="* ";

    }
    console.log(pattern);


}


// ------using numbers---------

for (let i=1; i<=n;i++)
{
    let pattern =" ";

    for(let j=1;j<=i;j++)
    {
        pattern+=j;

    }
    console.log(pattern);


}

// ------with repeated numbers-------
for (let i=1; i<=n;i++)
{
    let pattern =" ";

    for(let j=1;j<=i;j++)
    {
        pattern+=i;

    }
    console.log(pattern);


}

// ------with sequential increasing numbers -------
let k =1;

for (let i=1; i<=n;i++)
{
    let pattern =" ";
    for(let j=1;j<=i;j++)
    {
        pattern+=k;
        k=k+1;
    }
    console.log(pattern);


}


// -----pyramid pattern with increasing number------
  k=1;

for (let i=1;i<=n;i++){
    let pattern =" ";

    for(let j=1; j<= n-i; j++)
    {
        pattern+=" ";
    }
    for(let j=1;j<=i;j++)
    {
        pattern+=k+ " ";
        k=k+1;

    }
    console.log(pattern);

}

// ----- with asterik----- 

for (let i=1;i<=n;i++){
    let pattern =" ";

    for(let j=1; j<= n-i; j++)
    {
        pattern+=" ";
    }
    for(let j=1;j<=i;j++)
    {
        pattern+="* ";

    }
    console.log(pattern);

}

// ----with repeated numbers------


for (let i=1;i<=n;i++){
    let pattern =" ";

    for(let j=1; j<= n-i; j++)
    {
        pattern+=" ";
    }
    for(let j=1;j<=i;j++)
    {
        pattern+=i + " ";

    }
    console.log(pattern);

}