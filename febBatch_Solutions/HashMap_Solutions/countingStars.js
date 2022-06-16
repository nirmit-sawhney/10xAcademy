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
  let str=readLine();
  //abaab
  //sum=1+2=3+1=4
  //map
  //a->3
  //b->2

  let map=new Map();
  let sum=0;

  for(let j=0;j<n;j++){
    if(map.has(str[j])){
      sum+=map.get(str[j]);
      let cnt=map.get(str[j]);
      cnt++;
      map.set(str[j],cnt);
    }else{
      map.set(str[j],1);
    }
  }
  console.log(sum);
}