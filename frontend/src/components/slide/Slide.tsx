import React, { Component } from "react";
import Slider from "react-slick";

export default class SimpleSlider extends Component {
  render(): JSX.Element {
    const settings = {
      dots: true,
      infinite: true,
      speed: 1000,
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 5000,
      cssEase: "linear",
    };
    return (
      <div className="py-5">
        <Slider {...settings}>
          {slides.map((single) => (
            <div key={single.id}>
              <div className="container">
                {single.body}
                {single.author}
              </div>
            </div>
          ))}
        </Slider>
      </div>
    );
  }
}

const slides = [
  {
    id: 1,
    body: (
      <h4 className="text-center text-light fw-600  mb-4">
        “I’m so very grateful to the Love Vision Foundation <br /> charity – and
        for the great and important work that <br /> they do for otherpeople.”
      </h4>
    ),
    author: (
      <h4 className="text-center fw-300">
        Alena <br /> mother of two
      </h4>
    ),
  },
  {
    id: 2,
    body: (
      <h4 className="text-center text-light fw-600 mb-4">
        “I’m so very grateful to the Love Vision Foundation <br /> charity – and
        for the great and important work that <br /> they do for otherpeople.”
      </h4>
    ),
    author: (
      <h4 className="text-center fw-300">
        Alena <br /> mother of two
      </h4>
    ),
  },
  {
    id: 3,
    body: (
      <h4 className="text-center text-light fw-600  mb-4">
        “I’m so very grateful to the Love Vision Foundation <br /> charity – and
        for the great and important work that <br /> they do for otherpeople.”
      </h4>
    ),
    author: (
      <h4 className="text-center fw-300 ">
        Alena <br /> mother of two
      </h4>
    ),
  },
  {
    id: 4,
    body: (
      <h4 className="text-center text-light fw-600  mb-4">
        “I’m so very grateful to the Love Vision Foundation <br /> charity – and
        for the great and important work that <br /> they do for otherpeople.”
      </h4>
    ),
    author: (
      <h4 className="text-center fw-300">
        Alena <br /> mother of two
      </h4>
    ),
  },
];
