import React from 'react';
import SearchBar from '../components/SearchBar.js';
import YourList from '../components/YourList.js';
import {Alert} from 'react-bootstrap';

class MainContainer extends React.Component {
    state = {
        movies: null,
        query: null,
        list: [],
        addBack: null
    }

    alert = () => {
        return <Alert variant="success">
        <Alert.Heading>Hey, nice to see you</Alert.Heading>
            <p>
                Aww yeah, you successfully read this important alert message. This example
                text is going to run a bit longer so that you can see how spacing within an
                alert works with this kind of content.
            </p>
            <hr />
            <p className="mb-0">
                Whenever you need to, be sure to use margin utilities to keep things nice
                and tidy.
            </p>
        </Alert>
    }
    
    addToList = (movie) => {
        this.setState({
          list: [...this.state.list, movie]
        })

        this.alert()
    }
    
    removeFromList = (movie) => {
        this.setState({
          list: this.state.list.filter(target => target != movie)
        })
    }

    addBackToList = (movie) => {
        this.setState({
            addBack: movie
        })
    }

    render() {
        return (
            <div>
                <YourList
                    list={this.state.list}
                    removeFromList={this.removeFromList}
                    addBackToList={this.addBackToList}
                ></YourList>
                <SearchBar
                    list={this.state.list}
                    addToList={this.addToList}
                    addBack={this.state.addBack}
                ></SearchBar>
            </div>
        )
    }
}

export default MainContainer