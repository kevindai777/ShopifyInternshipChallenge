import React from 'react';
import Movie from './Movie';
import styles from '../App.css';

class YourList extends React.Component {
    state = {
      movies: null,
      query: null
    }

    showList = () => {
      return this.props.list.map(movie => 
        <Movie
          movie={movie}
          removeFromList={this.props.removeFromList}
        />
      )
    }
    
    render() {
        return (
          <div>
            <h1>List</h1>
            {this.props.list ? this.showList() : "List is empty"}
          </div>
        )
    }
}

export default YourList