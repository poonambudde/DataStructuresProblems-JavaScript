maxcount = 100
count = 1
var arr = new Array();
console.log("The digits repeated twice in range 1-100:");
i=0
while ( count <= maxcount )
{
    if(count % 11 == 0)
    {
        console.log(count);
        arr[i]=count;
        i=i+1;
    }
    count=count+1;
}