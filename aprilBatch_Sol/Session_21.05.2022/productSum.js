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

let sum=0,pro=1,temp=n;
while(n>0){
  let dig=n%10;
  sum+=dig;
  pro*=dig;
  n=Math.floor(n/10);
}
//1234 = 4 O(N) N is the no of digits
//O(1) constant space

let res=pro-sum;
if(temp==0){
  console.log(0);
}else{
  console.log(res);
}
let arr=[];//size is n O(n)
for(let i=0;i<n;i++){

}
