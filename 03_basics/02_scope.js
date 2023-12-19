// let a = 100;
// // const b = 20;
// // var c = 30;

// if (true) {
//   let a = 10;
//   const b = 20;
//   console.log(a);
// }

// console.log(a);
// //console.log(b);



function one (){
    const username= " sushil";

     function two(){
        const website = " youtube ";
        console.log(username);
  //      console.log(website);
     }
   //  console.log(website);
     two();
}


//one();


 if(true){
    const username="sushil"
    if(true){
        const website=" youtube"
      //  console.log(username + website);
    }
    // console.log(website);
 }

//console.log(username);



// ++++++++++++++++++++++++++intresting ++++++++++++
console.log(addOne(5));
function addOne(num){
     return num + 1 
}



// Expression 

//addTwo(4)  we can not decleare like this 
 const addTwo = function (num){
    return num+2
 }

 console.log(addTwo(3));

 console.log(typeof addTwo());