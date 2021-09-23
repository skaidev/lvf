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
  }, []);
  return (
    <div className="main-slide">
      <figure
        className="figures"
        style={{
          background: `url(./images/slide${slides[slidestate]}.png)`,
        }}
      >
        <div className={`g-${slides[slidestate]} fig-cover `}>
          <figcaption className="fig-middle text-light py-3">
            <div className="container">
              {slideData?.map((single) => (
                <div key={single.id}>
                  <h2 className="fw-bolder text-center mb-3">
                    {single.heading[slidestate]}
                  </h2>
                  <p className="text-center mb-4">
                    {single.paragraph[slidestate]}
                  </p>
                  <button className="btn border-primary bg-primary mx-auto d-block px-4 py-2 text-white">
                    Join Us
                  </button>
                </div>
              ))}
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
  },
];
