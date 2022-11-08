import React from "react";
import img1 from "../assets/geek1.jpg";
import img2 from "../assets/geek2.jpg";
const CarouselApp = () => {
  return (
    <div
      id="carouselExampleFade"
      className="carousel slide carousel-fade"
      data-bs-ride="carousel"
      data-bs-pause="off"
    >
      <div className="carousel-inner">
        <div className="carousel-item active">
          <img src={img1} className="d-block w-100" alt="imagen1" />
        </div>
        <div className="carousel-item">
          <img src={img2} className="d-block w-100" alt="imagen2" />
        </div>
        <div className="overlay">
          <div className="container h-100">
            <div className="row align-items-center h-100">
              <div className="col-md-8 offset-md-2">
                <h1 className="text-center text-white">
                  La tienda online donde encontrarás todo lo que te hace sentir
                  un verdadero Geek 🤓
                </h1>
              </div>
            </div>
          </div>
        </div>
      </div>
      <button
        className="carousel-control-prev"
        type="button"
        data-bs-target="#carouselExampleFade"
        data-bs-slide="prev"
      >
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Previous</span>
      </button>
      <button
        className="carousel-control-next"
        type="button"
        data-bs-target="#carouselExampleFade"
        data-bs-slide="next"
      >
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Next</span>
      </button>
    </div>
  );
};

export default CarouselApp;
