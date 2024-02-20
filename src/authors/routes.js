const { Router } = require("express");
const authorRouter = Router();

const {
  addAuthor,
  getAuthors,
  deleteByAuthor,
  getByAuthor,
  
} = require("./controller");

authorRouter.post("/authors/addAuthor", addAuthor);

authorRouter.get("/authors/getAuthors", getAuthors);

authorRouter.delete("/authors/deleteByAuthor", deleteByAuthor);

authorRouter.get("/authors/getBookByAuthor/:author", getByAuthor);

module.exports = authorRouter;
