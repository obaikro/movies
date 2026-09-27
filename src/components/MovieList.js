import React from 'react';
import MovieCard from './MovieCard';

function MovieList({ movies }) {
  return (
    <div className="row">
      {movies.length === 0 ? (
        <div className="col-12 text-center">
          <h3>No movies found</h3>
        </div>
      ) : (
        movies.map((movie) => (
          <MovieCard
            key={movie.id}
            movie={movie}
          />
        ))
      )}
    </div>
  );
}

export default MovieList;