import React from "react";
import banner from "../../assets/hotel-banner2.avif";
import TypeWriter from "react-typewriter";
const Banner = () => {
  return (
    <div className="font-serif">
      <div
        className="hero min-h-screen"
        style={{ backgroundImage: `url(${banner})` }}
      >
        <div className="hero-overlay bg-opacity-60"></div>
        <div className="hero-content text-center text-neutral-content">
          <div className="max-w-md">
            <h1 className="mb-5 text-5xl font-bold">
              <TypeWriter typing={1}>Booking Hotel</TypeWriter>
            </h1>

            <p className="mb-5">
              <TypeWriter typing={1}>
                Tending a cliff-hanging Grand Hotel In a country ravaged by
                civil war. My heart as its only bellhop. My brain as its Chinese
                cook
              </TypeWriter>
            </p>
            <button className="btn btn-primary">Get Started</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;