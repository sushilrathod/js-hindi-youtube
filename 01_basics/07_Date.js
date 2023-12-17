// dates


 let myDate= new Date();

/*  console.log(myDate.toString());
 console.log(myDate.toDateString());
 console.log(myDate.toLocaleString()); */

 console.log(typeof myDate);
 console.log(myDate);

  let newDate=new Date();
  console.log(newDate.getMonth()+1);
  console.log(newDate.getDay());
  console.log(newDate);

  console.log(`${newDate.getDate()} and the time `);

  newDate.toLocaleString("default",{
    weekday : "long",
    
  })
  