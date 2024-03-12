import React from "react";
import { Helmet } from "react-helmet";
import Slider from "react-slick";

function Consoles() {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
  };

  return (
    <main className="flexCol text-cream h-96 center">
      <Helmet>
        <title>GAMEBASE | Games</title>
      </Helmet>
      <div className="w-10/12">
        <Slider {...settings}>
          <div className="bg-violet-500 text-black font-bold h-64">
            <h1>CARD 1</h1>
          </div>
          <div className="bg-slate-600 text-black font-bold h-64">
            <h1>CARD 1</h1>
          </div>
          <div className="bg-orange-500 text-black font-bold h-64">
            <h1>CARD 1</h1>
          </div>
          <div className="bg-amber-500 text-black font-bold h-64">
            <h1>CARD 1</h1>
          </div>
          <div className="bg-green-500 text-black font-bold h-64">
            <h1>CARD 1</h1>
          </div>
          <div className="bg-blue-500 text-black font-bold h-64">
            <h1>CARD 1</h1>
          </div>
          <div className="bg-gray-500 text-black font-bold h-64">
            <h1>CARD 1</h1>
          </div>
          <div className="bg-red-700 text-black font-bold h-64">
            <h1>CARD 1</h1>
          </div>
        </Slider>
      </div>
    </main>
  );
}

export default Consoles;
