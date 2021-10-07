import React, { useRef, useState } from "react";
import FrontLayout from "../../Layout/FrontLayout";
import MyGallery from "../../components/gallery/Gallery";
import GalleryTwo from "../../components/gallery/GalleryTwo";

const galleryPage = () => {
  const [open, setOpen] = useState(false);
  const [index, setIndex] = useState("");

  const click = useRef<HTMLImageElement>();
  return (
    <FrontLayout>
      <main className="gallery">
        <section className="gallery-1">
          <div className="gallery-text d-flex justify-content-center align-items-center">
            <h1 className="fw-600 font-48 text-light mt-3">Our Gallery</h1>
          </div>
        </section>
        <section className="gallery-2 py-5">
          <div className="container">
            <div className="one mb-5">
              <p className="h1 fw-700 font-48">Love Revival Concert 2019</p>
              <MyGallery
                Image={Image}
                open={open}
                Index={index}
                btnRef={click}
              />
              <div className="wrapper row gy-5 gx-3">
                {Image?.map((e, i) => (
                  <div className="box d-flex flex-column col" key={i}>
                    <img
                      src={e}
                      alt=""
                      className=""
                      onClick={() => {
                        setOpen(true);
                        setIndex(String(e));
                        click?.current?.click();
                      }}
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
        <section className="gallery-2b py-3">
          <div className="container">
            <div className="two">
              <p className="h1 fw-700 font-48">Love Revival Concert 2020</p>
              <GalleryTwo
                ImageTwo={ImageTwo}
                open={open}
                Index={index}
                btnRef={click}
              />
              <div className="wrapper row gy-4">
                {ImageTwo?.map((card, i) => (
                  <div className="box d-flex flex-column col" key={i}>
                    <img
                      src={card}
                      alt=""
                      style={{ maxHeight: "325px" }}
                      onClick={() => {
                        setOpen(true);
                        setIndex(String(card));
                        click?.current?.click();
                      }}
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
        <section className="gallery-3">
          <div className="content">
            <div className="container text-light d-lg-flex justify-content-center align-items-center">
              <div className="text me-lg-5 ">
                <h2 className="fw-700 font-48 text-center ">
                  Volunteer to Help us help others
                </h2>
              </div>
              <div className="button text-center">
                <button className="btn btn-primary text-light fw-600 font-20 mb-2">
                  Join Team
                </button>
              </div>
            </div>
          </div>
        </section>
      </main>
    </FrontLayout>
  );
};

export default galleryPage;

const Image = [
  "/images/revivalA_1.png",
  "/images/revivalA_2.png",
  "/images/revivalA_3.png",
  "/images/revivalA_4.png",
  "/images/revivalA_5.png",
  "/images/revivalA_6.png",
  "/images/revivalA_7.png",
];

const ImageTwo = [
  "/images/revivalB_1.png",
  "/images/revivalB_2.png",
  "/images/revivalB_3.png",
  "/images/revivalB_4.png",
  "/images/revivalB_5.png",
  "/images/revivalB_6.png",
  "/images/revivalB_7.png",
  "/images/revivalB_8.png",
  "/images/revivalB_9.png",
];
