import React from 'react';

class MovieDetails extends React.Component {

    state = {
        rating: null,
        runTIme: null,
        genre: null
    }

    fetchMovie = () => {
        fetch('http://www.omdbapi.com/?i=' + this.props.location.state.id + '&apikey=5218d9ce') 
            .then(res => res.json())
            .then(data => 
                this.setState({
                    rating: data.Rated,
                    runTime: data.Runtime,
                    genre: data.Genre
                })
            )
    }

    render() {
        return (
            <div>
                {console.log(this.state)}
                {this.props.location.state.id ? this.fetchMovie() : null}
                {this.state.rating ? this.state.rating : null}
                <br></br>
                {this.state.runTime ? this.state.runTime : null}
                <br></br>
                {this.state.genre ? this.state.genre : null}
            </div>
        )
    }
}

export default MovieDetails