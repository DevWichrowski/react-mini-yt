import React, {Component} from 'react';
import './ThumbnailContainer.scss';
import Thumbnail from "../Thumbnail/Thumbnail";

class ThumbnailContainer extends Component {
    render() {
        return (
            <div className="ThumbnailContainer">
                <Thumbnail />
            </div>
        );
    }
}

export default ThumbnailContainer;