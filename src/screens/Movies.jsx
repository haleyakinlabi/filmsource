import React, {useEffect, useState} from 'react'
import Movie from "../components/Movie";

const api_key = "";

export const Movies = () => {
    const [movies, setMovies] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [totalPages, setTotalPages] = useState(0);

    useEffect(() => {
        const fetchMovies = async () => {
            const data = await fetch(`https://api.themoviedb.org/3/movie/popular?api_key=${api_key}&language=en-US&page=${currentPage}`);
            const movies = await data.json();

            setMovies(movies.results);
            setTotalPages(movies.total_pages);
        };
        fetchMovies();
    }, [currentPage]);

    const handlePrevClick = () => {
        setCurrentPage((prevPage) => prevPage - 1);
    };

    const handleNextClick = () => {
        setCurrentPage((prevPage) => prevPage + 1);
    };

    return (
        <div className="container mx-auto" id='movies'>
            <h1 className="text-2xl font-medium mb-4 text-center p-3" id='popularMovies'>
                Top Movies
            </h1>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-4 gap-4">
                {movies.map((movie) => (
                    <Movie
                        key={movie.id}
                        title={movie.title}
                        backdrop_path={movie.backdrop_path}
                        releaseDate={movie.release_date}
                        overview={movie.overview}
                    />
                ))}
            </div>
            <div className="flex justify-between mt-4 pb-5">
                <button
                    className={`border border-gray-300 px-4 py-2 rounded-md ${
                        currentPage === 1 ? 'bg-gray-200 text-gray-500 text-black' : 'text-white'
                    }`}
                    onClick={handlePrevClick}
                    disabled={currentPage === 1}
                >
                    Prev
                </button>
                <button
                    className={`border border-gray-300 px-4 py-2 rounded-md ${
                        currentPage === totalPages ? 'bg-gray-200 text-gray-500 text-black' : 'text-white'
                    }`}
                    onClick={handleNextClick}
                    disabled={currentPage === totalPages}
                >
                    Next
                </button>
            </div>
        </div>
    );
}
