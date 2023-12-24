const myObject ={
    js:"javascript",
    cpp:"c++",
    rb:"ruby",
    swift:"SwiftByApple"
}

// for (const key in myObject) {
//        console.log(`${key} shortcut id for ${myObject[key]} `);
//     }


    const programming =["js","rb","py","java"];

    // for (const key in programming) {
    //     console.log(programming[key]);
    // }

const map = new Map()
map.set('IN',"India")
map.set('USA',"America")
map.set('Fr',"France")


for (const key of map) {
    console.log(key);
}