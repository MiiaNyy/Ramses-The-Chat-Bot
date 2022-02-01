import React from 'react'
import Navigation from "./Navigation";
import Articles from "./Articles";
import ImageCarousel from "./ImageCarousel";
import Footer from "./Footer";
import ChatBot from "./ChatBot";

function App () {
    return (
        <div>
            <Navigation/>
            <main>
                <ChatBot/>
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
