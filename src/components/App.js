import React from 'react'
import Navigation from "./Navigation";

import teddyBearImg from "../assets/jerry-wang-cCjlhaRxNsM-unsplash.jpg";
import ImageCarousel from "./ImageCarousel";
import Footer from "./Footer";

function App () {
    return (
        <div className="content">
            <Navigation/>
            <main>
                <div>
                    <img src={ teddyBearImg } alt="multiple stuffed animals on the counter"/>
                    <small>Photo by <a
                        href="https://unsplash.com/@jerry_318?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">
                        Jerry Wang</a> on <a
                        href="https://unsplash.com/s/photos/teddy-bear?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a>
                    </small>
                </div>
                <section>
                    <h2>About our company</h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium deleniti dolor fugiat!
                        Atque harum ipsam ipsum laboriosam officia perferendis similique. Ab delectus est, facere harum
                        numquam quam sit voluptatibus. Distinctio?</p>
                </section>
                
                <section>
                    <h2>To our employees</h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium deleniti dolor fugiat!
                        Atque harum ipsam ipsum laboriosam officia perferendis similique. Ab delectus est, facere harum
                        numquam quam sit voluptatibus. Distinctio?</p>
                    <a href="" className="btn">Check our inventory</a>
                </section>
                
                <ImageCarousel/>
                
                <section>
                    <h2>What we sell?</h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium deleniti dolor fugiat!
                        Atque harum ipsam ipsum laboriosam officia perferendis similique. Ab delectus est, facere harum
                        numquam quam sit voluptatibus. Distinctio?</p>
                    <a href="" className="btn">Our online store</a>
                </section>
            
            </main>
            
            <Footer/>
        
        </div>
    
    )
}

export default App;
