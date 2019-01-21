import React from 'react'
import './VideoStatistics.scss';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faThumbsUp, faThumbsDown} from '@fortawesome/free-regular-svg-icons'
import connect from 'react-redux/es/connect/connect';

class VideoStatistics extends React.Component {

    render() {
        console.log(this.props.videosStatistic, 'no a jak');
        if (this.props.videosStatistic == null) {
            return null;
        }
        return (
            <div className="InfoDisplay">
                <div>
                        <span
                            className="event"> Wyświetlenia: {this.props.videosStatistic.items[0].statistics.viewCount} </span>
                    <button className="like"><FontAwesomeIcon
                        icon={faThumbsUp}/> {this.props.videosStatistic.items[0].statistics.likeCount}</button>
                    <button className="unLike"><FontAwesomeIcon
                        icon={faThumbsDown}/> {this.props.videosStatistic.items[0].statistics.dislikeCount}</button>
                </div>
            </div>
        );
    }
}

const mapStateToProps = (state) => ({
    videosStatistic: state.videosData.videosStatistics
});


export default connect(mapStateToProps, null)(VideoStatistics)