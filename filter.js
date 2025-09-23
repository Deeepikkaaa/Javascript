//filter
//finding out num greater than 5

const arr =[1,2,3,4,5,6,7,8,9,10];

 function filterNumbers(arr){
     const tempArr =[];
     for(let number of arr){
        if(number>5){
               tempArr.push(number);
        }       
     }
     return tempArr;
     
 }
 console.log(filterNumbers(arr));