import React from 'react'

class Movie extends React.Component {
    render() {
        return(
            <div>
                {this.props.movie}
                Remove from list<button onClick={(event) => this.props.removeFromList(this.props.movie)}>Remove</button>
            </div>
        )
    }
}

export default Movie