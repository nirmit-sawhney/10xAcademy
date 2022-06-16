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
//average=sum of n numbers/n

let n=parseInt(readLine());//5
let sum=0;
for(let i=0;i<n;i++){
    sum+=parseInt(readLine());//0+10+20+30+40+50
}
let avg=sum/n;//150/5=30
if(avg>100){
    console.log("Excellent!");
}else{
    console.log("Not Excellent!");
}