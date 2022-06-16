let fs = require("fs");
let data = fs.readFileSync(0, 'utf-8');
let idx = 0;
data = data.split('\n');

function readLine() {
  idx++;
  return data[idx - 1];
}

// -------- Do NOT edit anything above this line ----------
//22%11=0
//Write  your function here
function sumOfMultiples(arr,num){
    let sum=0;
    //22 96 33 12 48
    //11
    for(let i=0;i<arr.length;i++){
        if(arr[i]%num==0){//22%11==0  33%11==0
            sum+=arr[i];//0+22+33=55
        }
    }
    return sum;
}

// DO NOT CHANGE ANYTHING BELOW THIS LINE
let range =parseInt(readLine());//5
let numbers=[];
for(let each=0;each<range;each++){
  numbers.push(parseInt(readLine()));//22 96 33 12 48
}
let mult=parseInt(readLine());//11
console.log(sumOfMultiples(numbers, mult));