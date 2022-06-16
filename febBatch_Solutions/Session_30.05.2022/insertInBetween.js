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

// input->
// 5 3
// 1 2 3 4 5
// output->
// 1 2 3 3 4 5

let inp=readLine().split(" ");
let n=parseInt(inp[0]),t=parseInt(inp[1]);//6
let arr=readLine().split(" ");//1 2 3 4 5
let i=n-1;//4
while(i>=0 && arr[i]>t){//5>3, 4>3
  arr[i+1]=arr[i];//1 2 3 4 5 5, 1 2 3 4 4 5
  i--;
}

arr[i+1]=t;//arr[3]=3 | 1 2 3 3 4 5 || arr[5]=6 | 1 2 3 4 5 6
console.log(...arr);