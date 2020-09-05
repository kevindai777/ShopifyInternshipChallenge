import React from 'react';
import Movies from './Movies.js';
import styles from '../App.css'

class SearchBar extends React.Component {
    state = {
        movies: null,
        query: null,
      }
    
    query = (event) => {
      this.setState({
        query: event.target.value
      })
    }
    
    handleSubmit = (event) => {
      event.preventDefault();
      fetch('http://www.omdbapi.com/?apikey=5218d9ce&s=' + this.state.query) 
        .then(res => res.json())
        .then(data => 
          this.setState({
            movies: data
          })
        )
    }

    renderMovies = () => {
      console.log(this.state.movies.Search)
      return this.state.movies.Search == undefined ? 'Must input something' : this.state.movies.Search.map((array) => {
        return <Movies
                  title={array.Title}
                  image={array.Poster}
                  year={array.Year}
                  id={array.imdbID}
                  list={this.props.list}
                  addToList={this.props.addToList}
               />
      })
    }
    
    render() {
        return (
          <div className='grid-container'>
            <form onSubmit={this.handleSubmit}>
              <input onChange={(event) => this.query(event)}></input>
            </form>
            {this.state.movies ? this.renderMovies() : 'Nothing Searched Yet...'}
          </div>
        )
    }
}

export default SearchBar