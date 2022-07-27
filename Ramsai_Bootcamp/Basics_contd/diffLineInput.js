let fs=require('fs');
let data=fs.readFileSync(0,'utf-8');
let idx=0;
data=data.split('\n');

function readLine(){
    idx++;//1
    return data[idx-1];//10
}

//we have 2 elements we have to check if both the elements are positive or not
let firstNum=parseInt(readLine());
let secondNum=parseInt(readLine());

if(firstNum>=0 && secondNum>=0){
    console.log(true);
}else{
    console.log(false);
}