import mongoose from "mongoose";
const DataBaseconnection = async() => {


    await mongoose.connect(
        "mongodb+srv://haniaomar:haniaomar@cluster.24wbf.mongodb.net/todos?retryWrites=true&w=majority", {
            useNewUrlParser: true,
            useCreateIndex: true,
            useUnifiedTopology: true,
        }
    );
    console.log("Connected to database.");

};
export default DataBaseconnection;