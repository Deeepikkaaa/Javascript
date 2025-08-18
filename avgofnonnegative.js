// given array that contains integers and you need to return average of the non negative numbers.
function posAverage(arr){
    let sum=0;
    let count=0;
    for(let i=0;i<arr.length;i++){
        if(arr[i]>0){
            sum=sum+arr[i];
            count ++;
        }
    }
    if(count===0)
        return 0.0;

    return sum/count;
}
arr=[-12,7,-8,6,-4,12,5,8,-3,-1];
console.log(posAverage(arr));