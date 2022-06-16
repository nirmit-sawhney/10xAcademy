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
let k=parseInt(readLine());
let arr=readLine().split(" ");

let map=new Map();
for(let i=0;i<arr.length;i++){
  if(map.has(arr[i])==true){
    let count=map.get(arr[i]);
    count++;
    map.set(arr[i],count);
  }else{
    map.set(arr[i],1);
  }
}

let ans=[];
for(let [key,value] of map){ //name->count
  if(value>k){ //count>k
    ans.push(key);  //[name,..]
  }
}

if(ans.length==0){
  console.log("no such names exists!!!");
}
ans.sort();
for(let i=0;i<ans.length;i++){
  console.log(ans[i]);
}