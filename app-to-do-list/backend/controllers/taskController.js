const Task = require('../models/taskModel');

const getTasks = async (req, res) => {
    try {
        const tasks = await Task.find();
        res.json(tasks);
    } catch (error) {
        res.status(500).json({ message: 'Server Error' });
    }
};

const addTask = async (req, res) => {
    const { name, description, status, finishedDate, priority, deadline }= req.body;

    if(!name || !priority ) {
        return res.status(400).json({ message: 'Name and priority are required'});
    }

    try {
        const newTask = new Task({
            name,
            description,
            status,
            finishedDate,
            priority,
            deadline,
        });

        await newTask.save();
        res.status(201).json(newTask);
    } catch (error) {
        res.status(500).json({ message: 'Server Error' });
    }
};

const updateTask = async (req, res) => {
    const { id } = req.params;
    const { description, status, finishedDate, priority, deadline } = req.body;

    try {
        const task = await Task.findById(id);
        if(!task) {
            return res.status(404).json({ message: 'Task not found' });
        }

        task.description = description;
        task.status = status ? status : task.status; 
        task.finishedDate = finishedDate;
        task.priority = priority ? priority : task.priority;
        task.deadline = deadline;
        await task.save();

        res.json(task);
    } catch (error) {
        res.status(500).json({ message: 'Server Error' });
    }
};

const deleteTask = async (req, res) => {
    const { id } = req.params;
    try {
        const task = await Task.findByIdAndDelete(id);
        if(!task) {
            return res.status(404).json({ message: 'Task not found' });
        }

        res.status(204).send();
    } catch (error) {
        res.status(500).json({ message: 'Server Error' });
    }
};

module.exports = { getTasks, addTask, updateTask, deleteTask };