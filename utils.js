//a utility module that contains a couple of functions
function greet (username){
    return `Good Morning,${username}`;

}
function print(value){
    console.log(value);
}
//exporting functions from the utils module
module.exports={
    greet,
    print
};

