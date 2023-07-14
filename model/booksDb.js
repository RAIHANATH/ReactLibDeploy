const mongoose = require ("mongoose");

mongoose.connect("mongodb+srv://Raihanath:Password123@cluster0.o8r4ntq.mongodb.net/libmstdb?retryWrites=true&w=majority")
.then(()=>{
    console.log("Db Connected")
})
.catch(err=>console.log(err))

let Schema = mongoose.Schema;

const libSchema = new Schema({
    bookName:String,
    author:String,
    language:String,
    genre:String,
    bookNum:Number
});
var libModel = mongoose.model("book",libSchema);
module.exports = libModel;