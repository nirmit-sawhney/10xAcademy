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

let letters="abcdefghijklmnopqrstuvwxyz";
let codes=[".-","-...","-.-.","-..",".","..-.","--.","....","..",".---","-.-",".-..","--","-.","---",".--.","--.-",".-.","...","-","..-","...-",".--","-..-","-.--","--.."]
let map=new Map(codes.map((code,index)=>[letters[index],code]));
//(".-",0)=>letters[0]->".-"
//a->".-";
//("-...",1)=>letters[1]->"-..."
//b->"-..."
//("-.-.",2)=>letters[2]->"-.-."
//c->"-.-."

//key->alphabet
//values->morse code
for(let i=0;i<n;i++){
  let str=readLine();
  if(str.length==0){
    console.log(0);
    continue;
  }
  console.log(func(str));
}

function func(str){
  //gin zen gig msg
  let arr=str.split(" ");
  //["gin","zen","gig","msg"]
  let set=new Set();
  for(let i=0;i<arr.length;i++){
    let word=arr[i];
    //gin
    //""
    let morse="";
    for(let j=0;j<word.length;j++){  //g i n
      morse+=map.get(word[j]);  //morse=""+"-.." ="-.."+"..--"="-....--"+"-.."="-....---.."
    }
    set.add(morse); //-....---..
  }
  return set.size;
}