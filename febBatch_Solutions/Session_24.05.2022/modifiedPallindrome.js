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
let n=parseInt(readLine());
for(let i=0;i<n;i++){
  let s=readLine();
  console.log(soln(s));
}

function soln(s){//abcdebca
  let i=0,j=s.length-1;
  while(i<j){
    if(s[i]!=s[j]){
      if(valid(s,i+1,j)=="True" || valid(s,i,j-1)=="True"){//valid(cdebc) || valid(bcdeb)
        return "True";
      }else{
        return "False";
      }
    }
    i++;
    j--;
  }
  return "True";
}

function valid(s,i,j){//cdebc
  while(i<j){
    if(s[i]!=s[j]){
      return "False";
    }
    i++;
    j--;
  }
  return "True";
}