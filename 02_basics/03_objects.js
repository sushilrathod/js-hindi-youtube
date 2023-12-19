// singleton -> 


// object literals

//Object.create

const mySym= Symbol("key1")


const jsUser={
     
    name: "Sushil",
    "Full Name": "Sushil Rathod",
    age : 18,
    [mySym]:  "key1",
    location: "Pune",
    email: "sushil.rathod@gmail.com",
    isLoggIn: false,
    lastLoggInDays: ["Monday","Satrday"]

}

/* console.log(jsUser.email);
console.log(jsUser["email"]);
console.log(jsUser["Full Name"]); */

/* console.log(typeof jsUser.mySym); */

jsUser.email="prajaktarathod@gmail.com"
//console.log(jsUser);
//Object.freeze(jsUser)
jsUser.email="shitalRathod@gmail.com"
//console.log(jsUser);


jsUser.greeting= function(){
    console.log(`Hello js User  ${this.name}`);
}

console.log(jsUser.greeting());
console.log(jsUser.greeting);  // refrence 

