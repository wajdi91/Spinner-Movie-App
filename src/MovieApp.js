import React, { Component } from "react";
import SearchFilter from "./SearchFilter";
import RatingFilter from "./RatingFilter";
import MovieList from "./MovieList.js";
import { moviesToDisplay } from "./data";
import Trailer from "./Trailer";

class MovieApp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      minRatingFilter: 1,
      movies: moviesToDisplay,

      titleFilter: ""
    };
  }

  deleteMovie(id) {
    this.setState(() => ({
      movies: this.state.movies.filter(el => el.id !== id)
    }));
  }
  addNewMovie = newMovie => {
    this.setState({
      movies: this.state.movies.concat([newMovie])
    });
  };

  getMovies = () => {
    return this.state.movies.filter(
      el =>
        el.rating >= this.state.minRatingFilter &&
        el.title
          .toLowerCase()
          .includes(this.state.titleFilter.toLowerCase().trim())
    );
  };

  render() {
    return (
      <div className="movie-app">
        <header className="movie-app-header">
          <SearchFilter
            value={this.state.titleFilter}
            onChange={newTitleFilter => {
              this.setState({
                titleFilter: newTitleFilter
              });
            }}
          />

          <RatingFilter
            count={this.state.minRatingFilter}
            onChange={newRating => {
              this.setState({
                minRatingFilter: newRating
              });
            }}
          />
        </header>
        <main className="movie-app-main" />
        <MovieList
          movies={this.getMovies()}
          addNewMovie={obj => {
            this.addNewMovie(obj);
          }}
          deleteMovie={id => {
            this.deleteMovie(id);
          }}
        />

        <Trailer />
      </div>
    );
  }
}

export default MovieApp;
