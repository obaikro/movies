import React from 'react';
import { useParams, Link } from 'react-router-dom';

function MovieDetails({ movies }) {
  const { id } = useParams();

  const movie = movies.find(
    (movie) => movie.id === Number(id)
  );

  if (!movie) {
    return (
      <div className="container mt-5">
        <h2>Movie not found</h2>

        <Link to="/" className="btn btn-primary mt-3">
          Back to Home
        </Link>
      </div>
    );
  }

  return (
    <div className="container mt-5">
      <Link to="/" className="btn btn-secondary mb-4">
        ← Back to Home
      </Link>

      <div className="row">
        <div className="col-md-4">
          <img
            src={movie.posterURL}
            alt={movie.title}
            className="img-fluid rounded"
          />
        </div>

        <div className="col-md-8">
          <h1>{movie.title}</h1>

          <p className="mt-3">
            {movie.description}
          </p>

          <p>
            <strong>Rating:</strong> {movie.rating}/5
          </p>

          <h3 className="mt-4 mb-3">
            Trailer
          </h3>

          <div className="ratio ratio-16x9">
            <iframe
              src={movie.trailerURL}
              title={`${movie.title} trailer`}
              allowFullScreen
            ></iframe>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MovieDetails;