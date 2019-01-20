import React from 'react'
import './VideoInfo.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faThumbsUp, faThumbsDown } from '@fortawesome/free-regular-svg-icons'
import { faEye } from '@fortawesome/free-solid-svg-icons'

class VideInfo extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            like: 50000,
            unlike: 1,
            event: 10000,
        };
    }

    render() {
        return (
            <div>
                <div className="InfoDisplay">
                    <span className="event" > Wyświetlenia: {this.state.event} </span>
                    <button className="like"  > <FontAwesomeIcon icon={faThumbsUp} /> {this.state.like} </button>
                    <button className="unLike" > <FontAwesomeIcon size="50px" icon={faThumbsDown} /> {this.state.unlike} </button>
                </div>
            </div>
        )
    }
}



export default VideInfo