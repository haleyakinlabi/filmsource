import React, { useState, useEffect } from "react";
import axios from "axios";
import { Search } from "../components/Search";

const TMDB_API_KEY = "";

export const Home = () => {
  const [movie, setMovie] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const getRandomMovieImage = async () => {
    setIsLoading(true);

    try {
      const { data } = await axios.get(
        `https://api.themoviedb.org/3/movie/top_rated?api_key=${TMDB_API_KEY}&language=en-US`
      );

      const randomIndex = Math.floor(Math.random() * data.results.length);
      const randomMovie = data.results[randomIndex];

      if (!randomMovie.backdrop_path) {
        return getRandomMovieImage();
      }

      setMovie(randomMovie);
      setIsLoading(false);
    } catch (error) {
      setError(error.message);
      setIsLoading(false);
    }
  };
  useEffect(() => {
    getRandomMovieImage();
  }, []);

  if (isLoading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>{error}</p>;
  }

  return (
    <div id="home" className="homeScreen">
      {movie && (
        <div className="homeDiv">
          <img
            src={`https://image.tmdb.org/t/p/w500${movie.backdrop_path}`}
            alt={movie.title}
            className="homeImage"
          />
          <div className="welcome">
            <h1
              style={{
                fontFamily: "fantasy",
                color: "white",
                fontSize: "40px",
              }}
            >
              Welcome to Site Name!
            </h1>
            <p style={{ fontSize: "20px", color: "white" }}>
              Your go-to destination for quick and easy access to movie
              summaries.
            </p>
            <p style={{ fontSize: "20px", color: "white" }}>
              Discover your next favorite movie now!
            </p>
            <br></br>
            <Search />
          </div>
        </div>
      )}
    </div>
  );
};
