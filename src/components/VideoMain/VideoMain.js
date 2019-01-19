import React, { Component } from 'react';
import './VideoMain.scss';
import { getVideos } from '../../store/actions/searchVideoAction';
import connect from 'react-redux/es/connect/connect';
import YouTube from 'react-youtube';

class VideoMain extends Component {
	componentDidMount() {
		// this.props.getVideos('Tibiaa');
	}

	render() {
		const playerSettings = {
			playerVars: {
				autoplay: 0
			}
		};

		const loading = this.props.videosData.loading;

		if (loading) {
			return (
				<div>
					<h2>Please enter video title...</h2>
				</div>
			);
		}
		return (
			<div className="VideoMain">
				<div className="video-details">
					<YouTube className="main-video" videoId="eHBws27NXqI" opts={playerSettings} />
				</div>
			</div>
		);
	}
}

const mapDispatchToProps = (dispatch) => ({
	getVideos: (payload) => dispatch(getVideos(payload))
});

const mapStateToProps = (state) => ({
	videosData: state.videosData
});

export default connect(mapStateToProps, mapDispatchToProps)(VideoMain);
