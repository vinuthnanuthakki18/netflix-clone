import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchMovies } from "../redux/movieSlice";
import "./Home.css";

const Home = () => {
  const dispatch = useDispatch();
  const { movies, loading, error } = useSelector((state) => state.movies);

  useEffect(() => {
    dispatch(fetchMovies());
  }, [dispatch]);

  return (
    <div className="home">
      <header className="home-header">
        <h1>Netflix Clone</h1>
      </header>
      {loading && <p>Loading movies...</p>}
      {error && <p className="error">{error}</p>}
      {!loading && !error && (
        <div className="movie-container">
          {movies.map((movie) => (
            <div key={movie.id} className="movie-card">
              <img
                src={
                  movie.poster_path
                    ? `https://image.tmdb.org/t/p/w500${movie.poster_path}`
                    : "/placeholder.jpg" // Replace with an actual placeholder image path
                }
                alt={movie.title}
              />
              <h3>{movie.title}</h3>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Home;
