let fs = require("fs");
let data = fs.readFileSync(0, 'utf-8');
let idx = 0;
data = data.split('\n');

function readLine() {
  idx++;
  return data[idx - 1];
}

// -------- Do NOT edit anything above this line ----------
// input->
// 5
// 4 1 3 9 7

// output->
// 1 3 4 7 9

// 1 4 3 9 7
// key=3
// 1 4 4 9 7
// 1 3 4 9 7
// key=9
// 1 3 4 9 9
// 1 3 4 7 9

function Convert_to_number(list){
  for(let each in list){
    list[each]=Number(list[each])
  }
}


function insert(arr,n){
  // Your code goes here
  // 4 1 3 9 7
  for(let i=1;i<n;i++){
    let j=i-1;//3
    let key=arr[i];//7

    while(j>=0 && arr[j]>key){
      arr[j+1]=arr[j];//4 4 3 9 7, 1 4 4 9 7, 1 3 4 9 9
      j--;//-1, 0, 2
    }

    arr[j+1]=key;//arr[0]=1  1 4 3 9 7  arr[1]=3  1 3 4 9 7, arr[3]=7   1 3 4 7 9
  }
}

// DO NOT EDIT ANYTHING BELOW THIS LINE

let n = parseInt(readLine())
let arr = readLine().split(" ")
Convert_to_number(arr)
insert(arr, n)
console.log(...arr)