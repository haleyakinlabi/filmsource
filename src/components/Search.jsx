import React from 'react';
import Swal from 'sweetalert2';

const TMDB_API_KEY = process.env.REACT_APP_TMDB_API_KEY;

export const Search = () => {
  const handleSearch = (event) => {
    event.preventDefault();
    const searchQuery = event.target.searchInput.value;
    fetch(`https://api.themoviedb.org/3/search/movie?api_key=${TMDB_API_KEY}&query=${searchQuery}`)
      .then(response => response.json())
      .then(data => {
        const results = data.results;
        if (results.length === 0) {
          Swal.fire({
            title: 'No results found',
            icon: 'warning',
          });
        } else {
          const movie = results[0];
          Swal.fire({
            title: movie.title,
            html: `
              <img src="https://image.tmdb.org/t/p/w500/${movie.poster_path}" alt="${movie.title} poster">
              <p>${movie.overview}</p>
            `,
            icon: 'success',
          });
        }
      })
      .catch(error => {
        Swal.fire({
          title: 'Oops!',
          text: 'Something went wrong. Please try again later.',
          icon: 'error',
        });
        console.error(error);
      });
  };

  return (
    <form onSubmit={handleSearch} className='searchBar'>
      <label>
        <input type="text" name="searchInput" placeholder='Search By Title' className='searchInput' />
      </label>
      <button type="submit" className='searchBtn'>Search</button>
      <img src="../assets/filmSourceLogo.PNG" alt="site logo" className="logo"/>
    </form>
  );
};
