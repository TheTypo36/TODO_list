const mongoose = require('mongoose');

const taskSchema = new mongoose.Schema({
    task: {
        type: String,
        require: true
    },
    category: {
        type: String,
        require: true
    },
    date: {
        type: String,
        require: true
    }
})

const Task = mongoose.model('Task', taskSchema);

module.exports = Task;