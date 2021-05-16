import React from 'react'

const IMG_API = "https://image.tmdb.org/t/p/w500"


function Movies({title, poster_path,overview,vote_average}) {
  
    const averageColor = (vote) => {
        if(vote >= 8){
            return "green";
        }else if ( vote >=6){
            return "orange";
        } else {
            return "red";
        }
    }

    return (
        <div className="movie"> 
            <img src={IMG_API + poster_path} alt={title}></img>
            <div className="movie-info">
                <h3 className="title">{title}</h3>
                <span className={`tag ${averageColor(vote_average)}`}>{vote_average}</span>
                <div className="overview">
                    <h1>Overview</h1>
                    {overview}</div>
            </div>
        </div>
    )
}

export default Movies
