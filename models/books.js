const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const bookSchema = new Schema({
  title: { type: String, required: true },
  author: { type: [String], required: true },
  description: String,
  image: String,
  link: { type: String, require: true }
});

const Book = mongoose.model("Book", bookSchema);

module.exports = Book;
