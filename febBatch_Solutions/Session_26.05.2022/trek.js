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
let t=parseInt(readLine());
for(let i=0;i<t;i++){
  let n=parseInt(readLine());
  let s=readLine();
  let level=0,valleys=0;
  for(let c of s){
    if(c=='D'){
      level--;//-2
    }
    if(c=='U'){
      level++;//0
      if(level==0){
        valleys++;//1
      }
    }
  }
  console.log(valleys);
}
// _/\      _
//    \    /
//     \/\/