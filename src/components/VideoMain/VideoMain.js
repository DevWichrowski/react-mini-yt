import React, { Component } from 'react';
import './VideoMain.scss';
import { getVideos } from '../../store/actions/searchVideoAction';
import connect from 'react-redux/es/connect/connect';
import YouTube from 'react-youtube';

class VideoMain extends Component {
	render() {
		const playerSettings = {
			playerVars: {
				autoplay: 0
			}
		};

		const loading = this.props.videosData.loading;

		if (loading) {
			return <YouTube className="default-video" videoId="6pgYcMk5_9o" opts={playerSettings} />;
		}
		if (!loading) {
			const videosArr = this.props.videosData.videos.items;
			if (videosArr !== undefined) {
				return (
					<div className="VideoMain">
						<div className="video-details">
							{console.log(this.props.videosData.videos.items)}
							{videosArr.map((item, index) => {
								if (index === 0) {
									return (
										<YouTube
											className="main-video"
											videoId={item.id.videoId}
											opts={playerSettings}
										/>
									);
								}
							})}
						</div>
					</div>
				);
			} else {
				return (
					<div>
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
