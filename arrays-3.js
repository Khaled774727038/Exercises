let arr=[10, 15, 20, 25, 30 ,40 ];
let largestnum=arr[0];
for(let i=0; i<=arr.length; i++)

{

if (arr[i]>largestnum){
    largestnum=arr[i];
}

}
console.log('The largest number is :', largestnum);