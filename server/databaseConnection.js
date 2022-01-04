import mongoose from "mongoose";
const DataBaseconnection = async() => {


    var dburl=mongoose.connect('mongodb://hania:omar@'+process.env.IP+':27017/dbtodos?directConnection=true&serverSelectionTimeoutMS=2000')
    await mongoose.connect(
        dburl, {
            useNewUrlParser: true,
            useCreateIndex: true,
            useUnifiedTopology: true,
        }
    );
    console.log("Connected to database.");

};
export default DataBaseconnection;
