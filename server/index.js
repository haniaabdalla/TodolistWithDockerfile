import DataBaseconnection from "./databaseConnection.js"
import cors from "cors";
import express from "express";
const app = express();
import Task from "./models/task.js";
DataBaseconnection();

app.use(express.json());
app.use(cors());


app.get("/Todos", async(req, res) => {
    const allTodos = await Task.find({});
    res.send(allTodos);
});

app.post("/Todos", async(req, res) => {
    const task = req.body.desc;
    const allTodos = await Task.find({});
    const newtodo = new Task({
        name: task,
    });
    await newtodo.save();
    res.send(allTodos);
});
app.put("/updateTodo/:id", async(req, res) => {
    const id = req.params.id;
    const text = req.body.text;
    await Task.findByIdAndUpdate(id, { 
        name: text, 
        })
        .exec();
});

app.delete("/deleteTodo/:id", async(req, res) => {
    const id = req.params.id;
    const allTodos = await Task.find({});
    await Task.findByIdAndDelete(id);
    res.send(allTodos);
});

const port = 3000;
app.listen(port, () => console.log("Listening on port 3000"));