//const tinderUser= new Object()

const tinderUser={}

tinderUser.id="123sushil"
tinderUser.name="Sushil"
tinderUser.isLoggIn=false;

//console.log(tinderUser);

const regularuser={
    email:"Sushil.rathod.@gmail.com",
    fullname :{
        userFullName: {
            firstName: "Sushil",
            lastName:"Rathod"
        }
    }
}

//console.log(regularuser.fullname.userFullName.firstName);


const obj1={1:"a",2:"b"}
const obj2={3:"c",4:"d"}

//const obj3={obj1,obj2}


const obj3=Object.assign(obj1,obj2)
const obj4=Object.assign({},obj1,obj2)
console.log(obj3);
console.log(obj4);


console.log(obj1===obj3);
console.log(obj1===obj4);


const obj5={...obj1,...obj2,...obj3,...obj4}

console.log(obj5);

const user= [
    {
        name:"Sushil",
        id:"123"
    }
]


/* console.log(Object.keys(tinderUser));

console.log(Object.values(tinderUser));

console.log(Object.entries(tinderUser));

console.log(tinderUser.hasOwnProperty("isLoggIn")) */


const course ={
    coursename: "js In hindi",
    price : 1000,
    courseInstructor: "Sushil"
}

// course.courseInstructor

const {courseInstructor : instructor}= course

console.log(instructor);

// JSON 


/* {
     "name" :"sushil",
     "courseName";"JsInHindi",
     "price" : "free"
} */