const express = require('express');
const app = express();
const mustacheExpress = require('mustache-express');
port = 3000;


//setting mustache engine
app.engine('mustache', mustacheExpress());
app.set('views', '/views');
app.set('view engine', 'mustache');


app.get('/', (req, res) => {
    res.send("Naveen");
})


app.listen(port, () => {
    console.log("server running...");
})