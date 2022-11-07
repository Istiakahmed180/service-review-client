import React from "react";

const Slider = () => {
  return (
    <div>
      <div className="carousel w-3/4 mx-auto rounded-xl my-10">
        <div id="slide1" className="carousel-item relative w-full">
          <img
            alt=""
            src="https://images.pexels.com/photos/2507007/pexels-photo-2507007.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            className="w-full"
          />
          <div className="absolute flex justify-between transform -translate-y-1/2 space-x-3 right-5 bottom-10">
            <a href="#slide4" className="btn btn-circle">
              ❮
            </a>
            <a href="#slide2" className="btn btn-circle">
              ❯
            </a>
          </div>
        </div>
        <div id="slide2" className="carousel-item relative w-full">
          <img
            alt=""
            src="https://images.pexels.com/photos/4947396/pexels-photo-4947396.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            className="w-full"
          />
          <div className="absolute flex justify-between transform -translate-y-1/2 space-x-3 right-5 bottom-10">
            <a href="#slide1" className="btn btn-circle">
              ❮
            </a>
            <a href="#slide3" className="btn btn-circle">
              ❯
            </a>
          </div>
        </div>
        <div id="slide3" className="carousel-item relative w-full">
          <img
            alt=""
            src="https://images.pexels.com/photos/5857863/pexels-photo-5857863.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            className="w-full"
          />
          <div className="absolute flex justify-between transform -translate-y-1/2 space-x-3 right-5 bottom-10">
            <a href="#slide2" className="btn btn-circle">
              ❮
            </a>
            <a href="#slide4" className="btn btn-circle">
              ❯
            </a>
          </div>
        </div>
        <div id="slide4" className="carousel-item relative w-full">
          <img
            alt=""
            src="https://images.pexels.com/photos/531602/pexels-photo-531602.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            className="w-full"
          />
          <div className="absolute flex justify-between transform -translate-y-1/2  space-x-3 right-5 bottom-10">
            <a href="#slide3" className="btn btn-circle">
              ❮
            </a>
            <a href="#slide1" className="btn btn-circle">
              ❯
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Slider;
