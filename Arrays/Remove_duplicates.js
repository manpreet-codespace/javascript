let arr= [1,2,2,3,4,4,4,5,5];
let arr1=[];

if(arr.length<=1)
{
    console.log(arr);
}
else{
    let idx=1;


    for(let i=0;i<arr.length;i++)
    {
        if(arr[i]!==arr[i-1])
        {
            arr1[idx++]=arr[i];
        }
    }
    console.log(arr1);

}
