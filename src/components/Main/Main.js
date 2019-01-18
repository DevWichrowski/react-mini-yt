import React from 'react';
import './Main.scss';
import connect from "react-redux/es/connect/connect";

// Tutaj beda znajdowały sie wszystko komponenty z nawigacja, App bedzie tylko wrapował Main
function Main(props) {
    return (
        <div className="Main">
            <h1>Main component</h1>
                <p>Test store: {props.videoData.username}</p>
        </div>
    );
}
const mapStateToProps = (state) => ({
    videoData: state.videosData
});

export default connect(mapStateToProps, null)(Main);