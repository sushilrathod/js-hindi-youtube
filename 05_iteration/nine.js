const myNums=[1,2,3]

// const myTotal=myNums.reduce(function (acc,currval){
//     console.log(`acc: ${acc} and currval : ${currval}`);
//     return acc+currval
// },0)



const myTotal= myNums.reduce((acc,currval)=>acc+currval,0)
console.log(myTotal);


const shoppingCart=[
    {
     itemName: "js course",
     price: 999
    },
    {
        itemName: "python",
        price: 100
     },
       {
        itemName: "java",
        price: 4000
       },
       {
        itemName: "mobiletv",
        price: 5000
       }
]


const priceToPay=shoppingCart.reduce((acc,item)=>acc+item.price,0)
console.log(priceToPay);