//Map in js
//it is the form of higher order function

const arr =[1,2,3,4,5,6,7];


function getSquareNum(arr){
    let newArr=[];
    for (let number of arr){
        newArr.push(number**2 );

    }
    return newArr;
}
console.log(getSquareNum(arr));


console.log("=========Using Map() method==========");
function getSquare(number){
    return number**2;
}
const output=arr.map(getSquare);
console.log(output);

console.log("===map method with arrow function===");
 function Square(number){
    return number**2;
 }
 const outputA=arr.map(Square);

 const Squareofnum=arr.map((number)=>{
    return number **2;
 })
 console.log(Squareofnum);

