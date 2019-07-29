import React from "react";
import "./MovieApp.css";
import MovieCard from "./MovieCard.js";
import Addmodal from "./addmodal";

const MovieList = ({
  movies = [],
  addNewMovie = () => {},
  deleteMovie = () => {}
}) => (
  <div className="movie-list">
    {movies.map(el => (
      <MovieCard
        key={el.id}
        movie={el}
        deleteMovie={() => {
          deleteMovie(el.id);
        }}
      />
    ))}

    <Addmodal
      addNewMovie={obj => {
        addNewMovie(obj);
      }}
    >
      add
    </Addmodal>
  </div>
);

export default MovieList;
