let fs = require("fs");
const { fileURLToPath } = require("url");
let data = fs.readFileSync(0, 'utf-8');
let idx = 0;
data = data.split('\n');

function readLine() {
  idx++;
  return data[idx - 1];
}

// -------- Do NOT edit anything above this line ----------
// Use readLine() for taking input, it will read one line of from the input  and is stored in string format


//1 2 2 3 3
//3 4
let n=parseInt(readLine());
let arr=[];
for(let i=0;i<n;i++){
    arr.push(parseInt(readLine()));
}
let count=1,max=1;

//O(n)
for(let i=1;i<n;i++){
    if(arr[i]==arr[i-1]){
        count++;
    }else{
        if(count>max){
            max=count;
        }
        count=1;
    }
}
if(count>max){
    max=count;
}
let ans=[];
count=1;

//O(n)
for(let i=1;i<n;i++){
    if(arr[i]==arr[i-1]){
        count++;
    }else{
        if(count==max){
            ans.push(arr[i-1]);
        }
        count=1;
    }
}

if(count==max){
    ans.push(arr[n-1]);
}

if(arr.length==0){
    console.log(-1);
}else{
    for(let i of ans){    //for(int i=0;i<ans.length;i++){ arr[i]
        console.log(i);
    }
}