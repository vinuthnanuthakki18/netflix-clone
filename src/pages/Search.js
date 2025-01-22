import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchMoviesBySearch } from "../redux/movieSlice";
import "./Search.css";

const Search = () => {
  const [query, setQuery] = useState("");
  const dispatch = useDispatch();
  const { movies, loading } = useSelector((state) => state.movies);

  const handleSearch = (e) => {
    e.preventDefault();
    if (query) {
      dispatch(fetchMoviesBySearch(query));
    }
  };

  return (
    <div className="search">
      <header className="search-header">
        <div className="search-head">
          <img src="/images/netflix-symbol1.png" alt="" className='search-img'onClick={()=>window.location.reload()}/>
        <h1>Search Movies</h1>
        </div>
        <form onSubmit={handleSearch}>
          <input
            type="text"
            placeholder="Search for a movie..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            required
          />
          <button type="submit">Search</button>
        </form>
      </header>
      {loading ? (
        <p>Loading search results...</p>
      ) : (
        <div className="movie-container">
          {movies.length > 0 ? (
            movies.map((movie) => (
              <div key={movie.id} className="movie-card">
                <img
                  src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                  alt={movie.title}
                />
                <h3>{movie.title}</h3>
              </div>
            ))
          ) : (
            <p>No results found.</p>
          )}
        </div>
      )}
    </div>
  );
};

export default Search;
