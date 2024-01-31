function reverseString(revers)
{
let wordString = "";
for(let i = revers.length-1; i >= 0; i--)
{
    wordString +=revers[i];

}
return wordString;
}
const string = prompt("Enter a string ");
const ruslet = reverseString(string);
console.log('The revers ruslet:' ,ruslet);