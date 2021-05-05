//require the library
const mongoose = require('mongoose');

//connect to the database
mongoose.connect('mongodb://localhost/TODO_list_development');

//acquire the connection
const db = mongoose.connection;

//handling the error(if any while connecting to the database)
db.on('err', console.error.bind('error in connecting to database :: mongoDB'));

//up and running, printing the success msg
db.once('open', function () {
    console.log("connected to the database :: MongoDB");
});

//exporting the database
module.exports = db;