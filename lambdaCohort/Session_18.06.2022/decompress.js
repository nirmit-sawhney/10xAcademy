let fs = require("fs");
let data = fs.readFileSync(0, 'utf-8');
let idx = 0;
data = data.split('\n');

function readLine() {
  idx++;
  return data[idx - 1];
}

// 1 2 3 4 
// 2 4 4 4 

let n=parseInt(readLine());//4 is num of elements 
//4
//1
//2
//3
//4

//6-> 3 pairs

for(let i=0;i<Math.floor(n/2);i++){
    let freq=parseInt(readLine());//3
    let num=parseInt(readLine());//4

    while(freq--){
        console.log(num);//2 4 4 4
    }
}