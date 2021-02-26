import React from "react";
import { Helmet } from "react-helmet";
import online from "../img/online.svg";
import HomeServices from "../img/HomeServices.svg";
import repair from "../img/repair.svg";

function home() {
  return (
    <>
      <Helmet>
        <title>Home || Manoj Electricals</title>
        <meta name="title" content="it all About Information" />
      </Helmet>

      <div className="container-fluid mt-2">
        <div
          id="carouselExampleControls"
          class="carousel slide"
          data-bs-ride="carousel"
        >
          <div class="carousel-inner">
            <div class="carousel-item active">
              <img src={repair} class="d-block w-100" alt="" />
            </div>
            <div class="carousel-item">
              <img src={online} class="d-block w-100" alt="" />
            </div>
            <div class="carousel-item">
              <img src={HomeServices} class="d-block w-100" alt="" />
            </div>
          </div>
          <button
            class="carousel-control-prev"
            type="button"
            data-bs-target="#carouselExampleControls"
            data-bs-slide="prev"
          >
            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Previous</span>
          </button>
          <button
            class="carousel-control-next"
            type="button"
            data-bs-target="#carouselExampleControls"
            data-bs-slide="next"
          >
            <span class="carousel-control-next-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Next</span>
          </button>
        </div>
      </div>
    </>
  );
}

export default home;
