import DataBaseconnection from "./databaseConnection.js"
import cors from "cors";
import express from "express";
const app = express();
import Task from "./models/task.js";
DataBaseconnection();

app.use(express.json());
app.use(cors());


app.get("/getTodos", async(req, res) => {
    const allTodos = await Task.find({});
    res.send(allTodos);
});

app.post("/addTodo", async(req, res) => {
    const task = req.body.desc;
    const newtodo = new Task({
        name: task,
    });
    await newtodo.save();
    res.send("done");
});



const port = 3000;
app.listen(port, () => console.log("Listening on port 3000"));