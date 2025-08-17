 // finding the index of the first occurance of x element  in an array
 //first occurance of  3 in the given array
 let arr1=[1,2,3,4,3,5,6];
 class Solution{
 search(arr,x){
    for(let i= 0; i<arr.length;i++){
        if (arr[i]===x){
            return i;
        }
    }
    return -1;

 }
}
const soln=new Solution;
console.log(soln.search(arr1,3));