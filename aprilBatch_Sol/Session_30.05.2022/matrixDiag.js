let fs = require("fs");
let data = fs.readFileSync(0, 'utf-8');
let idx = 0;
data = data.split('\n');

function readLine() {
  idx++;
  return data[idx - 1];
}

// -------- Do NOT edit anything above this line ----------

// name your function as changeDiagonal and it should take list as input
// 2 0 1 4

// 0 -1 1 10

// 0 0 0 0

// 1 2 3 4
function changeDiagonal(arr){
    for(let row=0;row<arr.length;row++){
        if(arr[row][row]<0){//[0][0] [1][1] [2][2] [3][3]
            arr[row][row]=0;//arr[1][1]=0
        }else{
            arr[row][row]=1;//arr[0][0]=1, arr[2][2]=1, arr[3][3]=1
        }
    }
    return arr;

    //time complexity->O(N)
    //space complexity->O(1)
}

// Do not change anything below this line.

//Converting string to intger
function ConvertoInteger(arr){
	for(let index=0;index<arr.length;index++){
		arr[index]=parseInt(arr[index]);
	}
	return arr;
}


let n = parseInt(readLine());
let matrix = [];
for(let index=0;index<n;index++){
  let row=readLine().split(" ");
  row = ConvertoInteger(row);
  matrix.push(row);
}
let newMatrix = changeDiagonal(matrix);
for(row of newMatrix){
  console.log(...row);
}