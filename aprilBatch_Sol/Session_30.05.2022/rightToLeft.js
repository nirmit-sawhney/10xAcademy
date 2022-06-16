let fs = require("fs");
let data = fs.readFileSync(0, 'utf-8');
let idx = 0;
data = data.split('\n');

function readLine() {
  idx++;
  return data[idx - 1];
}

// -------- Do NOT edit anything above this line ----------

// name your function as rightToLeftDiagonal
// 1 2 3 4

// 5 6 7 8

// 9 10 11 12

// 13 14 15 16
function rightToLeftDiagonal(arr){
	  let ans=[];
    let col=arr[0].length-1;
    for(let row=0;row<arr.length;row++){
        ans.push(arr[row][col-row]);//[0][3] [1][2] [2][1] [3][0]
    }
    return ans;
    //time complexity->O(n)
    //space complexity->O(n)
}


// Do not change anything below this line
let m = parseInt(readLine());
let matrix = [];
for (let row = 0; row < m; row++) {
  let rowElements = readLine().split(" ");
  matrix.push(rowElements);
}
let result = rightToLeftDiagonal(matrix);
for (element of result) {
  console.log(element);
}