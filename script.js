// console.log(x,y,z);
// let x = 10;
// let y = 50;
// var z = 100;
// abc();
    
// console.log(x, y);
// function abc(){
//     let g = 20;
//     let h = 30;
//     console.log(g, h);
//         function x(){
//             console.log(x);
//         }
//         function y(){
//             console.log(y);
//         }
//     }


// closure

// function createCounter(){
//     let curr = 0;
//     function count(){
//         curr++;
//         console.log(curr);
//     }
//     return count;
    
// }

// const count =createCounter();

// count();
// count();
// count();
// count();
// count();
// count();
// count();
// count();
// count();
// count();

//setTimeout
//setInterval


// var x = 10;

// function getfun(){
//     var y = 20;
//     console.log("executed");
//     return function executiveThis(){
//         console.log("executed again");
//     }
// }

// setTimeout(getfun(), 2000);

// console.log("start");
// var p= "Laptop"; ;
// var x = 10;
// console.log(p+x);
// const pq={
//     "sam": 10,
//     "ram": 20
    
// }
// console.log(pq);
// pq["jkh"]= 30;
// console.log(pq);

//interet videos

// let a=[1,3,2,6,5,4,7,8,9,10];
// console.log(a);
// let b=a.pop(2);
// console.log(b);
// console.log(a);
// a.push(11);
// console.log(a);

// let a=[1,3,2,6,5,4,7,8,9,10];
// let e=[11,12,13,14,15];
// let c=a.concat(e);
// console.log(c);
// let del=a.splice(2,2);
// console.log(del);
// console.log(a);
// let b=delete a[4];
// console.log(b);
// console.log(a);
// let c1=a.unshift(6);
// console.log(c);

// console.log(a);

// function getRandomInt(min, max) {
//     return Math.floor(Math.random() * (max - min + 1)) + min;
// }
// let b=getRandomInt(1,100);
// console.log(b);

//guess the number
// let c= Math.floor(Math.random() * 10);
// // console.log(c);
// let d=prompt("Enter a number between 1 to 10");
// if(c==d){
//     console.log("You have won");
// }
// else{
//     console.log("You have lost");
// }
// console.log("The number was "+c);


// let a=prompt("Enter your age ");
// let b=parseInt(a);
// if(a>=18){
//     alert("You can drive");
// }
// else{
//     alert("You cannot drive");
// }


// let runagain=true;
// while(runagain){
//     let a=prompt("Enter your age ");
//     a=Number.parseInt(a);
    
//     let candrive =(a)=>{
//         return a>=18? true: false;
//     }

//     if(a<0){
//         console.error("Please enter a valid age");
//         break;
//     }
//     if(candrive(a)){
//         alert("You can drive");
//     }else{
//         alert("You cannot drive");
//     }
//     runagain=confirm("Do you want to run again?");
// }


// let color=prompt("Enter the color ");
// document.body.style.background=color;

// console.log(document.body.firstChild);
// console.log(document.body.lastChild);
// console.log(document.body.childNodes);
// let a=Array.from(document.body.childNodes);
// console.log(a);
// console.log(a[1])
// console.log(document.body.children);
// let b=Array.from(document.body.children);
// console.log(b);
// console.log(b[1]);
// console.log(document.body.firstElementChild);
// console.log(document.body.lastElementChild);


// console.log(document.body.parentNode);
// console.log(document.body.parentElement);
// a=document.body.childNodes;
// console.log(a[0].parentNode);
// console.log(a[1].parentNode);

let a=document.body.firstElementChild.firstElementChild ;
console.log(a);
console.log(a.rows);
console.log(a.rows[0]);
console.log(a.rows[0].cells);
// console.log(document.body.table)