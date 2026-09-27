import React from 'react';
import { Link } from 'react-router-dom';

function MovieCard({ movie }) {
  return (
    <div className="col-md-4 mb-4">
      <Link
        to={`/movie/${movie.id}`}
        style={{
          textDecoration: 'none',
          color: 'inherit'
        }}
      >
        <div className="card h-100">
          <img
            src={movie.posterURL}
            className="card-img-top"
            alt={movie.title}
            style={{
              height: '450px',
              objectFit: 'cover'
            }}
          />

          <div className="card-body">
            <h5 className="card-title">
              {movie.title}
            </h5>

            <p className="card-text">
              {movie.description}
            </p>

            <p>
              <strong>Rating:</strong> {movie.rating}/5
            </p>
          </div>
        </div>
      </Link>
    </div>
  );
}

export default MovieCard;