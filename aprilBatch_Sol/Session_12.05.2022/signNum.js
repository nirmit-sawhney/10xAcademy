let fs = require("fs");
let data = fs.readFileSync(0, 'utf-8');
let idx = 0;
data = data.split('\n');

function readLine() {
  idx++;
  return data[idx - 1];
}

// -------- Do NOT edit anything above this line ----------

// Fill in the following function.
// Please do not change the function name.
function signum(number){
    // you can start from here.
    if(number<0){
      return -1;
    }
    if(number>0){
      return 1;
    }
    return 0;
}



// Please do not edit the code below this line.

let testInput = parseFloat(readLine());
console.log(signum(testInput));