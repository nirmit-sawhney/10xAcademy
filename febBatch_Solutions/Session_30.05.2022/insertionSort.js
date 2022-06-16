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
// 2
// 5
// 5 10 2 4 -12
// 4
// 12 89 90 7

// output->
// -12 2 4 5 10
// 7 12 89 90
function insertionSort(arr, n){
  // write from here
  for(let i=1;i<n;i++){
    let j=i-1;
    let key=arr[i];

    while(j>=0 && arr[j]>key){
      arr[j+1]=arr[j];
      j--;
    }

    arr[j+1]=key;
  }
  return arr;
}


function Convert_to_number(list){
  for(let each in list){
    list[each]=Number(list[each])
  }
}


let len=parseInt(readLine())
for(let i=0;i<len;i++){
  let n = parseInt(readLine())
  let arr =readLine().trim().split(" ")
  Convert_to_number(arr)
  console.log(...insertionSort(arr, n))
}