// Input: arr[] = [12, 35, 1, 10, 34, 1]
// Output: 34
// Explanation: The largest element of the array is 35 and the second largest element is 34.

// There are three methods: 
    // 1. naive approach: using Sorting
    // 2. Better approach: using Two pass
    // 3. Expected approach: using One pass



// --------Using Sorting---------------------

// problematic approach regarding duplicates in this approach.
let arr=[12,35,1,10,34,1];

if(arr.length === 1)
{
    console.log( -1);

}else{
    arr.sort((a,b)=>b-a);

console.log("first largest element:", arr[0]);
console.log("second largest element:", arr[1]);
}

// here time complexity = O(nlogn);

// correct approach

if(arr.length<2)
{
    console.log(-1);

}
else{
    arr.sort((a,b)=>b-a);

    let first=arr[0];
    let second= -1;

    for(let i=1;i<arr.length;i++)
    {
        if(arr[i]!==arr[0])
        {
            second= arr[i];
            break;
        }
    }
    console.log(first,second);


}

// ----------Using Two Pass---------------------

if(arr.length<2)
{
    console.log(-1);
}
else{
    let first = -Infinity;
    for(let i=0; i<arr.length; i++)
    {
        if(arr[i]>first)
        {
            first= arr[i];

        }
    }

    let second= -Infinity;
    for(let i=0; i<arr.length;i++)
    {
        if(arr[i]>second && arr[i]!==first)
        {
            second=arr[i];

        }
    }
    console.log(first, second);

}

// ---------Using One Pass---------

let first= -Infinity;
let second= -Infinity;

for(let num of arr)
{
    if(num>first)
    {
        second=first;

        first= num;
    }
    else if(num>second && num!==first)
    {
        second= num;

    }

    
}
console.log(first , second);