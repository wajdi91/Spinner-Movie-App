import React from "react";
import Rating from "./Rating.js";

import "./MovieApp.css";
const MovieCard = props => {
  const { movie = {} } = props;
  const {
    title = "",
    year = "",
    image = "https://www.mearto.com/assets/no-image-83a2b680abc7af87cfff7777d0756fadb9f9aecd5ebda5d34f8139668e0fc842.png",
    rating = 0,
    tariler = ""
  } = movie;

  return (
    <div className="card">
      <button onClick={props.deleteMovie}>X</button>
      <img className="card-img" src={image} />
      <div className="card-content">
        <h2 className="card-title">Title: {title}</h2>
        <h4 className="card-date">Year: {year}</h4>
        <h1 className="card-rating">
          <Rating count={rating} />
        </h1>
        <button className="trailer">Trailer : {tariler}</button>
      </div>
    </div>
  );
};

export default MovieCard;

// const MovieCard = props => {
//   const { movie = {} } = props;
//   const {
//     title = "",
//     year = "",
//     image = "https://www.mearto.com/assets/no-image-83a2b680abc7af87cfff7777d0756fadb9f9aecd5ebda5d34f8139668e0fc842.png",
//     rating = 0,
//     tariler = ""
//   } = movie;
//   deleteMovie = () => {
//     const { year, rating, title } = this.state;
//     const id = {
//       year,
//       rating,
//       title
//     };

//     return this.deleteMovie(id);
//   };
//   return (
//     <div className="card">
//       <button onClick={id => this.deleteMovie(id)}>X</button>
//       <img className="card-img" src={image} />
//       <div className="card-content">
//         <h2 className="card-title">Title: {title}</h2>
//         <h4 className="card-date">Year: {year}</h4>
//         <h1 className="card-rating">
//           <Rating count={rating} />
//         </h1>
//         <button className="trailer">Trailer : {tariler}</button>
//       </div>
//     </div>
//   );
// };

// export default MovieCard;

/*<div className="movie-card">
      <div className="movie-rating">
        <Rating count={rating} />
      </div>
      <div
        className="movie-image"
        style={{
          backgroundImage: `url('${image}')`
        }}
      />
      <div className="movie-description">
        {title} - {year}
      </div>
    </div>*/
