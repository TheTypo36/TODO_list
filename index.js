const express = require('express');

const app = express();

const port = 8000;
app.use(express.urlencoded());
//accessing database
const db = require('./config/mongoose');
app.set('view engine', 'ejs');
app.set('views', './views');

//for using local static file
app.use(express.static('./assets'));


app.use('/', require('./routes/index.js'));
app.listen(port, function (err) {
    if (err) {
        console.log(`error in running the server: ${err}`);
        return;
    }
    console.log(`Server is up and running on the port: ${port}`)

});
