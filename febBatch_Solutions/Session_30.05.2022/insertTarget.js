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
// 1
// 5 11
// -2 4 5 10 15
// output->
// -2 4 5 10 11 15

let t=parseInt(readLine());
for(let k=0;k<t;k++){
  let inp=readLine().split(" ");
  let n=parseInt(inp[0]),key=parseInt(inp[1]);//5 11
  let arr=readLine().split(" ");//-2 4 5 10 15
  convert(arr);
  let i=n-1;
  while(i>=0 && arr[i]>key){
    arr[i+1]=arr[i];//-2 4 5 10 15 15
    i--;
  }

  arr[i+1]=key;//-2 4 5 10 11 15
  console.log(...arr);
}

function convert(arr){
  for(let e of arr){
    arr[e]=parseInt(arr[e]);
  }
}