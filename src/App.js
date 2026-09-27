import React, { useState } from 'react';
import MovieList from './components/MovieList';
import Filter from './components/Filter';

function App() {
  const [movies] = useState([
    {
      id: 1,
      title: 'Inception',
      description:
        'A thief who steals corporate secrets through dream-sharing technology.',
      posterURL:
        'https://image.tmdb.org/t/p/w500/oYuLEt3zVCKq57qu2F8dT7NIa6f.jpg',
      rating: 5
    },
    {
      id: 2,
      title: 'The Dark Knight',
      description:
        'Batman faces the Joker, a criminal mastermind who wants to create chaos.',
      posterURL:
        'https://image.tmdb.org/t/p/w500/qJ2tW6WMUDux911r6m7haRef0WH.jpg',
      rating: 4
    },
    {
      id: 3,
      title: 'Interstellar',
      description:
        'A team of explorers travel through a wormhole in space.',
      posterURL:
        'https://image.tmdb.org/t/p/w500/gEU2QniE6E77NI6lCU6MxlNBvIx.jpg',
      rating: 5
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
  );
}

export default App;