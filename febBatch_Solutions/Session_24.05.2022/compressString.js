let fs = require("fs");
let data = fs.readFileSync(0, 'utf-8');
let idx = 0;
data = data.split('\n');

function readLine() {
  idx++;
  return data[idx - 1];
}

// -------- Do NOT edit anything above this line ----------

function compress(st){//aabbccc
  // Complete this function.
  let count=1,ans="";//a2b2c3
  for(let i=1;i<st.length;i++){
    if(st[i]==st[i-1]){//a==a
      count++;//3
    }else{
      if(count>1){
        ans+=st[i-1];
        ans+=count;
      }else{
        ans+=st[i-1];
      }
      count=1;
    }
  }
  if(count>1){
    ans+=st[st.length-1];//c
    ans+=count;//3
  }else{
    ans+=st[st.length-1];
  }
}
let t = parseInt(readLine())
for(let i=0;i<t;i++){
  st =readLine()
  console.log(compress(st));
}