// Immediatly  Invoked Function Expression (IIFE)

(function chai(){
    console.log(`DB CONNECTED `);
})(); // we should add this semicolan here 
// other wise it will give error to you 

//chai()


((name)=>{
    console.log(`DB CONNECTED TWO ${name} `);
})("sushil")