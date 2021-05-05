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
module.exports.home = function (req, res) {
    res.render('home', {
        title: "Home",
        task_list: taskList

    });
}