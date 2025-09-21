//Write a program that checks if a given key exists in an object.
let person = {
  name: "Sita",
  age: 22,
  city: "Kathmandu"
};

// Function to check if key exists
function checkKey(obj, key) {
  return key in obj; // OR: obj.hasOwnProperty(key)
}

// Testing
console.log(checkKey(person, "name"));   // true
console.log(checkKey(person, "address"));  // false



//Create an object student with properties name, grades (an array of numbers). Add a method getAverage()
//  that calculates and returns the average grade.
const student={
    name:"Deepika Bhandari",
    grade:[90,95,85,99,88],
    getaverage:function(){
        let sum=0;
        for(let i=0; i<this.grade.length;i++){
            sum+=this.grade[i];
        }
        return sum/this.grade.length;
    }
};
console.log("Name:",student.name);
console.log("Average Grade:",student.getaverage());

