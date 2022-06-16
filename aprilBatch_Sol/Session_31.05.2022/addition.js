let fs = require("fs");
let data = fs.readFileSync(0, "utf-8");
let idx = 0;
data = data.split("\n");

function readLine() {
  idx++;
  return data[idx - 1];
}
// Do not edit above this line
// Code here

class Addition {
constructor(operandOne, operandTwo) {
    this.operandOne=operandOne;
    this.operandTwo=operandTwo;
  }
  performSum() {
      this.result=this.operandOne+this.operandTwo;
  }
  getSum() {
      return this.result;
  }
}

class addFloat extends Addition{
constructor(operandOne, operandTwo) {
    super(operandOne,operandTwo);
  }
// Override the performSum() of parent Addition Class
  performSum() {
      this.result=this.operandOne+this.operandTwo;
  }
}

class addArray extends Addition {
constructor(operandOne, operandTwo) {
    super(operandOne,operandTwo);
  }
// Override the performSum() of parent Addition Class
  performSum() {
      let arr=[];
      for(let i=0;i<this.operandOne.length;i++){
          arr.push(this.operandOne[i]+this.operandTwo[i]);
      }
      this.result=arr;
  }
}

class addString extends Addition {
constructor(operandOne, operandTwo) {
    super(operandOne,operandTwo);
  }
// Override the performSum() of parent Addition Class
  performSum() {
      this.result=this.operandOne+this.operandTwo;
  }
}

// Do not edit below this line
// Code here

let t = parseInt(readLine());

if (t === 1) {
  operandOne = parseInt(readLine());
  operandTwo = parseInt(readLine());
  const addint = new Addition(operandOne, operandTwo);
  addint.performSum();

// Output The sum of Integers
  console.log(addint.getSum());
} 
else if (t === 2) {
  operandOne = parseFloat(readLine());
  operandTwo = parseFloat(readLine());
  const addfloat = new addFloat(operandOne, operandTwo);
  addfloat.performSum();

// Output The sum of Float fixed to 2 decimal places
  console.log(addfloat.getSum().toFixed(2));
} 
else if (t === 3) {
  operandOne = readLine().split(" ");
  operandTwo = readLine().split(" ");
  let n = operandOne.length;
  for (let i = 0; i < n; i++) {
    operandOne[i] = parseInt(operandOne[i]);
    operandTwo[i] = parseInt(operandTwo[i]);
  }
  const addarray = new addArray(operandOne, operandTwo);
  addarray.performSum();

// Output The sum of Arrays
  for (let i = 0; i < n; i++) {
    console.log(addarray.getSum()[i]);
  }
} 
else {
  operandOne = readLine().trim();
  operandTwo = readLine().trim();

  const addstring = new addString(operandOne, operandTwo);
  addstring.performSum();

// Output The sum of Strings
  console.log(addstring.getSum());
}