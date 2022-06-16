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
// 5
// 10
// 20
// 30
// 40
// 50

//1
//10    10*10
let n=parseInt(readLine());//5
let min=Number.MAX_SAFE_INTEGER,max=Number.MIN_SAFE_INTEGER;
for(let i=0;i<n;i++){
    let num=parseInt(readLine());
    // min=Math.min(min,num); //min(10,20)=10 min(10,30)=10 min(10,40)=10
    // max=Math.max(max,num); //max(10,20)=20 max(20,30)=30 max(30,40)=40

    if(num<min){
        min=num;
    }
    if(num>max){
        max=num;
    }
}
console.log(min*max);

//20 50 10 5

//sc-O(1)
//TC-O(N)