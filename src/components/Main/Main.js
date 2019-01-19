import React from 'react';
import './Main.scss';
import VideoMain from "../VideoMain/VideoMain";
import Header from '../Header/Header'
import Footer from '../Footer/Footer'


// Tutaj beda znajdowały sie wszystko komponenty z nawigacja, App bedzie tylko wrapował Main
function Main(props) {
    return (
        <div className="Main">
            <Header/>         
            <VideoMain/>      
            <div style={{height: "1000px"}}> </div>
            <Footer />
        </div>
    );
}

export default Main;