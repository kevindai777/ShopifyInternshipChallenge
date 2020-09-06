import React from 'react';
import Movies from './Movies.js';
import { Form, Button } from 'react-bootstrap';
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
      return <div>
        Results for: "{this.state.query}"
        <div className="grid">
        {this.state.movies.Search == undefined ? 'Results Empty/Must Input Something' : this.state.movies.Search.map((array) => {
        return <Movies
                  title={array.Title}
                  image={array.Poster}
                  year={array.Year}
                  id={array.imdbID}
                  list={this.props.list}
                  addToList={this.props.addToList}
                  addBack={this.props.addBack}
               />
      })}
        </div>
      </div>
    }

    showEmpty = () => {
      return <div className="empty">
        Nothing Searched Yet...
      </div>
    }
    
    render() {
        return (
          <div>
            <Form noValidate onSubmit={this.handleSubmit}>
              <Form.Label>Movie Title: </Form.Label>
                <Form.Control
                  type="text"
                  name="firstName"
                  onChange={(event) => this.query(event)}
                />
            </Form>
            <br></br>
            {this.state.movies ? this.renderMovies() : this.showEmpty()}
          </div>
        )
    }
}

export default SearchBar