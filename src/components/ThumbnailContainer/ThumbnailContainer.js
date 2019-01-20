import React, {Component} from 'react';
import './ThumbnailContainer.scss';
import Thumbnail from "../Thumbnail/Thumbnail";
import connect from "react-redux/es/connect/connect";

class ThumbnailContainer extends Component {
    render() {
        const videosArr = this.props.videosData.videos.items;
        const loading = this.props.videosData.loading;

        if (loading) {
            return null;
        }

        if (!loading) {
            if (videosArr !== undefined) {
                return (
                    <div className="ThumbnailContainer">
                        {videosArr.map((video, index) => {
                            return (<Thumbnail key={index}/>);
                        })}
                    </div>
                );
            } else {
                return null;
            }
        }
    }
}

const mapStateToProps = (state) => ({
    videosData: state.videosData
});

export default connect(mapStateToProps, null)(ThumbnailContainer);