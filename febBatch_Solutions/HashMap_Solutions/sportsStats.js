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

let map=new Map();
for(let i=0;i<n;i++){
  let inp=readLine().split(" ");
  //inp[0]->abir
  //inp[1]->cricket
  if(map.has(inp[0])){
    continue;
  }
  map.set(inp[0],inp[1]);
}
let max=0;
let map1=new Map();
for(let game of map.values()){
  if(map1.has(game)){
    let count=map1.get(game);
    count++;
    map1.set(game,count);

    max=Math.max(max,map1.get(game));
  }else{
    map1.set(game,1);
  }
}

let str="";
let flag=false;
for(let [key,value] of map1){
  if(value==max){
    if(flag){
      if(key<str){
        str=key;
      }
    }else{
      str=key;
      flag=true;
    }
  }
}
console.log(str);

if(map1.has("football")){
  console.log(map1.get("football"));
}else{
  console.log(0);
}