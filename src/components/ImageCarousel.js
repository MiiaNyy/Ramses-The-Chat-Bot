import React from 'react';

import bunny from "../assets/paulo-almeida-Qw8yTZVguQU-unsplash.jpg"
import sailor from "../assets/benard-vendresha-Q4FP8EA9yDg-unsplash.jpg"
import multipleToys from "../assets/julker-naeem-Hst08Iwypa0-unsplash.jpg"
import pink from "../assets/freestocks-PuYPLH0BQq0-unsplash.jpg"

/*
* Photo by <a href="https://unsplash.com/@benardvendresha95?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Benard Vendresha</a> on <a href="https://unsplash.com/s/photos/teddy-bear?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a>
 Photo by <a href="https://unsplash.com/@pralmeida?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Paulo Almeida</a> on <a href="https://unsplash.com/s/photos/stuffed-animal?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a>
 Photo by <a href="https://unsplash.com/@julker_naeem?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Julker Naeem</a> on <a href="https://unsplash.com/s/photos/stuffed-animal?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a>
 Photo by <a href="https://unsplash.com/@freestocks?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">freestocks</a> on <a href="https://unsplash.com/s/photos/stuffed-animal?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a>
 
 * */

function ImageCarousel () {
    return (
        <div id="carouselExampleControls" className="carousel slide" data-bs-ride="carousel">
            <div className="carousel-inner">
                <div className="carousel-item active">
                    <img src={ pink } className="d-block w-100" alt="..."/>
                </div>
                <div className="carousel-item">
                    <img src={bunny} className="d-block w-100" alt="..."/>
                </div>
                <div className="carousel-item">
                    <img src={sailor} className="d-block w-100" alt="..."/>
                </div>
                <div className="carousel-item">
                    <img src={multipleToys} className="d-block w-100" alt="..."/>
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
