//finding the largest element from the given array
 function largest(arr){
    let max=arr[0];
    for(let i=0;i<arr.length;i++){
        if(arr[i]>max){
            max=arr[i];
        }
    }
    return max;

 }
 arr=[1,8,7,56,90,8,99];
 console.log(largest(arr));