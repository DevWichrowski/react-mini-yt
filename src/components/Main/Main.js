import React from 'react';
import './Main.scss';
import VideoMain from '../VideoMain/VideoMain';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import ThumbnailContainer from "../ThumbnailContainer/ThumbnailContainer";

// Tutaj beda znajdowały sie wszystko komponenty z nawigacja, App bedzie tylko wrapował Main
function Main(props) {
	return (
		<div className="main-container">
			<Header />
			<VideoMain />
			<ThumbnailContainer/>
			<Footer />
		</div>
	);
}

export default Main;
