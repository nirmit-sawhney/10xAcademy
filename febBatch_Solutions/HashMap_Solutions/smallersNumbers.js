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
    arr.push(parseInt(readLine()));
}
//5 0 10 0 10 6
let copy=[...arr];
copy.sort((a,b)=>a-b);
//0 0 5 6 10 10

let map=new Map();
for(let i=0;i<n;i++){
    if(map.has(copy[i])==false){
        map.set(copy[i],i);
    }
}
// 0->0
// 5->2
// 6->3
// 10->4

for(let i=0;i<n;i++){
    console.log(map.get(arr[i]));
}
