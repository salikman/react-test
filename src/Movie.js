import React from "react";
import PropTypes from "prop-types";

function Movie({id, title, summary, poster, year, genres }) {
    return (
        <div className="movie">
            <img src={poster} alt={title} title={title} />
            <div className="movie__col">
                <h3 className="movie__title" style={{color: "red"}}>{title}</h3>
                <h5 className="movie__year">{year}</h5>
                <p className="movie__summary">{summary.slice(0, 140)}...</p>
                <ul className="genres">
                    {genres.map((gener, i) => { return <li key={i} className="genres__genre">{gener}</li>})}
                </ul>
            </div>
        </div>
    )
}

Movie.propTypes = {
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    summary: PropTypes.string.isRequired,
    poster: PropTypes.string.isRequired,
    year: PropTypes.number.isRequired,
    genres: PropTypes.arrayOf(PropTypes.string).isRequired
}

export default Movie;