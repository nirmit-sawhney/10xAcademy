let fs = require("fs");
let data = fs.readFileSync(0, 'utf-8');
let idx = 0;
data = data.split('\n');

function readLine() {
  idx++;
  return data[idx - 1];
}

// -------- Do NOT edit anything above this line ----------

let n=parseInt(readLine());//6
let arr=readLine().split(" ");// 3 2 2 5 4 5

// 3 2 2 5 4 5
// 2 2 3 4 5 5 

arr.sort((a,b)=>a-b); // 2 2 3 4 5 5

let min=Number.MAX_SAFE_INTEGER;
for(let i=0;i<n-1;i++){
    let diff=arr[i+1]-arr[i]; //0
    if(diff<min){
        min=diff; //0
    }
}

console.log(min);