import React from "react";
import axios from "axios";
import Movie from "./Movie";
// import PropTypes from 'prop-types';
import "./App.css";

class App extends React.Component {

  state = {
    isLoading: true,
    monies: []
  }

  getMovies =  async () => {
    const {
      data: {
        data: {movies}
      }
    } = await axios.get(
      'https://yts.mx/api/v2/list_movies.json?sort_by=rating'
      );

    this.setState({ movies, isLoading: false})
  }

  componentDidMount() {
    this.getMovies();
  }

  render() {
    const { isLoading, movies } = this.state;
    return (
      <section className="container">
        {isLoading ? (
          <div className="loader"><span className="loader__text">Загрузка</span></div>
        ) : (
          movies.map((movie) => {
            return (
              <div className="movies">
                <Movie 
                  key={movie.id}
                  id={movie.id} 
                  title={movie.title} 
                  summary={movie.summary} 
                  poster={movie.medium_cover_image} 
                  year={movie.year} 
                  genres={movie.genres}
                />
              </div>
            );
          })
        )}
      </section>
    )
  }
}

export default App;
