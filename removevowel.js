//removing vowels from the string
const string="The quick brown fox jumps over the lazy dog"

function getConsonentStr(str) {
    const vowels=['a','e','i','o','u'];
    let result='';
    for (let char of str){
        if(!vowels.includes(char.toLowerCase())){
            result+=char;
        }
    }
    return result;
}
const updatedStr=getConsonentStr(string);
console.log(updatedStr);