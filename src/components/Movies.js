import React from 'react';
import styles from '../App.css';
import { Link } from 'react-router-dom';

class Movies extends React.Component {
    state = {
        learnMore: false
    }

    getMoreInfo = () => {
        this.setState({
            learnMore: !this.state.learnMore
        })
    }

    showMore = () => {
        return <div>
            Year: {this.props.year}
            <br></br>
            <Link to={{
                pathname: '/movies' + '/' + this.props.id,
                state: {
                    id: this.props.id
                }
            }}
            >
            <div>
                Get more info
            </div>
            </Link>
        </div>
    }

    render() {
        return (
            <div>
                <div className="card">
                    {this.props.title ? this.props.title : null}
                    <br></br>
                    <img src={this.props.image} className="card__image"></img>
                    <br></br>
                    <button onClick={(event) => this.getMoreInfo()}>Learn More</button>
                    <br></br>
                    {this.state.learnMore ? this.showMore(): null}
                    <br></br>
                    <button className="btn draw-border" onClick={(event) => this.props.addToList(this.props.title)}>Nominate</button>
                </div>
            </div>
        )
    }
}

export default Movies