import React from 'react'

class Movie extends React.Component {
    render() {
        return(
            <div>
                {this.props.movie}
                <button onClick={(event) => {this.props.removeFromList(this.props.movie); this.props.addBackToList(this.props.movie)}}>Remove</button>
            </div>
        )
    }
}

export default Movie