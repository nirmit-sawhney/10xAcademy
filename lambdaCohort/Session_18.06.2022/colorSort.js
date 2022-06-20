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
// Given an array nums with n objects colored red, white, or blue, sort them in-place so that objects of the same color are adjacent, with the colors in the order red, white, and blue.

// Here, we will use the integers 0, 1, and 2 to represent the color red, white, and blue respectively.

// Follow up:

// Solve this problem without using the library's sort function
// Come up with a one-pass algorithm using only O(1) constant extra space

//input
// 6
// 2
// 0
// 2
// 1
// 1
// 0

//output
// 0
// 0
// 1
// 1
// 2
// 2

// 0 1 2 
// cnt0, cnt1, cnt2
// 2     2     2
// 0 0 1 1 2 2

let n=parseInt(readLine());
let arr=[];
for(let i=0;i<n;i++){
  arr.push(parseInt(readLine()));
}

// 2 0 2 1 1 0

let cnt0=0,cnt1=0,cnt2=0;
for(let i=0;i<n;i++){
  if(arr[i]==0){
    cnt0++; //2
  }else if(arr[i]==1){
    cnt1++; //2
  }else{
    cnt2++; //2
  }
}

let k=0;
while(cnt0--){//0
  arr[k++]=0; //0 0
}

while(cnt1--){//0
  arr[k++]=1; // 0 0 1 1
}

while(cnt2--){//1
  arr[k++]=2;// 0 0 1 1 2 2
}

for(let i=0;i<n;i++){
  console.log(arr[i]);// 0 0 1 1 2 2
}