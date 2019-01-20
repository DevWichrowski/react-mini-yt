import React from 'react';
import './Thumbnail.scss'

function Thumbnail(props) {
    return (
        <div className="Thumbnail">
            <img className="video-thumbnail" src={props.image} />
            <p>{props.title}</p>
        </div>
    );
}

export default Thumbnail;