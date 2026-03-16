let n=-5;
if(n==0)
{
    console.log("0");

}
else if(n<0)
{
    for(let i=n;i<=0;i)
    {
        let cube= i**3;
        console.log(cube);

    }

}
else{
    for( let i=1; i<=n; i++){
        let cube = i**3;
        console.log(cube);
        
    }
}
