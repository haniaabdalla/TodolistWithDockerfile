import mongoose from "mongoose";
const Schema = mongoose.Schema;

const taskSchema = new Schema({
    name: {
        type: String,
        required: true,
    },
    completed:{
        type: Boolean,
        default: false,
    }

});

const Task = mongoose.model("todos", taskSchema);

export default Task;