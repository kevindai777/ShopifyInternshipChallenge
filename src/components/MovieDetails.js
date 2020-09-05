import React from 'react';
import { BarChart } from 'react-chartkick';
import Chart from 'chart.js';

class MovieDetails extends React.Component {

    state = {
        title: null,
        year: null,
        rating: null,
        runTime: null,
        genre: null,
        director: null,
        writer: null,
        actors: null,
        plot: null,
        language: null,
        awards: null,
        poster: null,
        ratings: null,
        boxOffice: null,
        production: null
    }

    fetchMovie = () => {
        fetch('http://www.omdbapi.com/?i=' + this.props.location.state.id + '&apikey=5218d9ce') 
            .then(res => res.json())
            .then(data => 
                this.setState({
                    title: data.Title,
                    year: data.Year,
                    rating: data.Rated,
                    release: data.Released,
                    runTime: data.Runtime,
                    genre: data.Genre,
                    director: data.Director,
                    writer: data.Writer, 
                    actors: data.Actors,
                    plot: data.Plot,
                    language: data.Language,
                    awards: data.Awards,
                    poster: data.Poster,
                    ratings: data.Ratings,
                    boxOffice: data.BoxOffice,
                    production: data.Production
                })
            )
    }

    determineColors = () => {
        let array = [this.state.ratings[0].Value.substring(0, 3) * 10, this.state.ratings[1].Value.substring(0, 2), this.state.ratings[2].Value.substring(0, 2)]
        let colorArray = []
        for (let i=0; i<array.length; i++) {
          if (array[i] >= 80) {
            colorArray.push('green')
          } else if (array[i] < 80 && array[i] >= 60) {
            colorArray.push('orange')
          } else {
            colorArray.push('red')
          }
        }
        return [colorArray]
    }

    createBarChart = () => {
        console.log(this.state.ratings)
        return <div>
            Ratings:
            <BarChart
                data={[
                        [this.state.ratings[0].Source, this.state.ratings[0].Value.substring(0, 3) * 10],
                        [this.state.ratings[1].Source, this.state.ratings[1].Value.substring(0, 2)],
                        [this.state.ratings[2].Source, this.state.ratings[2].Value.substring(0, 2)],
                    ]}
                colors={this.determineColors()}
            />
        </div>
    }

    render() {
        return (
            <div className="background">
                <div class="movie-container">
                    <div class="cellphone-container">    
                        <div class="movie">       
                            <div class="menu"><i class="material-icons"></i></div>
                            <div class="movie-img" style={{backgroundImage: `url(${this.state.poster})`}}></div>
                            <div class="text-movie-cont">
                            <div class="mr-grid">
                                <div class="col1">
                                    <h1 className="movieTitle">{this.state.title ? this.state.title : null}</h1>
                                    <div class="movie-gen">
                                        {this.state.rating ? this.state.rating : null}/
                                        {this.state.runTime ? this.state.runTime : null}/
                                        {this.state.genre ? this.state.genre : null}
                                    </div>
                                    <br></br>
                                    <div class="movie-gen">
                                        Director: {this.state.director ? this.state.director : null}
                                        <br></br>
                                        Production: {this.state.production ? this.state.production : null}
                                    </div>
                                </div>
                            </div>
                            <div className='summary'>
                                <div class="mr-grid summary-row">
                                    <div class="col2">
                                    <h5>SUMMARY</h5>
                                    </div>
                                </div>
                                <div class="mr-grid">
                                    <div class="col1">
                                    <p class="movie-description">{this.state.plot ? this.state.plot : null}</p>
                                    </div>
                                </div>
                                <div class="mr-grid actors-row">
                                    <div class="col1">
                                        <p class="movie-actors">Actors: {this.state.actors ? this.state.actors : null}</p>
                                    </div>
                                </div>
                                <div class="mr-grid actors-row">
                                    <div class="col1">
                                        <p class="movie-actors">Writers: {this.state.writer ? this.state.writer : null}</p>
                                    </div>
                                </div>
                                <div class="mr-grid actors-row">
                                    <div class="col1">
                                        <p class="movie-actors">Awards: {this.state.awards ? this.state.awards : null}</p>
                                    </div>
                                </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {console.log(this.state)}
                {this.props.location.state.id ? this.fetchMovie() : null}
                {this.state.ratings ? this.createBarChart() : null}
            </div>
        )
    }
}

export default MovieDetails