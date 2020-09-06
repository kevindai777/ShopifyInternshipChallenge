import React from 'react';
import MainContainer from './MainContainer.js'
import MovieDetails from '../components/MovieDetails.js'
import styles from '../App.css';
import { BrowserRouter, Router, Route, Link, Switch, HashRouter } from "react-router-dom";

class App extends React.Component {
  render() {
    return (
      <div className="container">
        <HashRouter basename="/">
          <Route exact path="/" component={MainContainer}/>
          <Route exact path="/movies/:id" render={(props) => <MovieDetails {...props} />}/>
        </HashRouter>
      </div>
    )
  }
}

export default App;