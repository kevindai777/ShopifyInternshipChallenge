import React from 'react';
import Movie from './Movie';
import styles from '../App.css';
import Banner from 'react-js-banner';

class YourList extends React.Component {
    state = {
      movies: null,
      query: null,
      bannerCss: { color: "#FFF", backgroundColor: "red", fontSize: 20 }
    }

    showList = () => {
      return this.props.list.map(movie => 
        <Movie
          movie={movie}
          removeFromList={this.props.removeFromList}
          addBackToList={this.props.addBackToList}
        />
      )
    }

    showBanner = () => {
      return <div>
        <Banner 
          title="Nominations complete! Feel free to add more if needed :)"
          css={this.state.bannerCss}
          visibleTime={5000}
        />
      </div>
    }
    
    render() {
        return (
          <div>
            <h1>List</h1>
            {this.props.list ? this.showList() : "List is empty"}
            <br></br>
            {this.props.list.length >= 5 ? this.showBanner() : null}
          </div>
        )
    }
}

export default YourList