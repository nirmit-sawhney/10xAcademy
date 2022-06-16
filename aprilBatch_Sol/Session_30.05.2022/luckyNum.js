let fs = require("fs");
let data = fs.readFileSync(0, 'utf-8');
let idx = 0;
data = data.split('\n');

function readLine() {
  idx++;
  return data[idx - 1];
}

// -------- Do NOT edit anything above this line ----------

function findLuckyNumber(nums){
  // implement this function
  //2 3 4 4 4 4
  //ans=? 2
  let count=1;
  for(let i=1;i<nums.length;i++){
      if(nums[i]==nums[i-1]){//4==4
          count++;//4
      }else{
          if(count==nums[i-1]){//2==2
              return nums[i-1];//2 return 2 and finish
          }
          count=1;
      }
  }
  if(count==nums[nums.length-1]){
      return nums[nums.length-1];
  }
  return -1;

  //time complexity->O(N)
  //space complexity->O(1)
}
// DO NOT change anything below this line
let numElems = parseInt(readLine());
let inputArr = [];
for(let index=0;index<numElems;index++){
  inputArr.push(parseInt(readLine()));
}
console.log(findLuckyNumber(inputArr));