import React, { Component } from "react";
import Slider from "react-slick";

export default class Responsive extends Component {
  render(): JSX.Element {
    const settings = {
      dots: false,
      infinite: true,
      speed: 500,
      slidesToShow: 3,
      slidesToScroll: 1,
      initialSlide: 0,
      autoplay: true,
      autoplaySpeed: 2000,
      cssEase: "linear",
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1,
            infinite: true,
            dots: false,
          },
        },
        {
          breakpoint: 800,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            initialSlide: 2,
          },
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
          },
        },
      ],
    };
    return (
      <div className="container px-0  py-2 row row-cols-1 g-3">
        <Slider {...settings}>
          {cards.map((card) => (
            <div className="col py-2  bg-transparent" key={card.id}>
              <div className="card testimonial-card border-0 mx-2 h-100 bg-white pt-1 px-2">
                <div className="card-img d-flex align-items-center justify-content-center py-2">
                  <div className="testimonial-card-img-wrap p-3  rounded-circle d-inline">
                    <div className="testimonial-card-img">
                      <img src="./images/fund.png" alt="" />
                    </div>
                  </div>
                </div>
                <div className="card-body">
                  <h5 className="text-center fw-bold mb-4">{card.title}</h5>
                  <p className="text-center mb-4">{card.body}</p>
                  <h4 className="fw-bold text-center">Lucas Edward</h4>
                  <h5 className="fw-light text-center">Trander</h5>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    );
  }
}

const cards = [
  {
    id: 1,
    img: 3,
    title: "Love Reform has been a blessing",
    body: "We are a non-profit organisation in USA that works towards supporting underprivileged children.that works towards supportingthat works towards supportingthat works towards supporting",
  },
  {
    id: 2,
    img: 2,
    title: "Love Reform has been a blessing",
    body: "We are a non-profit organisation in USA that works towards supporting underprivileged children.that works towards supportingthat works towards supportingthat works towards supporting",
  },
  {
    id: 3,
    img: 1,
    title: "Love Reform has been a blessing",
    body: "We are a non-profit organisation in USA that works towards supporting underprivileged children.that works towards supportingthat works towards supportingthat works towards supporting",
  },
  {
    id: 4,
    img: 4,
    title: "Love Reform has been a blessing",
    body: "We are a non-profit organisation in USA that works towards supporting underprivileged children.that works towards supportingthat works towards supportingthat works towards supporting",
  },
  {
    id: 5,
    img: 5,
    title: "Love Reform has been a blessing",
    body: "We are a non-profit organisation in USA that works towards supporting underprivileged children.that works towards supportingthat works towards supportingthat works towards supporting",
  },
];
