import React from 'react';
import styles from '../App.css';
import { Link } from 'react-router-dom';
import { Button } from 'react-bootstrap';

class Movies extends React.Component {

    componentWillMount() {

    }

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
            let parts = this.props.title.split(' ')
            title = parts.slice(0, 3)
            title = parts.join(' ') + '...'
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

    render() {
        return (
            <div>
                <div>
                    {console.log(this.props.addBack)}
                    {this.props.addBack != null && this.props.addBack == this.props.title ? this.nominateMovie() : null}
                    <h1>{this.props.title ? this.displayTitleAndYear() : null}</h1>
                    <br></br>
                    <img className="card__image" src={this.props.image}/>
                    <br></br>
                    <Button variant="primary" onClick={(event) => this.getMoreInfo()}>More Info</Button>
                    <br></br>
                    {this.state.learnMore ? this.showMore(): null}
                    <br></br>
                    {this.state.nominated ? this.cantNominate() : this.canNominate()}
                </div>
            </div>
        )
    }
}

export default Movies