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
			return (
				<div className="VideoMain">
					<div className="video-details">
						<YouTube className="main-video" videoId="6pgYcMk5_9o" opts={playerSettings} />
						<h3 className="video-title">Mini-YT</h3>
					</div>
				</div>
			);
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
										<div>
											<YouTube
												className="main-video"
												videoId={item.id.videoId}
												opts={playerSettings}
											/>
											<h3 className="video-title">{item.snippet.title}</h3>
										</div>
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
