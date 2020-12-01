// const { people, ages } = require('./people');
// // console.log(people, ages);
// // console.log(people)
// // console.log(ages);
// const os = require('os');
// console.log(os.platform(), os.homedir());
// const fs = require('fs') //fs=filesystem
// fs.readFile('test.txt', (err, data) => { //?synchronous-> non blocking
//     if (err) {
//         console.log(err);
//     }
//     console.log(data.toString())
//         //console.log(data)//out><Buffer 68 65 6c 6f 6f 77 77 77 77 77 77>
// });
// console.log("last line")

// // we can see last line is printed firsr, becuz, while fs is reading file,
// // rest of the codes will be executed

// fs.writeFile("test2.txt", "elf is here", () => { //if file doesnt exist, it will create one
//     console.log("test2 is written")

// })

// //?make directory
// if (!fs.existsSync('./newDir')) {


//     fs.mkdir("./newDir", (err) => {
//         if (err) {
//             console.log(err);
//         }
//         console.log("folder created")
//     })
// } else {
//     fs.rmdir("./newDir", (err) => { //remove directory
//         if (err) { console.log(err) }
//         console.log("folder Deleted!")
//     })
// }

// //?remove file

// if (fs.existsSync('./test2.txt')) {
//     fs.unlink('./test2.txt', err => {
//         if (err) {
//             console.log(err);

//         }
//         console.log("test2 deleted")
//     })
// }