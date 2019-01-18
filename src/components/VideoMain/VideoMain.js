import React, {Component} from 'react';
import './VideoMain.scss';
import {getVideos} from "../../store/actions/searchVideoAction";
import connect from "react-redux/es/connect/connect";
import YouTube from 'react-youtube';

class VideoMain extends Component {
    componentDidMount() {
        this.props.getVideos('Tibia');
    }

    render() {
        const playerSettings = {
            playerVars: {
                autoplay: 1
            }
        };

        return (
            <div className="VideoMain">
                VideoMain
                <div className="video-details">
                    <YouTube className="main-video" videoId="eHBws27NXqI" opts={playerSettings}/>
                    <h2></h2>
                </div>
            </div>
        );
    }
}

const mapDispatchToProps = (dispatch) => ({
    getVideos: (payload) => dispatch(getVideos(payload)),
});

const mapStateToProps = (state) => ({
    videosData: state.videosData.videos,
});

export default connect(mapStateToProps, mapDispatchToProps)(VideoMain);
