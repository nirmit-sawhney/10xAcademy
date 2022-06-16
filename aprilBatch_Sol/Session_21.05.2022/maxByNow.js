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
let n=parseInt(readLine());
let arr=[];
for(let i=0;i<n;i++){
  arr[i]=parseInt(readLine());
} 

let max=arr[0];
console.log(max);
for(let i=1;i<n;i++){
  if(arr[i]>max){
    max=arr[i];
  }
  console.log(max);
}

//time complexity->O(n)
//space complexity-> O(1)//extra space but in general it is O(n)