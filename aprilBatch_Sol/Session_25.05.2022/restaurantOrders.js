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

// 5--> no of total orders
// 4--> no of tables

// a table and corresponding order
// 1   2    3    4    3
// 100 200  300  500  200

//1->100
//2->200
//3->300+200=500
//4->500

//3
//4

let n=parseInt(readLine());
let t=parseInt(readLine());
let tables=[];//1   2    3    4    3
for(let i=0;i<n;i++){
    tables.push(parseInt(readLine()));
}
let bills=[];// 100 200  300  500  200
for(let i=0;i<n;i++){
    bills.push(parseInt(readLine()));
}

let arr=new Array(t+1);
arr.fill(0);
for(let i=0;i<n;i++){
    let table=tables[i];// 1   2   3            4   3
    arr[table]+=bills[i];//100 200  arr[3]+=300 500 arr[3]+=200=500
}
//  100 200 500 500
let max=0;
for(let i=0;i<arr.length;i++){
    max=Math.max(max,arr[i]);//(100,0)=100=(100,200)=200=(200,500)=500=(500,500)=500
}
for(let i=0;i<arr.length;i++){
    if(arr[i]==max){
        console.log(i);//3 4
    }
}