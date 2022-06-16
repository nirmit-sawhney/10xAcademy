//CLASSES-> template code blueprint 
//OBJECT-> INSTANCE OF CLASS

class Vehicle{
    constructor(owner,licence_num,name){
        this.owner=owner;
        this.licence_num=licence_num;
        this.name=name;
    }
    getOwnerName(){
        return this.owner;
    }
    static getText(){
        return "THIS IS A VEHICLE AGENCY AND WE SELL SECOND HAND CARS";
    }
}

// let vehicle1=new Vehicle("Nirmit","N47890HDJ","CAR"); //Object
// //vehicle1.methodName();//class method declaration
// //methodName();//normal function

// console.log(vehicle1.getOwnerName());  //Nirmit

class Car extends Vehicle{
    constructor(owner,licence_num,name,color,price,model){
        super(owner,licence_num,name);

        this.color=color;
        this.price=price;
        this.model=model;
    }

    getInfo(){
        return `OWNER NAME IS : ${this.owner}, LICENSE NUMBER IS: ${this.licence_num} AND MODEL IS ${this.model}`;
    }

    getText(){
        return "THIS IS VEHICLE CAR";
    }
}

let mercedes=new Car("Nirmit","M48990013H","CAR","BLACK","BENZ A-CLASS",6000000);
//let rangerover=new Car();

console.log(mercedes.getInfo());
console.log(mercedes.getText());//THIS IS VEHICLE CAR

console.log(Vehicle.getText());//THIS IS A VEHICLE AGENCY AND WE SELL SECOND HAND CARS