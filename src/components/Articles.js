import React from 'react';

import teddyBearImg from "../assets/jerry-wang-cCjlhaRxNsM-unsplash.jpg";
import officeWorkers from "../assets/brooke-cagle-g1Kr4Ozfoac-unsplash.jpg";
import nursery from "../assets/omurden-cengiz--G2iJF_aUws-unsplash.jpg";

function Articles () {
    return (
        <>
            <div>
                <div className="position-relative">
                    <img className={ `hero-img` } src={ teddyBearImg }
                         alt="multiple stuffed animals on the counter"/>
                    <p className="img-credits">Photo by <a
                        href="https://unsplash.com/@jerry_318?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">
                        Jerry Wang</a> on <a
                        href="https://unsplash.com/s/photos/teddy-bear?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a>
                    </p>
                </div>
                
                <section className="container-txt">
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
            
            <div className="bg-dark">
                <div className=" container-fluid flex-container">
                    <div className="flex-container__section">
                        <img src={ officeWorkers }
                             alt="Three people sitting in front of desk with laptops and laughing"/>
                        <p className="img-credits img-credits__light">
                            Photo by <a
                            href="https://unsplash.com/@brookecagle?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">
                            Brooke Cagle </a>
                            on <a
                            href="https://unsplash.com/s/photos/office?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">
                            Unsplash </a>
                        </p>
                    </div>
                    
                    <section className="flex-container__txt section__accent">
                        <div className="container-txt">
                            <h2 className="text-center">Inventory</h2>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium deleniti dolor
                                fugiat! Atque harum ipsam ipsum laboriosam officia perferendis similique. Ab
                                delectus
                                est,
                                facere harumnumquam quam sit voluptatibus. Distinctio?</p>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Culpa delectus dolorem ex
                                illo
                                incidunt itaque laborum modi necessitatibus, nisi nulla perferendis porro quaerat
                                quidem
                                rerum sapiente sequi soluta temporibus ut.</p>
                            <div className="text-center mb-4">
                                <a href="https://rafaels-inventory.herokuapp.com/" className="btn">Check our inventory</a>
                            </div>
                        </div>
                    </section>
                </div>
            </div>
            
            <div id="products">
                <div className="container-fluid flex-container">
                    <section className="container-txt">
                        <h2 className="text-center">Products</h2>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium deleniti dolor
                            fugiat!
                            Atque harum ipsam ipsum laboriosam officia perferendis similique. Ab delectus est,
                            facere
                            harum
                            numquam quam sit voluptatibus. Distinctio?</p>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad atque deleniti, deserunt
                            dolor
                            doloribus, ducimus esse illo natus nobis nostrum omnis placeat porro possimus
                            praesentium
                            quae,
                            quaerat quos reprehenderit rerum!
                        </p>
                        <div className="text-center">
                            <a href="https://rafaels-inventory.herokuapp.com/" className="btn">Check our inventory</a>
                        </div>
                    </section>
                    
                    <div className="flex-container__section">
                        <img src={ nursery } alt="Three people sitting in front of desk with laptops and laughing"/>
                        <p className="img-credits">
                            Photo by <a
                            href="https://unsplash.com/@omurden?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Ömürden
                            Cengiz</a> on <a
                            href="https://unsplash.com/s/photos/nursery?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a>
                        </p>
                    </div>
                </div>
            </div>
            
            <div className="accent-container">
                <div className="accent-container__overlay">
                    <div className="accent-container__item">
                        <h4>Lorem ipsum dolor</h4>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                            Accusantium deleniti dolor fugiat!
                            Atque harum ipsam ipsum laboriosam officia perferendis similique. Ab delectus est,
                            facere
                            harum
                            numquam quam sit voluptatibus. Distinctio?
                        </p>
                    </div>
                    <div className="accent-container__item">
                        <h4>Lorem ipsum dolor</h4>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad
                            atque deleniti, deserunt dolor
                            doloribus, ducimus esse illo natus nobis nostrum omnis placeat porro possimus
                            praesentium
                            quae,
                            quaerat quos reprehenderit rerum!
                        </p>
                    </div>
                    <div className="accent-container__item">
                        <h4>Lorem ipsum dolor</h4>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias asperiores at commodi
                            consequatur in iste, iure libero magnam minima neque, provident quas quibusdam, quisquam
                            ratione
                            suscipit! Assumenda doloremque nulla veniam!
                        </p>
                    </div>
                </div>
            </div>
            
            <p className="img-credits bg-img-credits">
                Photo by <a
                href="https://unsplash.com/@benardvendresha95?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Benard
                Vendresha</a> on <a
                href="https://unsplash.com/s/photos/teddy-bear?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a>
            </p>
        </>
    );
}

export default Articles;
