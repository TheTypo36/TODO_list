const { query } = require('express');
const Task = require('../models/task');
var taskList = [
    {
        task: "Go for running",
        category: "work",
        date: "1 may, 2021"
    },
    {
        task: "make a coffee",
        category: "Home",
        date: "5 may, 2021"
    },

]
// app.post('/add-task', function (req, res) {
//     console.log(req.body);
// });
module.exports.home = function (req, res) {
    Task.find({}, function (err, tasks) {
        if (err) {
            console.log('Error in fetching tasks from db');
            return;
        }
        res.render('home', {
            title: "Home",
            task_list: tasks
        });


    });
}
module.exports.update = function (req, res) {
    Task.create({
        task: req.body.task,
        category: req.body.category,
        date: req.body.date
    }, function (err, newContact) {
        if (err) {
            console.log('error in creating a contact!');
            return;
        }
        console.log('********', newContact);
        res.redirect('back');
    });
}
module.exports.del = function (req, res) {
    let id = req.query.id;
    // console.log(id);
    Task.findByIdAndDelete(id, function (err) {
        if (err) {
            console.log('err in delete the task from databse');
            return;
        }
        return res.redirect('back');
    });
}
