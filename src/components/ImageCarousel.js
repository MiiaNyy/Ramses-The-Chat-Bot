import React from 'react';

import bunny from "../assets/paulo-almeida-Qw8yTZVguQU-unsplash.jpg"
import baby from "../assets/shirota-yuri-p0hDztR46cw-unsplash.jpg"
import multipleToys from "../assets/julker-naeem-Hst08Iwypa0-unsplash.jpg"
import pink from "../assets/freestocks-PuYPLH0BQq0-unsplash.jpg"

function ImageCarousel () {
    return (
        <div id="carouselExampleControls" className="carousel slide" data-bs-ride="carousel">
            <div className="carousel-inner">
                <div className="carousel-item active">
                    <img src={ pink } className="d-block w-100" alt="pink monkey on white background"/>
                    <p className="img-credits-carousel">
                        Photo by <a href="https://unsplash.com/@freestocks?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">freestocks</a> on <a href="https://unsplash.com/s/photos/stuffed-animal?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a>
                    </p>
                </div>
                <div className="carousel-item">
                    <img src={bunny} className="d-block w-100" alt="Pink bunny"/>
                    <p className="img-credits-carousel">
                        Photo by <a href="https://unsplash.com/@pralmeida?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Paulo Almeida</a> on <a href="https://unsplash.com/s/photos/stuffed-animal?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a>
                    </p>
                </div>
                <div className="carousel-item">
                    <img src={baby} className="d-block w-100" alt="Boy sitting on white cloth surrounded with multiple toys"/>
                    <p className="img-credits-carousel">
                        Photo by <a href="https://unsplash.com/@itshoobastank?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Shirota Yuri</a> on <a href="https://unsplash.com/?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a>
                    </p>
                </div>
                <div className="carousel-item">
                    <img src={multipleToys} className="d-block w-100" alt="Store rack eith mulpiple stuffed animals"/>
                    <p className="img-credits-carousel">
                        Photo by <a href="https://unsplash.com/@julker_naeem?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Julker Naeem</a> on <a href="https://unsplash.com/s/photos/stuffed-animal?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a>
                    </p>
                </div>
            </div>
            <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls"
                    data-bs-slide="prev">
                <span className="carousel-control-prev-icon" aria-hidden="true"/>
                <span className="visually-hidden">Previous</span>
            </button>
            <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleControls"
                    data-bs-slide="next">
                <span className="carousel-control-next-icon" aria-hidden="true"/>
                <span className="visually-hidden">Next</span>
            </button>
        </div>
    );
}

export default ImageCarousel;
