/*Pure function
It takes an argument.
It should return something.
It should not be influenced by external factor.
It should not mutate original argument.
Same input same output */


function getSquareNum(num){
    return num*num;
}
const result =getSquareNum(12);
console.log(result);

function appendNumbers(arr){
    let newArr=[];
    newArr.push(...arr,8,9,10);
    return newArr;
}
const result1=appendNumbers([1,2,3,4,5,6,7]);
console.log(result1);