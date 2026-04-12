let arr=[10,20,4];

let first= arr[0];

for(let i=1;i<arr.length;i++)
{
    if(arr[i]>first)
    {
        first=arr[i];

    }
}
console.log(first);
