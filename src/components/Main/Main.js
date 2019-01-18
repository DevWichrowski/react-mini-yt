import React from 'react';
import './Main.scss';
import connect from "react-redux/es/connect/connect";
import {getVideos} from "../../store/actions/searchVideoAction";
import Header from '../Header/Header'

// Tutaj beda znajdowały sie wszystko komponenty z nawigacja, App bedzie tylko wrapował Main
function Main(props) {
    return (
        <div className="Main">
            <Header />
            <h1>Main component</h1>
                <button onClick={() => props.getVideos('Tibia')}>Click to test API</button>
        </div>
    );
}

const mapDispatchToProps = (dispatch) => ({
    getVideos: (payload) => dispatch(getVideos(payload)),
});

const mapStateToProps = (state) => ({
    videoData: state.videosData
});

export default connect(mapStateToProps, mapDispatchToProps)(Main);