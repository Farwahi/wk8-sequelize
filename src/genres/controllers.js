const Genre = require("./model");
const Book = require("../books/model");

//============================ADD GENRE===============================//

const addGenre = async (req, res) => {
  try {
    const genre = await Genre.create({
      genreName: req.body.genrename,
    });
    res
      .status(201)
      .json({ message: `${req.body.genrename} was added`, genre: genre });
  } catch (error) {
    res.status(501).json({ message: error.message, error: error });
  }
};


//============================GET ALL GENRES===============================//

const getAllGenres = async (req, res) => {
  try {
    const genres = await Genre.findAll();
    res.status(201).json({ message: `Genres uploaded`, genres: genres });
  } catch (error) {
    res.status(501).json({ message: error.message, error: error });
  }
};

//============================GET BY GENRE===============================//

const getByGenre = async (req, res) => {
  try {
    const genre = await Genre.findOne({
      where: {
        genreName: req.params.genre,
      },
    });
    myId = genre.dataValues.id;

    const books = await Book.findAll({
      where: {
        GenreId: myId,
      },
      include: ["Genre", "Author"],
    });
    res.status(201).json({ message: `Successfull found book`, books: books });
  } catch (error) {
    res.status(501).json({ message: error.message, error: error });
  }
};

//============================DELETE ALL GENRE===============================//

const deleteAllGenres = async (req, res) => {
  try {
    await Genre.destroy({
      truncate: true,
    });
    const genres = Genre.findAll();
    res.status(201).json({ message: "Deleted all genres", genres: genres });
  } catch (error) {
    res.status(501).json({ message: error.message, error: error });
  }
};


//============================EXPORTS===============================//
module.exports = {
  addGenre: addGenre,
  getAllGenres: getAllGenres,
  getByGenre: getByGenre,
  deleteAllGenres:deleteAllGenres
};
