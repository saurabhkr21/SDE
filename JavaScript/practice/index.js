// console.log(a);
// setTimeout(()=>{
//     console.log(a);
// }, 1000);
// var a = 10;
// setTimeout(() => {
//   console.log(y);
// }, 500);
// var y = 20;

// var a = 1;
// function test() {
//   console.log(a);
//   var a = 2;
// }
// test();
// var b = 100;
// setTimeout(() => {
//   console.log(b);
// }, 0);
// b = 200;
// function foo() {
//   console.log(c);
//   var c = 10;
// }
// foo();

// let x = 1;
// setTimeout(() => {
//   console.log(x);
// }, 1000);
// x = 2;

// var d = 10;
// (function () {
//   console.log(d);
//   var d = 20;
// })();

// console.log(typeof (e));
// var e = "hello";
// console.log(f);
// const f = 5;

// function createFunctions() {
//   let result = [];
//   for (let i = 0; i < 3; i++) {
//     result.push(() => console.log(i));
//   }
//   return result;
// }
// const funcs = createFunctions();
// funcs[0]();
// funcs[1]();
// funcs[2]();

// async function test() {
//   return "Hello";
// }
// test().then(console.log);


// function createAccount(initialBalance) {
//   let balance = initialBalance;

//   return {
//     deposit(amount) {
//       balance += amount;
//       return balance;
//     },
//     withdraw(amount) {
//       if (amount > balance) return "Insufficient funds";
//       balance -= amount;
//       return balance;
//     },
//     getBalance() {
//       return balance;
//     },
//   };
// }

// const myAccount = createAccount(1000);
// console.log("Deposit",myAccount.deposit(500));
// console.log ( "withdraw",myAccount.withdraw(200));
// console.log( "getbalance",myAccount.getBalance());
// console.log(myAccount.balance);



function runOnce(fn) {
  let called = false;
  return function () {
    if (!called) {
      called = true;
      return fn();
    } else {
      console.log("Function already called");
    }
  };
}

const init = runOnce(() => console.log("App initialized"));
init();
init();
