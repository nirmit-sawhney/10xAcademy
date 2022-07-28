// 3
// 1 2 3  00 01 02
// 4 5 6  10 11 12
// 7 8 9  20 21 22

// 1+5+9=15
// 3+7+5=15
// 15+15=30

let arr=[];
let n=parseInt(readLine());
for(let i=0;i<n;i++){
    let row=readLine().split(' ');
    arr.push(row);
}
// for(let i=0;i<n;i++){
//     for(let j=0;j<n;j++){
//         if(i==j){
//             sum+=arr[i][j];
//         }
//     }
// }
let sum=0;
for(let i=0;i<n;i++){
    sum+=arr[i][i]+arr[n-i-1];
}
console.log(sum);