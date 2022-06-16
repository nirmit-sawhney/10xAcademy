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
for(let i=0;i<n;i++){
  let s=readLine();//abcabd
  let map=new Map();
  let i=0,j=0,max=0;
  while(j<s.length){
    if(map.has(s[j])){
      i=Math.max(i,map.get(s[j])+1);
    }
    map.set(s[j],j);
    max=Math.max(max,j-i+1);//4
    j++;
  }
  console.log(max);
}

//map
//a->3
//b->4
//c->2
//d->5