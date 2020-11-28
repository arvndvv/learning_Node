//?streams
//* we can start using data before it has finished loading.
const fs = require("fs")
const readStream = fs.createReadStream('./test.txt', { encoding: 'utf8' });
const writeStream = fs.createWriteStream("./test4.txt")
readStream.on('data', (chunk) => {
    console.log("------new chunk-----")
        // console.log(chunk.toString()); or in readstream, specify, utf8 as encoding
    console.log(chunk);
    writeStream.write("\nNEW chunk\n");
    writeStream.write(chunk)
})