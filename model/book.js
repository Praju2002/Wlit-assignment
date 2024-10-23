const{ default: mongoose,mongo }= require("mongoose");

const Schema = mongoose.Schema;

const BookSchema = new Schema({
    author:{
        type:String,
        required: true,
    },
    name:{
        type: String,
        required: true,
    },
    description:{
        type:String,
        required:true,
    }

})

const Book = mongoose.model("Book",BookSchema);

module.exports = Book;