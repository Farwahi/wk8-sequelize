const { Router } = require("express");
const bookRouter = Router();

const Book = require("./model");

const { addBook } = require("./controllers");

bookRouter.post("/books/addBook", addBook);

// get all books

bookRouter.get("/books/getAllBooks", async (req, res) => {
  const books = await Book.findAll({ include: "Genre" });
  res.send(books);
});

// update book author

// delete a single book by title

module.exports = bookRouter;
