/* eslint-disable @next/next/link-passhref */
import Link from "next/link";
import React, { useEffect, useState } from "react";

const Slider = (): JSX.Element => {
  const [slidestate, setSlideState] = useState(0);
  const slides = [1, 2, 3, 4];

  useEffect(() => {
    let i = 0;
    setInterval(() => {
      setSlideState(i++);
      if (i > slides.length - 1) i = 0;
    }, 6000);
  }, [slides.length]);
  const prevSlide = () => {
    if (slidestate < 1) {
      setSlideState(slides.length - 1);
    } else {
      setSlideState(slidestate - 1);
    }
  };
  const nextSlide = () => {
    if (slidestate > slides.length - 2) {
      setSlideState(0);
    } else {
      setSlideState(slidestate + 1);
    }
  };
  return (
    <div className="main-slide">
      <figure
        className="figures"
        style={{
          background: `url(./images/foundation_images/slide${slides[slidestate]}.png)`,
          //height: "764px",
        }}
      >
        <div className={`g-${slides[slidestate]} fig-cover `}>
          <figcaption className="fig-middle text-light py-3">
            <div className="container d-flex align-items-center gap-4">
              <button
                className="btn border-primary text-primary"
                onClick={prevSlide}
              >
                <i className="fas fa-chevron-left"></i>
              </button>
              {slideData?.map((single) => (
                <div key={single.id}>
                  <h2 className="fw-bolder text-center mb-3">
                    {single.heading[slidestate]}
                  </h2>
                  <p className="text-center mb-4">
                    {single.paragraph[slidestate]}
                  </p>
                  <Link href={single.link[slidestate]}>
                    <button className="btn border-primary bg-primary mx-auto d-block px-4 py-2 text-white">
                      Join Us
                    </button>
                  </Link>
                </div>
              ))}
              <button
                className="btn border-primary text-primary"
                onClick={nextSlide}
              >
                <i className="fas fa-chevron-right"></i>
              </button>
            </div>
          </figcaption>
        </div>
      </figure>
    </div>
  );
};

export default Slider;

const slideData = [
  {
    id: 1,
    heading: [
      "Contributing To Build a Peaceful World",
      "Love Reform",
      "Love Revival",
      "Love Homes",
    ],
    paragraph: [
      "See how we view God, Jesus, the Bible, man, and many significant aspects of our faith. Firmly rooted in Scripture, the beliefs of Joint Heirs Assembly guide our decisions as a church.",
      "See how we view God, Jesus, the Bible, man, and many significant aspects of our faith. Firmly rooted in Scripture, the beliefs of Joint Heirs Assembly any significant aspects of our faith. Firmly rooted in Scripture decisions as a church.See how Assembly guide our decisions as a church.guide ourod, Jwe view G, thebeliefs of Joint Heirs esus, the Bible, man, and m",
      "See how we view God, Jesus, the Bible, man, and many significant aspects of our faith. Firmly rooted in Scripture, the beliefs of Joint Heirs Assembly any significant aspects of our faith. Firmly rooted in Scripture decisions as a church.See how Assembly guide our decisions as a church.guide ourod, Jwe view G, thebeliefs of Joint Heirs esus, the Bible, man, and m",
      "See how we view God, Jesus, the Bible, man, and many significant aspects of our faith. Firmly rooted in Scripture, the beliefs of Joint Heirs Assembly any significant aspects of our faith. Firmly rooted in Scripture decisions as a church.See how Assembly guide our decisions as a church.guide ourod, Jwe view G, thebeliefs of Joint Heirs esus, the Bible, man, and m",
    ],
    btn: [],
    link: ["/", "/reform", "/loverevival", "/lovehome"],
  },
];
