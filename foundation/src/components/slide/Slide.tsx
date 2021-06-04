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
                <p className="text-center text-light fw-normal mb-4">
                  {single.body}
                </p>
                <p className="text-center fw-light">{single.author}</p>
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
    body: " “I’m so very grateful to the Love Vision Foundation charity –and for the great and important work that they do for otherpeople.”",
    author: " Alena  mother of two",
  },
  {
    id: 2,
    body: " “I’m so very grateful to the Love Vision Foundation charity –and for the great and important work that they do for otherpeople.”",
    author: " Alena  mother of two",
  },
  {
    id: 3,
    body: " “I’m so very grateful to the Love Vision Foundation charity –and for the great and important work that they do for otherpeople.”",
    author: " Alena  mother of two",
  },
  {
    id: 4,
    body: " “I’m so very grateful to the Love Vision Foundation charity –and for the great and important work that they do for otherpeople.”",
    author: " Alena  mother of two",
  },
];
