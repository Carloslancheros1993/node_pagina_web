const express = require("express");
const app = express();

//settings
app.set('port', 3000);

//middlewares

//routes
app.get('/', (req, res) => {
    res.send("Hello world", app.get('port'));
});

//static files

//listening the server
app.listen(app.get ('port'), () =>{
    console.log("Puerto 3000", app.get('port'));
});