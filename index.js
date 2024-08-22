const cors = require("cors");
const express = require("express");
const { getAllMovies, getMoviesById } = 
  require("./controllers/index");
const app = express();

app.use(cors());
app.use(express.json());


//Exercise 1: Retrieve All Movies
app.get("/movies", async (req, res) => {
  const movies =  getAllMovies();
  res.json({ movies })
});

//Exercise 2: Retrieve movies by ID
app.get("/movies/details/:id", async (req, res) => {
    const movieId = parseInt(req.params.id);
    const movie = getMoviesById(movieId);
    res.json({ movie });
});


module.exports = {
  app
};





