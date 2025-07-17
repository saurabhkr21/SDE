
// Even Number
let a=prompt("Enter a number");
if(a%2==0){
    alert("Its a Even number.");
}
else{
    alert("Its a Odd number");
}

//prime number

// let b = parseInt(prompt("Enter a number to check prime:"));
// let isPrime = true;
// if (b <= 1) {
//     isPrime = false;
// }
// else {
//     for (let i = 2; i < b; i++) {
//         if (b % i == 0) {
//             isPrime = false;
//             break;
//         }
//     }
// }
// if (isPrime != false) {
//     alert("Number is Prime")
// } else {
//     alert("Number is not prime");
// }


//string

// let input="nitinsd";
// let revstr=input.split('').reverse().join('');
// if (input==revstr){
//     alert("Input is Pallindrome");
// }
// else{
//     alert("Input is not Pallindrome");
// }


//factor
let inputNumber=parseInt(alert("Enter number to find its factor"));
let fact=[];
if(inputNumber==1){
    alert("The factor is 1");
}else{
    for(let i=2;i<inputNumber;i++){
        if(inputNumber%i==0){
            fact.push(i);
        }
    }
    alert("The factor are",inputNumber.join(''));
}

