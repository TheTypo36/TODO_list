const express = require('express');

const app = express();

const port = 8000;

//parse for decoding the form-info
app.use(express.urlencoded());

//accessing database
const db = require('./config/mongoose');

//setting up the view engine as ejs
app.set('view engine', 'ejs');
app.set('views', './views');

//for using local static file
app.use(express.static('./assets'));

//setting up the route
app.use('/', require('./routes/index.js'));

//firing up the server
app.listen(port, function (err) {
    if (err) {
        console.log(`error in running the server: ${err}`);
        return;
    }
    console.log(`Server is up and running on the port: ${port}`)

});
