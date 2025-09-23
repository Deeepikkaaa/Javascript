//reduce takes a call back function
const arr=[1,2,3,4,5,6];
const reducerfun=(acc,cur)=>acc+cur;
const output=arr.reduce(reducerfun,0)
console.log(output);