// Primitive 

// 7 types : String ,Number ,Boolean <null ,undefined ,Symbol , BigInt 

const score = 100;
const scorevlaue=100.3

const isLoggin = false ;
const outSideTemp=null;
let userEmail= undefined;
const id = Symbol('123');
const anotherId=Symbol('123');

console.log(id==anotherId);

const bigNumber = 45037503245375n;

//Reference type => (Non Premitive)

// Array , Objects , Functions 

const heros = ["shaktiman","naagraj","doga"];

let  muObj=
{
    name: "Sushil",
    age : 25,

}

const myFunction=function(){
    console.log("Hello world");
}



//  Stack(Primitive datatype ) , Heap (Non Primitve datatype)


let myYoutubename="sushilrathod";

let anothername=myYoutubename;
anothername="prajaktarathod";

console.log(anothername);

let userOne={
    email:"user@gmail.com",
    upi:"user@ybl"
}
console.log(userOne);
let userTwo=userOne;
console.log(userTwo);
userTwo.email="sushilrathod@gmail.com";

console.log(userTwo);