// Input: arr[] = {1, 14, 2, 16, 10, 20}
// Output: 14
// Explanation: Largest element is 20, second largest element is 16 and third largest element is 14

// --------using Sorting------------------------------

let arr =[1,14,2,16,10,20];

arr.sort((a,b)=>b-a);

console.log(arr, arr[2]);


// -------using Three Loop -----------------------------

if (arr.length<=2){
    console.log("-1");

}
else{
    let first= -Infinity;
    for(let i=0; i<arr.length;i++)
    {
        if(arr[i]>first)
        {
            first = arr[i];
        }

    }
    let second=-Infinity;


    for(let i=0;i<arr.length;i++)
    {
        if(arr[i]>second && arr[i]!==first)
        {
            second= arr[i];

        }
    }

    let third = -Infinity;

    for(let i=0;i<arr.length;i++)
    {
        if(arr[i]>third && arr[i]!==first && arr[i]!==second)
        {
            third= arr[i];

        }
    }
    console.log(arr, first, second, third);

}


// ---------using three variables --------------------------------


let first = -Infinity;
let second= -Infinity;
let third= -Infinity;

for(let i=0;i<arr.length;i++)
{
    if(arr[i]>first)
    {
        third=second;
        second=first;
        first=arr[i];

    }
    else if(arr[i]>second && arr[i]!== first)
    {
        third=second;
        second=arr[i];

    }
    else if(arr[i]>third && arr[i]!== first && arr[i]!== second)
    {
        third= arr[i];

    }

}
console.log(first, second, third);
