let fs = require("fs");
let data = fs.readFileSync(0, 'utf-8');
let idx = 0;
data = data.split('\n');

function readLine() {
  idx++;
  return data[idx - 1];
}

// -------- Do NOT edit anything above this line ----------
// adcb
// abcd

function stringInsertionSort(str){//adcb
  // Your code goes here
  str=str.split("");//['a','d','c','b'];
  for(let i=1;i<str.length;i++){
    let j=i-1;
    let key=str[i];

    while(j>=0 && str[j]>key){
      str[j+1]=str[j];//[a,d,d,b], [a,c,d,d], [a,c,c,d]
      j--;
    }

    str[j+1]=key;//[a,c,d,b], [a,b,c,d]
  }

  return str.join("");//abcd
}


//DO NOT CHANGE ANYTHING BELOW THIS LINE

let input_string = readLine()
console.log(stringInsertionSort(input_string))