// for 

// for (let index = 1; index <= 10; index++) {
//     const element = index;
//     console.log(element);
// }

///  for of 

const arr=[1,2,3,4,5];
 // it will print main content 
// for (const num of arr) {
//     console.log(num);
// }

const greetings ="Hello world"

// for(const greet of greetings){
//     console.log(greet);
// }


// Maps 

const map = new Map()
map.set('IN',"India")
map.set('USA',"America")
map.set('Fr',"France")

console.log(map);


for (const [key,value] of map) {
     console.log(key,':-',value);
}

const myObject={
    game1: 'NFS',
    game2: 'Spiderman'
}

// for (const [key,value] of myObject) {
//     console.log(key,':-',value);
    
// }