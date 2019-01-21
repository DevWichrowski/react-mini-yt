import React from 'react'
import './VideoInfo.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faThumbsUp, faThumbsDown } from '@fortawesome/free-regular-svg-icons'
import connect from 'react-redux/es/connect/connect';

class VideInfo extends React.Component {

    render() {
        const videosData = videosData.videosStatistics
        return (
            <div>
                <div className="InfoDisplay">
                     {videosData.map((item, index) => {
                      return (
                    <div key={index}>
                    <span className="event" > Wyświetlenia: {item.items.statistics.viewCount} </span>
                    <button className="like"  > <FontAwesomeIcon icon={faThumbsUp} /> {item.items.statistics.likeCount} </button>
                    <button className="unLike" > <FontAwesomeIcon icon={faThumbsDown} /> {item.items.statistics.dislikeCount} </button>
                    </div>
                    )
                })}
                </div>
           </div>
        )
    }
}

const mapStateToProps = (state) => ({
    videosData: state.videosData
});


export default connect(mapStateToProps,null) (VideInfo)