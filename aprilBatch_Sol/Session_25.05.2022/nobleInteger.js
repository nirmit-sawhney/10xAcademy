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
// 4
// 3
// 2
// 1
// 3

// 3->0
// 2->2
// 1->3
let n=parseInt(readLine());
let arr=[];
for(let i=0;i<n;i++){
    arr.push(parseInt(readLine()));
}
// //3 2 1 3
// let ans=-1;
// for(let i=0;i<n;i++){//2
//     let count=0;
//     for(let j=0;j<n;j++){
//         if(arr[j]>arr[i]){//3>2 3>2
//             count++;//2
//         }
//     }
//     if(count==arr[i]){2==2
//         ans=1;
//         break;
//     }
// }
// console.log(ans);//1

// //Time Com->O(N*N)=o(n^2)
// //space O(1)

//3 2 1 3
//1 2 3 3
arr.sort((a,b)=>a-b);//1 2 3 3 4 5 6  arr.sort()
let ans=-1;//let say there will be no noble integer present
for(let i=0;i<n-1;i++){
    if(arr[i]==arr[i+1]){
        continue;
    }
    if(arr[i]==n-i-1){//3==3
        ans=1;//ok noble integer exists
        break;
    }
}
console.log(ans);

//a-b<0 a and b
//a-b>0 b and a
//a-b==0 a and b

//tc-> O(nlogn)
//space-> O(1)