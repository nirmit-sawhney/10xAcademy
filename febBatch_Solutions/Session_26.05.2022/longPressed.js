let fs = require("fs");
let data = fs.readFileSync(0, 'utf-8');
let idx = 0;
data = data.split('\n');

function readLine() {
  idx++;
  return data[idx - 1];
}

// -------- Do NOT edit anything above this line ----------
let n=parseInt(readLine())
for(let k=0;k<n;k++){
  let inp=readLine().split(" ");
  let s=inp[0],t=inp[1];
  //alex aaleex
  // let i=0,j=0;
  // let res="True";
  // while(i<s.length && j<t.length){
  //   let cnt1=0,cnt2=0;
  //   while(i<s.length-1 && s[i]==s[i+1]){
  //     i++;
  //     cnt1++;
  //   }
  //   while(j<t.length-1 && t[j]==t[j+1]){
  //     j++;
  //     cnt2++;
  //   }

  //   if(s[i]!=t[j] || cnt1>cnt2){
  //     res="False";
  //     break;
  //   }
  //   i++;
  //   j++;
  // }

  // if(i==s.length && j==t.length){
  //   console.log(res);
  // }else{
  //   console.log("False");
  // }

  //alex aaleex
  let i=0,j=0;
  let res="True";
  while(i<s.length && j<t.length){
    if(s[i]==t[j]){//a==a l!=a l==l e==e x!=e x==x
      i++;
      j++;
    }else if(i>0 && s[i-1]==t[j]){ //a==a e==e
      j++;
    }else{
      res="False";
      break;
    }
  }
  //alex aalexxxf-->false

  while(j<t.length){
    if(s[i-1]!=t[j]){
      res="False";
      break;
    }
    j++;
  }
  if(i<s.length) {
    res="False";
  }

  console.log(res);
}