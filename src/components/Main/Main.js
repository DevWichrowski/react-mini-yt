import React from 'react';
import './Main.scss';

// Tutaj beda znajdowały sie wszystko komponenty z nawigacja, App bedzie tylko wrapował Main
function Main(props) {
    return (
        <div className="Main">
            <h1>Main component</h1>
        </div>
    );
}

export default Main;