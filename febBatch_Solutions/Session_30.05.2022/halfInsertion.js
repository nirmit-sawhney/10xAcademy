let fs = require("fs");
let data = fs.readFileSync(0, 'utf-8');
let idx = 0;
data = data.split('\n');

function readLine() {
  idx++;
  return data[idx - 1];
}

// -------- Do NOT edit anything above this line ----------
// Use readLine() for taking input, it will read one line of from the input  and is stored in string format
// adcbe
// adbce

// adbcef

let s=readLine();
s=s.split("");
sorted(s,Math.floor(s.length/2),s.length);//adcbe,2,4
console.log(s.join(""));//adbce->output

function sorted(str,st,n){//cbe, 2, 5
  for(let i=st+1;i<n;i++){//c b e
    let j=i-1;
    let key=str[i];

    while(j>=st && str[j]>key){
      str[j+1]=str[j];//c c e
      j--;
    }

    str[j+1]=key;//b c e
  }
}