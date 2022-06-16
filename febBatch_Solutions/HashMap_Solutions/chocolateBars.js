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
let arr=readLine().split(" ");

let map=new Map();
let ans=0;
for(let i=0;i<n;i++){
  arr[i]=parseInt(arr[i]);

  let cnt=0;
  for(let j=1;j<=Math.sqrt(arr[i]);j++){
    if(arr[i]%j==0){
      if(arr[i]/j==j){
        cnt++;
      }else{
        cnt+=2;
      }
    }
  }

  // 100%2==0
  // 100/2=50
  // 100/50=2
  // cnt+=2

  // 100%10=0
  // cnt+=1

  if(map.has(cnt)){
    ans+=map.get(cnt);
    let count=map.get(cnt);
    count++;
    map.set(cnt,count);
  }else{
    map.set(cnt,1);
  }
}

console.log(ans);

//time complexity-> O(n*sqrt(num)) where n is no of elements and num is a particular array element