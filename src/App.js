import React, { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import MovieList from './components/MovieList';
import Filter from './components/Filter';
import MovieDetails from './MovieDetails';

function App() {
  const [movies] = useState([
    {
      id: 1,
      title: 'Inception',
      description:
        'A thief who steals corporate secrets through dream-sharing technology enters the mind of a CEO to plant an idea.',
      posterURL:
        'https://image.tmdb.org/t/p/w500/oYuLEt3zVCKq57qu2F8dT7NIa6f.jpg',
      rating: 5,
      trailerURL: 'https://www.youtube.com/embed/YoHD9XEInc0'
    },
    {
      id: 2,
      title: 'The Dark Knight',
      description:
        'Batman faces the Joker, a criminal mastermind who wants to create chaos in Gotham City.',
      posterURL:
        'https://image.tmdb.org/t/p/w500/qJ2tW6WMUDux911r6m7haRef0WH.jpg',
      rating: 4,
      trailerURL: 'https://www.youtube.com/embed/EXeTwQWrcwY'
    },
    {
      id: 3,
      title: 'Interstellar',
      description:
        'A team of explorers travels through a wormhole in space in an attempt to ensure humanity’s survival.',
      posterURL:
        'https://image.tmdb.org/t/p/w500/gEU2QniE6E77NI6lCU6MxlNBvIx.jpg',
      rating: 5,
      trailerURL: 'https://www.youtube.com/embed/zSWdZVtXT7E'
    }
  ]);

  const [titleFilter, setTitleFilter] = useState('');
  const [ratingFilter, setRatingFilter] = useState(0);

  const filteredMovies = movies.filter((movie) => {
    const matchesTitle = movie.title
      .toLowerCase()
      .includes(titleFilter.toLowerCase());

    const matchesRating = movie.rating >= ratingFilter;

    return matchesTitle && matchesRating;
  });

  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            <div className="container mt-4">
              <h1 className="text-center mb-4">Movie App</h1>

              <Filter
                titleFilter={titleFilter}
                ratingFilter={ratingFilter}
                onTitleFilter={setTitleFilter}
                onRatingFilter={setRatingFilter}
              />

              <MovieList movies={filteredMovies} />
            </div>
          }
        />

        <Route
          path="/movie/:id"
          element={<MovieDetails movies={movies} />}
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;