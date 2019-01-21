import React, {Component} from 'react';
import './VideoMain.scss';
import {getVideos} from '../../store/actions/searchVideoAction';
import connect from 'react-redux/es/connect/connect';
import YouTube from 'react-youtube';
import VideoInfo from '../VideoStatistics/VideoStatistics'

class VideoMain extends Component {
    constructor() {
        super();
        this.state = {
            description: false
        };
    }

    showDescription = () => {
        this.setState({description: !this.state.description});
    };

    render() {
        const playerSettings = {
            playerVars: {
                autoplay: 0
            }
        };

        const loading = this.props.videosData.loading;

        if (loading) {
            return (
                <div className="loading-msg">
                    <h2>Please enter video title</h2>
                </div>
            );
        }
        if (!loading) {
            const videosArr = this.props.videosData.videos.items;
            if (videosArr !== undefined) {
                return (
                    <div className="VideoMain">
                        {videosArr.map((item, index) => {
                            if (index === 0) {
                                return (
                                    <div key={index}>
                                        <YouTube
                                            className="main-video"
                                            videoId={item.id.videoId}
                                            opts={playerSettings}
                                        />
                                        <div className="video-details">
                                            <h3
                                                className="video-title"
                                                onClick={() => {
                                                    this.showDescription();
                                                }}
                                            >
                                                {item.snippet.title}
                                            </h3>
                                            {this.state.description === true ? <p>{item.snippet.description}</p> : null}
                                        </div>
                                        <VideoInfo/>
                                    </div>
                                );
                            }
                        })}
                    </div>
                );
            } else {
                return (
                    <div className="loading-msg">
                        <h2>Loading...</h2>
                    </div>
                );
            }
        }
    }
}

const mapDispatchToProps = (dispatch) => ({
    getVideos: (payload) => dispatch(getVideos(payload))
});

const mapStateToProps = (state) => ({
    videosData: state.videosData
});

export default connect(mapStateToProps, mapDispatchToProps)(VideoMain);
