import React from 'react'

const Movie = ({movie}) => {
  return (
    <>
        <div className = 'movie' >
            <div>
                <p>{movie.Year}</p>
            </div>

            <div>
                <img src={movie.Poster !== 'N/A' ? movie.Poster : 'https://via.placeholder.com/400' } alt = {movie.Title} />
            </div>

            <div>
                <p>{movie.Type}</p>
                <span>{movie.Title}</span>
            </div>
        </div>

    </>
  )
}

export default Movie