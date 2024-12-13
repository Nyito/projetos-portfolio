const mongoose = require('mongoose');

const taskSchema = new mongoose.Schema(
    {
        name: { type: String, required: true },
        description: { type: String },
        status: {
            type: String,
            required: true,
            enum: ['pending', 'on going', 'finished'],
            default: 'pending'
        },
        finishedDate: { type: Date },
        priority: {
            type: String,
            required: true,
            enum: ['low', 'medium', 'high']
        },
        deadline: { type: Date },
    },
    {
        timestamps: true,
    }
);

const Task = mongoose.model('Task', taskSchema);

module.exports = Task;