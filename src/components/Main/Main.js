import React from 'react';
import './Main.scss';
import Header from '../Header/Header'
import VideoMain from "../VideoMain/VideoMain";

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