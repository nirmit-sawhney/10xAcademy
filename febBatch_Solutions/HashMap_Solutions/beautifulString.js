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
  let str=readLine();
  let ans=0;
  let map=new Map();
  let cnta=0,cntb=0,cntc=0;
  map.set("0 0",1);
  for(let i=0;i<str.length;i++){
    if(str[i]=='a') cnta++;
    else if(str[i]=='b') cntb++;
    else if(str[i]=='c') cntc++;

    let curr=(cnta-cntb)+" "+(cnta-cntc);
    if(map.has(curr)){
      ans+=map.get(curr);
      let cnt=map.get(curr);
      cnt++;
      map.set(curr,cnt);
    }else{
      map.set(curr,1);
    }
  }
  console.log(ans);
}