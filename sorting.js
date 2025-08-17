//check whether given array is sorted in non decreasing order.
let arr1=[10,20,30,40,50];
let arr2=[90,80,100,50,70,30];
class Solution{
    isSorted(arr){
        for(let i =0; i<arr.length-1; i++){
            if (arr[i]>arr[i+1]){
                return false;
            }
        }
        return true;
    }
}
let soln= new Solution;
console.log(soln.isSorted(arr1));
console.log(soln.isSorted(arr2));