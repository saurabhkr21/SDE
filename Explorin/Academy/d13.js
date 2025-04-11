const num=99;
const str="string";
const data={
    name:"John",
    age:30,
    city:"New York",
    children :[
        {
            name:"Jane",
            age:10
        },
        {
            name:"Doe",
            age:5
        },
    ]
}
const arr=[1,2,3,4,5];

localStorage.getItemItem("num",num);
localStorage.getItemItem("str",str);
localStorage.getItemItem("data",data);
localStorage.getItemItem("arr",arr);


console.log(localStorage.getItem("num"));
console.log(localStorage.getItem("str"));