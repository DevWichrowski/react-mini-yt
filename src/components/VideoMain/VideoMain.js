import React, {Component} from 'react';
import './VideoMain.scss';
import {getVideos} from "../../store/actions/searchVideoAction";
import connect from "react-redux/es/connect/connect";

class VideoMain extends Component {
    componentDidMount() {
        this.props.getVideos('Tibia');
    }

    render() {
        const getData = () => {
            console.log(this.props.videosData.items[0].snippet.title);
        }

        return (
            <div className={"VideoMain"}>
                VideoMain
                <button onClick={() => getData()}>Get data</button>
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
