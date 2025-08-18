//count no of zeros
function countZeroes(arr){
    let count=0;
    for(let i=0; i<arr.length;i++){
        if(arr[i]===0){
            count++;
        }
    }
    return count;
}
arr1=[1,1,1,1,1,1,0,0,0,0,0,0,0,0]
console.log(countZeroes(arr1));