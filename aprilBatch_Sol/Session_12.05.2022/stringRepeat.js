let fs = require("fs");
let data = fs.readFileSync(0, 'utf-8');
let idx = 0;
data = data.split('\n');

function readLine() {
    idx++;
    return data[idx - 1];
}

// -------- Do NOT edit anything above this line ----------
// Use readLine() for taking input, it will read one line of from the input  and is stored in string format

// Do not change the function signature
// Fill in the function 
// inputString will be string like 'abc'
// repeat will be an int like 3
// return 'abc abc abc'

function stringRepeat (inputString, repeat){
    // Write from here
    //abc 3
    //res=""
    let res="";
    inputString.replace("\r","");
    for(let i=0;i<repeat-1;i++){ //0 1 2
        res=res+inputString+" "; // res+="abc"+" "  ="abc "+"abc"+" "="abc abc "+"abc"+" "="abc abc "
    }
    //"abc abc "
    res+=inputString;
    //"abc abc abc"
    return res;

    //"abc" 3
    //"abc abc abc"
    //0 1
    //in the first iteration
    //res+=""+"abc"+" "
    //res="abc "
    //in the second iteration
    //res="abc "+"abc"+" "
    //res="abc abc "
    //res+="abc abc "+"abc"
    //res="abc abc abc"
    //res="abc abc abc "
}





// Please don't change anything below this line.
// You don't have to worry about reading input, just fill the function above.

let inputString = readLine();
let inputNumber = parseInt(readLine());
console.log(stringRepeat(inputString, inputNumber));