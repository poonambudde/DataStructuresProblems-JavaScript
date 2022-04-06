//defining array
let randomNumberArray= new Array();
//iterating until length of array is 10
while(randomNumberArray.length<10)
{
    //taking random numbers
    randomNumber= Math.floor(Math.random()*1000);
    //if no. is in correct range, then pushing it in array
    if(randomNumber>=100 && randomNumber<=999)
    {
        randomNumberArray.push(randomNumber);
    }
}
let unsortedArray= randomNumberArray;
console.log(randomNumberArray);
//sorting directly by sort function
unsortedArray.sort();
//printing 2nd largest and 2nd smallest elements
console.log("Second largest element: "+randomNumberArray[8]);
console.log("Second smallest element: "+randomNumberArray[1]);