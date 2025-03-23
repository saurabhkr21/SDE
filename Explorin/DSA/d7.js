// const a1=Symbol("hello");
// const a2=Symbol("hello");
// if (a1==a2)
//     console.log("true",a1,a2);
// else
//     console.log("false",a1,a2);


// let av= "hello";
// const r=av.replace("e","i");
// console.log(av);
// console.log(r);

// const obj={
//     name:"john",
//     age: 30,
//     name:{
//         first:"john",
//         age:25
//     }
// }
// obj["explorin"]=1254;
// console.log(obj)

// const arr=[12,43,234,23423,"kjfhk"];
// console.log(arr);
// console.log(arr.length);
//avc(5,6,89,45);


// function namedfun(a,b=0,c,d=0){
//     console.log("hkg hjgauyguigv higiusdtyg");
//     console.log(a+b,b+c,c+d)
// }




// const anonyfun=function(a,b=0){
//     console.log("anonyfun in function:\n",a,b);
//     a();
// }
// anonyfun(function(){console.log("Lo!")});
// console.log(anonyfun)

// //arrow function

// function add(a,b){
//     return a+b;
// }
// const addA =(a,b) => a+b;

// //self invoking function IIFE-Immideatly invocked function expression
// (function(){
//     console.log("Hello World!")
// })()

const arr=[1,2,3,7,8,4,77];
console.log(arr);
const res=arr.map((a,b)=>{
    if(a%2==0)
        return a*a;
    else
        return a*a*a;
});
console.log(res);
arr.push(5,7);
arr.pop();
// arr.map();
const len=arr.length;
// console.log(arr)
// console.log(len)

