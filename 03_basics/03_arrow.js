const user ={
    username: "sushil",
    price : 100,
    welcomeMessage : function (){
        console.log(`${this.username} , welcome to website `);
      //  console.log(this);
     //   this.welcomeMessage()
    }

}

// user.welcomeMessage()
// user.username="sam";
// user.welcomeMessage()

// console.log(this);


//console.log(this);


// function chai(){
//     let username="sushil"
//     console.log(this.username);
// }

// chai();

// const chai = function (){
//     let username="sushil"
//        console.log(this.username);
// }

// chai()

// const chai =  () => {
//     let username="sushil"
//        console.log(this);
// }
// chai()


// const addTwo = (num1,num2)=>{
//     return num1 + num2;
// }

// console.log(addTwo(2,3));


//const addTwo = (num1,num2) =>  num1+num2

//const addTwo = (num1,num2) =>  (num1+num2)
 

const addTwo=(num1,num2)=>   ({
    username : "sushil"
})


console.log(addTwo(2,3));


