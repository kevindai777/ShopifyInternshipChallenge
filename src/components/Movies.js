import React from 'react';
import styles from '../App.css';
import { Link } from 'react-router-dom';
import { Button } from 'react-bootstrap';
import alt from './noimage.jpg'

class Movies extends React.Component {

    state = {
        learnMore: false,
        nominated: false
    }

    getMoreInfo = () => {
        this.setState({
            learnMore: !this.state.learnMore
        })
    }

    showMore = () => {
        return <div className='title'>
            Release Year: {this.props.year}
            <br></br>
            IMDB ID: {this.props.id}
            <br></br>
            <Link to={{
                pathname: '/movies' + '/' + this.props.id,
                state: {
                    id: this.props.id
                }
            }}
            >
            <div>
                Go to Movie Page
            </div>
            </Link>
        </div>
    }

    displayTitleAndYear = () => {
        let title
        if (this.props.title.length > 20) {
            title = this.props.title.substring(0, 20) + '...'
        } else {
            title = this.props.title
        }
        return <div>
            <div className="title">{title} <br></br> ({this.props.year})</div>
        </div>
    }

    canNominate = () => {
        return <button className="btn draw-border" onClick={(event) => {this.props.addToList(this.props.title); this.nominateMovie()}}>Nominate</button>
    }

    cantNominate = () => {
        return <button className="btn draw-border">Nominated</button>
    }

    nominateMovie = () => {
        this.setState({
            nominated: !this.state.nominated
        })
    }

    learnMoreOrNot = () => {
        return this.state.learnMore ? "Less Info" : "More Info"
    }

    determineImage = () => {
        if (this.props.image == 'N/A') {
            return alt
        } else {
            return this.props.image
        }
    }

    render() {
        return (
            <div className="movie-listed-container">
                <div>
                    <h1>{this.props.title ? this.displayTitleAndYear() : null}</h1>
                    <br></br>
                    <img className="card__image" src={this.determineImage()} alt={alt}/>
                    <br></br>
                    <Button variant="primary" onClick={(event) => this.getMoreInfo()}>{this.learnMoreOrNot()}</Button>
                    <br></br>
                    {this.state.learnMore ? this.showMore(): null}
                    <br></br>
                    {this.state.nominated && this.props.list.includes(this.props.title) ? this.cantNominate() : this.canNominate()}
                </div>
            </div>
        )
    }
}

export default Movies