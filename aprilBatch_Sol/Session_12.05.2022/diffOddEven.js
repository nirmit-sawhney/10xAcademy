let fs = require("fs");
let data = fs.readFileSync(0, 'utf-8');
let idx = 0;
data = data.split('\n');

function readLine() {
  idx++;
  return data[idx - 1];
}

// -------- Do NOT edit anything above this line ----------

// You should name your function as differenceOfSumOfEvenOddIndexnumbers
// It should take a list of integers
// Return an integer
function differenceOfSumOfEvenOddIndexnumbers(numbers){
  let evensum=0,oddsum=0;
  for(let i=0;i<numbers.length;i++){
    if(i%2==0){
      evensum+=numbers[i];
    }else{
      oddsum+=numbers[i];
    }
  }

  return evensum-oddsum;

  //23 52 0 31 200
  //evensum=0, oddsum=0
  //0 1 2 3 4
  //i=0
  //evensum+=23
  //i=1
  //oddsum+=52
  //i=2
  //evensum=23+0
  //i=3
  //oddsum=52+31
  //i=4
  //evensum=23+0+200=223
  //oddsum=83
  //return 223-83=140

  //numbers=[10]
  //oddsum=0,evensum=0;
  //0
  //evnsum+=10
  //oddsum=0
  //evensum-oddsum=10-0=10
}


// Do not change anything below this line
function ConvertToNumber(list){
  for(let i=0;i<list.length;i++){
      list[i]=parseInt(list[i]);
  }
  
}


let numbers =readLine().split(" ");//23 0 52 31 200 =[23,0,52,31,200]
ConvertToNumber(numbers);
console.log(differenceOfSumOfEvenOddIndexnumbers(numbers));