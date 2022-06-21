let fs=require('fs');
let data=fs.readFileSync(0,'utf-8');
let idx=0;
data=data.split('\n');

function readLine(){
    idx++;//1
    return data[idx-1];//10
}

//we have to count all the positive numbers

// let n=parseInt(readLine());//5
// let count=0;

// for(let i=0;i<n;i++){
//     let num=parseInt(readLine());//2 -3 2

//     if(num>=0){
//         count++;//2
//     }
// }

// console.log(count);

let n=parseInt(readLine());
let nums=readLine().split(" ");

// index starts from 0
// 2 3 4 5 6
// 0 1 2 3 4

//nums[2]=4
//nums[0]=2

let count=0;
for(let i=0;i<n;i++){
    let num=nums[i];

    if(num>=0){
        count++;
    }
}

console.log(count);