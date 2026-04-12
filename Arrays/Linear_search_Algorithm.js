function search(arr,x)
{
    for(let i=0;i<arr.length;i++)
    {
        if(arr[i]===x)
        {
            return i;

        }
    }
    return -1;

}

let arr= [1,2,3,4]
let x=3;

let result= search(arr,x);

(result=== -1)
?console.log("-1")
:console.log(result);
