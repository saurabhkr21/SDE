// const mypromise=new Promise((resolve,reject))
// function resolve

// function resolve2

// function reject
// const myPromise=  new Promise((resolve ,reject) => {
// let finalVal = 4%2 === 0;
// if(finalVal){
//     resolve("Payment Zone " )
// }
// else{
//     reject("Payment Failed")
// }
// });

// fetch('https://dummyjson.com/products')
// .then(res=>{
//     console.log(res);
//     return "completed";
// })

// .then((data)=>{
//     console.log("resolve to :",data);
//     return "$400";

// })
// .then((data)=>{
//     console.log("2nd state:",data)
    
// })
// .catch((data)=>{
//     console.error("Rejected to :",data);

// });


fetch('https://dummyjson.com/products')
// .then(res=>{
//     console.log(res);
//     return "completed";
// })

async function res(){
    var r=await fetch('https://dummyjson.com/products');
    console.log(r);
    async

}

let a=res();
console.log(a);
