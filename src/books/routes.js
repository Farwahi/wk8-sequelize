const { Router } = require("express");
const bookRouter = Router();

const {
  addBook,
  getBooks,
  deleteByTitle,
  getByTitle,
  deleteAll,
  updateByTitle,
} = require("./controllers.js");
const Book = require("./model.js");

//============================ROUTER===============================//

bookRouter.post("/books/addBook", addBook);

bookRouter.get("/books/getBooks", getBooks);

bookRouter.delete("/books/deleteByTitle", deleteByTitle);

bookRouter.delete("/books/deleteAll", deleteAll);

bookRouter.get("/books/getBookByTitle/:title", getByTitle);

bookRouter.put("/books/updateOnTitle/:title/:toUpdate/:updated", updateByTitle);

module.exports = bookRouter;
