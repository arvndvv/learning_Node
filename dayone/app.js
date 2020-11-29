const express = require('express');
//express app
const app = express();

//listen to requests

app.listen(3000);
app.get('/', (req, res) => {
    res.send('<p>Yo Home!</p>');
})