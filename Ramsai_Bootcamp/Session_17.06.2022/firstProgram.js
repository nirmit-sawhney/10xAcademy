let fs=require('fs');
let data=fs.readFileSync(0,'utf-8');
let idx=0;
data=data.split('\n');

function readLine(){
    idx++;//1
    return data[idx-1];//10
}

let a=parseInt(readLine());
let b=parseInt(readLine());

let add=a+b;
let sub=a-b;// it is converting the string to integer itself this is typecasting
let div=b/a;
let mod=b%a;
console.log(add,sub,div,mod); //this is a comment
//30 -10 2 0

/* comment for multiple lines 
this is multi line comment */

//node firstProgram.js < input.txt

//output-> 1020 -10 2 0
//bcz javascript is a loosely typed lang so by default it takes all the input as a string

//a="hi" b="hello"
//a+b -> hihello

//a="hi" b=2
//a+b-> hi2

//a=5 b=null
//a+b-> 5

//a="5" b=null
//a+b-> 5null