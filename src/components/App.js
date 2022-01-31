import React from 'react'

import Navigation from "./Navigation";
import Articles from "./Articles";
import ImageCarousel from "./ImageCarousel";
import Footer from "./Footer";

function App () {
    return (
        <div>
            <Navigation/>
            <main>
                <Articles/>
                <div id="gallery" className="gallery">
                    <ImageCarousel/>
                </div>
            </main>
            <Footer/>
        </div>
    )
}

export default App;
