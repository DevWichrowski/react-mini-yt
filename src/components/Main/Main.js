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
            <VideoMain/>   
            <VideoMain/>   
    
            <Footer />  
        </div>
        
    );
}

export default Main;