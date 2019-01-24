import React from 'react';
import './Thumbnail.scss';
import { connect } from 'react-redux';
import { getVideos, saveVideoTitle } from '../../store/actions/searchVideoAction';

class Thumbnail extends React.Component {
    render() {
        return (
            <div className="Thumbnail">
                <h1  onClick={() => {
                    this.props.saveVideoToStore(this.props.title);
                    this.props.searchVideo(this.props.title);
                }} >
                    <img className="video-thumbnail" src={this.props.image} />
                    <p>{this.props.title}</p>
                </h1>
            </div>
        );
    }
}
const mapDispatchToProps = (dispatch) => ({
    saveVideoToStore: (payload) => dispatch(saveVideoTitle(payload)),
    searchVideo: (payload) => dispatch(getVideos(payload)),
});


export default connect(null, mapDispatchToProps)(Thumbnail) 
