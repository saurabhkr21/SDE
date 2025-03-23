// alert("Welcome! on board")
// var a=prompt("Enter a number");
// var b=parseInt(a);
// console.log("enterred : ", a)
// console.log("converted : ", b)
// if(a ==""){
//     console.log("no data" );
// }
// else if(isNaN(b)){
//     console.log("invalid character")
// }
// else{
//     if(b%2==0){
//         console.log("even");
//     }
//     else{
//         console.log("odd");
//     }
// }


// grade

// var a=confirm("Do you want grade");

// if(a!=true){
//     alert("Ok,see you later");
//     console.log("come again")
// }
// else{
//     var b=prompt("Enter a number");
//     var c=parseInt(b);
//     console.log("enterred : ", b);
//     console.log("converted : ", c);
//     if(b ==""){
//         alert("no data");
//         console.log("No data");
//     }
//     else if(isNaN(c)){
//         alert("Invalid Entery");
//         console.log("Invalid entery");
//     }
//     else if(c>100){
//         alert("Out of grade");
//         console.log("out of grade")
//     }
//     else if(c>90 && c<=100){
//         alert("Grade A");
//         console.log("Grade A")
//     }
//     else if(c>80 && c<=90){
//         alert("Grade B");
//         console.log("Grade B")
//     }
//     else if(c>70 && c<=80){
//         alert("Grade C");
//         console.log("Grade C")
//     }
//     else if(c>60 && c<=70){
//         alert("Grade D");
//         console.log("Grade  D")
//     }
//     else if(c>0 && c<=60){
//         alert("Grade E");
//         console.log("Grade E")
//     }
// }


// const obj={
//     name:"John",
//     age:25,
//     name:{
//         first:"John",
//     }
// }

// obj["explorin"]=123;

// console.log(obj);
// const arr =[12,6854,{a:1},"height"]
// console.log(arr.lenght);

arr=[1,2,3,4,5]
let res=arr.map((a,b)=>{
    if(b&1)return a*a*a
    return a*a
})
console.log(arr);
console.log(res)