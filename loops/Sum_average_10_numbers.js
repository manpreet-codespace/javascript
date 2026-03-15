let n=10;
let sum=0;
let input;
for (let i=1; i<=n; i++)
{
    input= prompt("input numbers" + i);

}

for(let i=1; i<=n;i++)
{
    sum+=i;

}
let avg = sum/n;

console.log(avg, sum);
