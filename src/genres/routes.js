const { Router } = require("express");
const genreRouter = Router();

const { addGenre, getAllGenres, getByGenre, deleteAllGenres } = require("./controllers");


genreRouter.post("/genres/addGenre", addGenre);

genreRouter.get("/genres/getAllGenres", getAllGenres);

genreRouter.get("/books/getBookByGenre/:genre", getByGenre);

genreRouter.delete("/books/deleteAll", deleteAllGenres);

module.exports = genreRouter;
