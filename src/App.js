import React, { Component } from 'react';
import './App.css';
import Movie from './components/Movie';

class App extends Component {
  
  id = 0;

  // Render: componentWillMount() -> render() -> componentDidMount()

  // Update componentWillReceiveProps() -> shouldComponentUpdate() -> componentWillUpdate() -> render() -> componentDidUpdate()

  state= {}

  componentDidMount(){
    this._getMovies()
  }

  _renderMovies = () =>{
    const movies = this.state.movies.map(
      movie=>{
        return(
        <Movie 
          title={movie.title} 
          poster={movie.medium_cover_image} 
          key={movie.id} 
          genres={movie.genres} 
          synopsis={movie.synopsis}
          />
      )}
    ) 
    return movies
  }

  _getMovies = async () => {
    const movies = await this._callAPI()
    this.setState({
      movies
    })
  }

  _callAPI = () => {
    return fetch('https://yts.lt/api/v2/list_movies.json')
    .then(response => response.json())
    .then(json => json.data.movies)
    .catch(err => console.log(err)) 
  }

  render() {
    const {movies} = this.state
    return (
      <div className={movies ? 'App': 'App--loading'}>
        {movies ? this._renderMovies() : 'Loading'}
      </div>
    );
  }
}

export default App;
