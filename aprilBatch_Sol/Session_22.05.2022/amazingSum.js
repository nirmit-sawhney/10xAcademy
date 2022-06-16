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

// let n=parseInt(readLine());
// let arr=[];
// for(let i=0;i<n;i++){
//     arr.push(parseInt(readLine()));
// }
// let res=false;
// for(let i=1;i<n;i++){
//     if(arr[i]+arr[i-1]>100){
//         res=true;
//         break;
//     }
// }
// console.log(res);

//space complexity-O(n)
//time complexity-O(n)

let n=parseInt(readLine());
let a=parseInt(readLine());
let res=false;
for(let i=1;i<n;i++){
    let b=parseInt(readLine());
    let c=a+b;

    if(c>100){
        res=true;
        break;
    }

    a=b;
}
console.log(res);

//space comp-O(1)
//time comp-O(n)