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
let n=parseInt(readLine());//no of elements
let arr=[];
for(let i=0;i<n;i++){
    arr.push(parseInt(readLine()));
}
let m=parseInt(readLine());//no of folds
let out=[];
// 6 no of elements
// 3
// 1
// 6
// 7
// 2
// 3
// 2 no of folds

// 6 3 13
//after second fold
// 19 3
for(let i=0;i<m;i++){
    n=arr.length;//3
    let mid=Math.floor(n/2);//1
    for(let j=0;j<mid;j++){
        out.push(arr[j]+arr[n-j-1]);//19
    }
    if(n%2!=0){
        out.push(arr[mid]);
    }
    arr=out;//19
    out=[];//[]
}
console.log(arr.length);
for(let i=0;i<arr.length;i++){
    console.log(arr[i]);
}

//time complexity->O(m*(n/2))-->
//space complexity->O(n/2)-->