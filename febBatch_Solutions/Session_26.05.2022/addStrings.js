let fs = require("fs");
let data = fs.readFileSync(0, 'utf-8');
let idx = 0;
data = data.split('\n');

function readLine() {
  idx++;
  return data[idx - 1];
}

// -------- Do NOT edit anything above this line ----------

// Complete this addStrings() function

function addStrings(num1, num2){     
  //Here num1 & num2 are strings [Return the addition of these two strings as string]
  let i=num1.length-1,j=num2.length-1,carry=0,ans="";
  //999 //99
  while(i>=0 || j>=0){
    let sum=carry;//1
    if(i>=0){
      sum+=num1[i]-'0';//10
      i--;
    }
    if(j>=0){
      sum+=num2[j]-'0';//
      j--;
    }
    ans=(sum%10).toString()+ans;//8==9+8=98==0+98=098
    carry=Math.floor(sum/10);//1
  }
  if(carry>0){
    ans=carry+ans;//1+198=1098
  }
  return ans;//1098
}

// Do not change anything below this line:

let n=parseInt(readLine());
for(let i=0;i<n;i++){
    var [n1,n2]=readLine().split(" ")
    console.log(addStrings(n1,n2))
}