import React from 'react';
import SearchBar from '../components/SearchBar.js';
import YourList from '../components/YourList.js';

class MainContainer extends React.Component {
    state = {
        movies: null,
        query: null,
        list: []
    }
    
    addToList = (movie) => {
        this.setState({
          list: [...this.state.list, movie]
        })
    }
    
    removeFromList = (movie) => {
        this.setState({
          list: this.state.list.filter(target => target != movie)
        })
    }

    render() {
        return (
            <div>
                <SearchBar
                    list={this.state.list}
                    addToList={this.addToList}
                ></SearchBar>
                <YourList
                    list={this.state.list}
                    removeFromList={this.removeFromList}
                ></YourList>
            </div>
        )
    }
}

export default MainContainer