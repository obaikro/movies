import React from 'react';

function Filter({
  titleFilter,
  ratingFilter,
  onTitleFilter,
  onRatingFilter
}) {
  return (
    <div className="row mb-4">
      <div className="col-md-6">
        <label className="form-label">
          Search by title
        </label>

        <input
          type="text"
          className="form-control"
          placeholder="Enter movie title..."
          value={titleFilter}
          onChange={(e) => onTitleFilter(e.target.value)}
        />
      </div>

      <div className="col-md-6">
        <label className="form-label">
          Minimum rating
        </label>

        <select
          className="form-select"
          value={ratingFilter}
          onChange={(e) =>
            onRatingFilter(Number(e.target.value))
          }
        >
          <option value="0">All ratings</option>
          <option value="1">1 star and above</option>
          <option value="2">2 stars and above</option>
          <option value="3">3 stars and above</option>
          <option value="4">4 stars and above</option>
          <option value="5">5 stars</option>
        </select>
      </div>
    </div>
  );
}

export default Filter;