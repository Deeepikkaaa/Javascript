//this keyword refres to the object that is currently executing the function

//using this in a method
const car={
    model:"Ferrari",
    welcome(){
        return `Welcome to the ${this.model} showroom` ;
    }
};
console.log(car.welcome());

//using this in a function

function welcome(){
    console.log("Welcome to the"+this.model+"showroom");
}
const car1={ model:"Toyota",greetthem:welcome};
const car2={model:"Tata"};
welcome();
car1.greetthem();
welcome.call(car2);

//using this in a 