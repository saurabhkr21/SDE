// function mymap(arr,callback){
//     let result =[];
//     for (let i=0;i<arr.length;i++){
//         const ret=callback(arr[i],i,arr);
//         result.push(ret);
//     }
// }

// function cbf(val,index,arr){
//     console.log("current : ",val)
//     return val+1;
// }
// const arr = [1,2,3,4,5];
// console.log(mymap(arr,cbf));


// const arr2=[
//     [1,2,3],
//     [4,5,6],
//     [7,8,['b','c']]
// ];
// const arres=arr2.flat();
// let c=arres.flat()
// console.log(arres)
// console.log(c)



/* .............................................. */

// console.log(document)

// const element1=document.querySelectorAll( ".class2")
// const element2=document.getElementsByClassName( ".class2")
// console.log(element1,element2)

// const main=document.getElementById("main");

// console.log("innertext:",main.innerText)
// console.log("textcontent:",main.textContent)
// console.log("innerHtml:",main.innerHTML)
// main.innerHTML="<b>oijiotroi</b>"
main.setAttribute("class","newclass class2 newcls classxyz")
main.setAttribute("title","this is a sample title")
console.log(main.getAttribute("id"))



//toggle -to change existence of named class
console.log(main.classList.toggle("newcls"))
console.log(main.style.backgroundColor="red")
const new1 = document.createElement("div");
main.appendChild(new1)
main.append("text1 tect2")
new1.innerHTML="<b>this is a txt</b>"


// new1.remove()
// main.append(new1)