let fs = require("fs");
let data = fs.readFileSync(0, 'utf-8');
let idx = 0;
data = data.split('\n');

function readLine() {
  idx++;
  return data[idx - 1];
}

// -------- Do NOT edit anything above this line ----------

function shuffle(arr,n){
    //Implement this function
// 2
// 5
// 1
// 3
// 4
// 7
    let ans=[];//2 3 5 4 1 7
    for(let i=0;i<n;i++){
        ans.push(arr[i]);
        ans.push(arr[i+n]);
    }
    return ans;
    //space complexity->O(2*n)->O(n)
    //time complexity->O(n)
}

// Do not edit anything below
let n = parseInt(readLine());
let nums = [];
for(let index=0;index<2*n;index++){
        nums.push(parseInt(readLine()));
}
let res=shuffle(nums,n);
for(elem of res){
  console.log(elem);
}