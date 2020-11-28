// // const name = "";
// const greet = name => {
//     console.log(`helo,${name}`);
// }

// greet("aravind")
// console.log(global)
setTimeout(() => {
    console.log("timeout")
}, 5000);
const int = setInterval(() => {
    console.log("interval");

    clearInterval(int);

}, 1000);