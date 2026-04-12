
// -----------Using temporary-----------------------------

let arr=[1,4,3,2,6,5];

let tempA = new Array();

for(let i=0; i<arr.length;i++)
{
    tempA[i]= arr[arr.length-i-1];

}

for(let i=0;i<arr.length;i++)
{
    arr[i] = tempA[i];

}

console.log(arr);


// ---------------Using Two Pointers------------------------------

let temp;
let left=0;
let right= arr.length-1;

while(left<right)
{
    temp=arr[left];
    arr[left]= arr[right];
    arr[right]=temp;
    left++;
    right--;

}

console.log(arr);

// -----------------Using Single Pointer----------------------------------
let n=arr.length
for(let i=0;i<arr.length/2;i++)
{
    temp=arr[left];
    arr[left]= arr[n-i-1];
    arr[n-i-1]= temp;

    left++;

}
console.log(arr);
