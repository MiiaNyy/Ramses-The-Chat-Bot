import React from 'react'
import Navigation from "./Navigation";

import teddyBearImg from "../assets/jerry-wang-cCjlhaRxNsM-unsplash.jpg";
import officeWorkers from "../assets/brooke-cagle-g1Kr4Ozfoac-unsplash.jpg";

import ImageCarousel from "./ImageCarousel";
import Footer from "./Footer";

/*Photo by <a href="https://unsplash.com/@brookecagle?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Brooke Cagle</a> on <a href="https://unsplash.com/s/photos/office?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a>
 */

function App () {
    return (
        <div className="content">
            <Navigation/>
            <main>
                <div>
                    <div>
                        <img className={ `top-img` } src={ teddyBearImg }
                             alt="multiple stuffed animals on the counter"/>
                        <small>Photo by <a
                            href="https://unsplash.com/@jerry_318?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">
                            Jerry Wang</a> on <a
                            href="https://unsplash.com/s/photos/teddy-bear?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a>
                        </small>
                    </div>
                    
                    <section>
                        <h2 className="text-center">About our company</h2>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium deleniti dolor fugiat!
                            Atque harum ipsam ipsum laboriosam officia perferendis similique. Ab delectus est, facere
                            harum
                            numquam quam sit voluptatibus. Distinctio?</p>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam cum doloremque molestiae
                            nam provident quis totam. A consequatur corporis ducimus eaque ipsum nesciunt nostrum quod
                            sed totam? Aut saepe, velit?</p>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolorem doloribus earum eum ipsa
                            itaque nulla quas rerum unde vel vero? Ducimus molestiae nobis totam voluptate. Earum odit
                            repellat reprehenderit. Aspernatur!</p>
                    </section>
                </div>
                
                <div className="flex-container">
                    <div>
                        <img className={ `narrow-img` } src={ officeWorkers }
                             alt="Three people sitting in front of desk with laptops and laughing"/>
                        Photo by <a
                        href="https://unsplash.com/@brookecagle?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">
                        Brooke Cagle</a>
                        on <a
                        href="https://unsplash.com/s/photos/office?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">
                        Unsplash</a>
                    </div>
                    
                    <section className="section__accent">
                        <div>
                            <h2 className="text-center">To our employees</h2>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium deleniti dolor
                                fugiat! Atque harum ipsam ipsum laboriosam officia perferendis similique. Ab delectus
                                est,
                                facere harumnumquam quam sit voluptatibus. Distinctio?</p>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Culpa delectus dolorem ex illo
                                incidunt itaque laborum modi necessitatibus, nisi nulla perferendis porro quaerat quidem
                                rerum sapiente sequi soluta temporibus ut.</p>
                            <a href="" className="btn">Check our inventory</a>
                        </div>
                    </section>
                </div>
                
                <section>
                    <h2 className="text-center">What we sell?</h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium deleniti dolor fugiat!
                        Atque harum ipsam ipsum laboriosam officia perferendis similique. Ab delectus est, facere harum
                        numquam quam sit voluptatibus. Distinctio?</p>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad atque deleniti, deserunt dolor
                        doloribus, ducimus esse illo natus nobis nostrum omnis placeat porro possimus praesentium quae,
                        quaerat quos reprehenderit rerum!
                    </p>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias asperiores at commodi
                        consequatur in iste, iure libero magnam minima neque, provident quas quibusdam, quisquam ratione
                        suscipit! Assumenda doloremque nulla veniam!
                    </p>
                    <a href="" className="btn">Our online store</a>
                </section>
                
                
                <div className="section__containers">
                    <div className="section__containers-item">
                        <h4>Lorem ipsum dolor</h4>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                            Accusantium deleniti dolor fugiat!
                            Atque harum ipsam ipsum laboriosam officia perferendis similique. Ab delectus est, facere
                            harum
                            numquam quam sit voluptatibus. Distinctio?
                        </p>
                    </div>
                    <div className="section__containers-item">
                        <h4>Lorem ipsum dolor</h4>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad
                            atque deleniti, deserunt dolor
                            doloribus, ducimus esse illo natus nobis nostrum omnis placeat porro possimus praesentium
                            quae,
                            quaerat quos reprehenderit rerum!
                        </p>
                    </div>
                    <div className="section__containers-item">
                        <h4>Lorem ipsum dolor</h4>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias asperiores at commodi
                            consequatur in iste, iure libero magnam minima neque, provident quas quibusdam, quisquam
                            ratione
                            suscipit! Assumenda doloremque nulla veniam!
                        </p>
                    </div>
                </div>
                
                <ImageCarousel/>
            </main>
            
            <Footer/>
        
        </div>
    
    )
}

export default App;
