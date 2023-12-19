


function sayMyName(){
    console.log("S");
    console.log("U");
    console.log("S");
    console.log("H");
    console.log("I");
    console.log("L");
}

//sayMyName();
//sayMyName


/* function addTwoNumber(number1,number2){
   console.log( number1+number2);
}
 */


function addTwoNumber(number1,number2){

   /*  let result=number1+number2
    return result; */

    return number1+number2
 }
 


//addTwoNumber("3",4);

const result= addTwoNumber(5,8)

/* console.log(result);
 */


/* function loginUsermessage(username){
    if(!username){
        console.log("Please enter a username ");
        return
    }
    return `${username} just logged in `
}
 */


function loginUsermessage(username="sam"){
    if(!username){
        console.log("Please enter a username ");
        return
    }
    return `${username} just logged in `
}

 /*   console.log(loginUsermessage("Sushil")); 

   console.log(loginUsermessage()); */


   function calculateCarPrice(...num1){  // rest operator / spread operator 
      return num1 ;
   }

 /*   console.log(calculateCarPrice(2));
   console.log(calculateCarPrice(200,300,400)); */

   const user ={
    username: "sushil",
    price : 199
   }

   function handleObject (anyObject){
    console.log(`UserName is  ${anyObject.username}and Price is ${anyObject.price}`);
   }

   //handleObject(user);

   handleObject({
    username: " Rathod ",
    price :200
   })


   const myNewArray=[200,400,100,600]

   function returnSecondValue(getArray){
    return getArray[2];
   }

   console.log(returnSecondValue(myNewArray));