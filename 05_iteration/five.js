const coding =["js","ruby","java","python","cpp"]

// coding.forEach( function (item,index,param) {
//        console.log(item);
//        console.log(index);
//        console.log(param);

// })

// coding.forEach((param)=>{
//   console.log(param);
// })

// function printMe(item){
//     console.log(item);
// }

// coding.forEach(printMe);

// coding.forEach((item,index,arr)=>{
//     console.log(item);
//     console.log(index);
//     console.log(arr);
// })

const myCoding = [
    {
      languageName: "javascript",
      languageFile:"js"
    },
    {
        languageName: "Python",
      languageFile:"py"
    },
    {
        languageName: "Corejava",
      languageFile:"java"
    }
]

myCoding.forEach((item)=>{
    //   for (const key in item) {
    //       console.log(`${key} is ${item[key]} a  `);
    //   }
    console.log(item.languageName);
})
