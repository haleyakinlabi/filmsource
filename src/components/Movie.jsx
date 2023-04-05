import React from 'react';

function Movie(props) {
    return (
        <div className="bg-white shadow-md overflow-hidden sm:rounded-lg">
            <img className="w-full h-56 object-cover" src={"https://image.tmdb.org/t/p/w500" + props.backdrop_path} alt={props.path}/>
            <div className="px-4 py-2">
                <h2 className="font-semibold text-lg text-gray-800">{props.title}</h2>
                <h2 className="font-semibold text-lg text-gray-800">{props.releaseDate}</h2>
                <p className="text-gray-600 mt-2">
                    {props.overview}
                </p>
            </div>
        </div>
    );
}

export default Movie;
