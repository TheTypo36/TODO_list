
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
    res.render('home', {
        title: "Home",
        task_list: taskList

    });
}
module.exports.update = function (req, res) {
    taskList.push(req.body);
    res.redirect('back');
}
module.exports.del = function (req, res) {

}