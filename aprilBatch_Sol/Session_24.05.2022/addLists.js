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
// 3
// 2 5 2
// 4 2
// 1 4
// 2 9 5
// 1
// 9 9 9

// 252 =252
// 42  =24
// 252+24=276=672

//1000 =0001 =1

// 252
// 42
// 672

// 14
// 295
// 336

let t=parseInt(readLine());//3
for(let i=0;i<t;i++){
    let arr1=readLine().split(" ");//1
    let arr2=readLine().split(" ");//9 9 9
    let res="",carry=0;
    let i=0,j=0;
    while(i<arr1.length || j<arr2.length){
        let sum=0;
        if(i<arr1.length){
            sum+=parseInt(arr1[i]);//
        }
        if(j<arr2.length){
            sum+=parseInt(arr2[j]);//9
        }
        sum+=carry;//9+1=10 9+1=10
        res+=(sum%10);//000
        carry=parseInt(sum/10);//10/10=1 10/10=1 10/10=1
        i++;
        j++;
    }
    if(carry>0){
        res+=carry;//0001
    }
    console.log(res);//336 0001
}
//13 3 1

//time complexity->main logic->O(n) where is n is max of both lengths
//space complexity-> O(1)