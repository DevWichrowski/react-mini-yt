import React from 'react';
import './Main.scss';
import connect from "react-redux/es/connect/connect";
import {getVideos} from "../../store/actions/searchVideoAction";
import VideoMain from "../VideoMain/VideoMain";
import Header from '../Header/Header'


// Tutaj beda znajdowały sie wszystko komponenty z nawigacja, App bedzie tylko wrapował Main
function Main(props) {
    return (
        <div className="Main">
            <Header/>
            <h1>Main component</h1>
            <VideoMain/>
        </div>
    );
}

export default Main;