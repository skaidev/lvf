import React, { useRef, useState } from 'react'
import Gallery from '../../components/gallery/GridGallery'
import GalleryTwo from '../../components/gallery/GalleryTwo'
import GalleryThree from '../../components/gallery/GalleryThree'
import FrontLayout from '../../layout/FrontLayout'

const galleryPage = (): JSX.Element => {
  const [open, setOpen] = useState(false)
  const [index, setIndex] = useState('')

  const click = useRef<HTMLImageElement>()
  return (
    <FrontLayout>
      <main className="gallery">
        <section className="gallery-1">
          <div className="gallery-text-1 d-flex align-items-end">
            <div className="container">
              <h1 className="fw-700 font-64 text-light mt-3">Our Gallery</h1>
              <p className="fw-400 font-24 pb-3 text-light">Our Successful Cases</p>
            </div>
          </div>
        </section>
        <section className="gallery-2 py-5">
          {/* visitation 2020 box typography */}
          <div className="visitation-heading-1 pt-4 mt-5">
            <div className="container">
              <p className="fw-700 font-48">visitation for 2020</p>
            </div>
          </div>
          <div className="visitation-box-1 ">
            <div className="container ">
              <p className="pt-5 fw-500 font-18 text-center text-md-start">Visitation to Mr & Mrs Okenes Family</p>
              <Gallery Image={Image} open={open} Index={index} btnRef={click} />
              <div className="wrapper row g-2">
                {Image?.map((e, i) => (
                  <div className="box d-flex flex-column col" key={i}>
                    <img
                      className=""
                      style={{ maxHeight: '325px' }}
                      src={e}
                      alt=""
                      onClick={() => {
                        setOpen(true)
                        setIndex(String(e))
                        click?.current?.click()
                      }}
                    />
                    {/* <div className="img-overlay">
                    <div className="img-text">
                      <div>
                        <p>
                          <i className="text-light fas fa-map-marker-alt me-3"></i>
                          No 6 Mission Road
                        </p>
                      </div>
                      <div>
                        <p>
                          <i className="text-light fas fa-calendar-week me-3"></i>5th june 2020
                        </p>
                      </div>
                    </div>
                  </div> */}
                  </div>
                ))}
              </div>
            </div>
          </div>
          {/* end of 2020 typography */}
        </section>
        <section className="gallery-2a">
          <div className="container">
            <p className="pt-5 fw-500 font-18">visitation to Mr Harolds Family</p>
            <GalleryTwo imageTwo={imageTwo} open={open} Index={index} btnRef={click} />
            <div className="wrapper row g-2">
              {imageTwo?.map((e, i) => (
                <div className="box d-flex flex-column col" key={i}>
                  <img
                    className=""
                    style={{ maxHeight: '325px', maxWidth: '605px' }}
                    src={e}
                    alt=""
                    onClick={() => {
                      setOpen(true)
                      setIndex(String(e))
                      click?.current?.click()
                    }}
                  />
                  {/* <div className="img-overlay">
                    <div className="img-text">
                      <div>
                        <p>
                          <i className="text-light fas fa-map-marker-alt me-3"></i>
                          No 6 Mission Road
                        </p>
                      </div>
                      <div>
                        <p>
                          <i className="text-light fas fa-calendar-week me-3"></i>5th june 2020
                        </p>
                      </div>
                    </div>
                  </div> */}
                </div>
              ))}
            </div>
          </div>
        </section>
        <section className="gallery-2b">
          {/* 2021 visitation typography */}
          <div className="visitation-heading-2 pt-4 mt-5">
            <div className="container">
              <p className="fw-700 font-48">visitation for 2021</p>
            </div>
          </div>
          <div className="visitation-box-2">
            <div className="container">
              <p className="pt-5 fw-500 font-18">Visitation to Mr & Mrs Okenes Family</p>
              <GalleryThree imageThree={imageThree} open={open} Index={index} btnRef={click} />
              <div className="wrapper row g-2">
                {imageThree?.map((e, i) => (
                  <div className="box d-flex flex-column col" key={i}>
                    <img
                      className=""
                      style={{ maxHeight: '325px' }}
                      src={e}
                      alt=""
                      onClick={() => {
                        setOpen(true)
                        setIndex(String(e))
                        click?.current?.click()
                      }}
                    />
                    {/* <div className="img-overlay">
                    <div className="img-text">
                      <div>
                        <p>
                          <i className="text-light fas fa-map-marker-alt me-3"></i>
                          No 6 Mission Road
                        </p>
                      </div>
                      <div>
                        <p>
                          <i className="text-light fas fa-calendar-week me-3"></i>5th june 2020
                        </p>
                      </div>
                    </div>
                  </div> */}
                  </div>
                ))}
              </div>
            </div>
          </div>
          {/* end of 2021 typography */}
        </section>
        <section className="gallery-3">
          <div className="content pb-3">
            <div className="container text-light d-flex flex-lg-row flex-column justify-content-center align-items-center">
              <div className="text me-lg-5">
                <h2 className="fw-700 font-48 text-center">Join Our Volunteer Team.</h2>
              </div>
              <div className="button text-center">
                <button className="btn btn-primary text-light fw-600 font-20">Join Team</button>
              </div>
            </div>
          </div>
        </section>
      </main>
    </FrontLayout>
  )
}

export default galleryPage

const Image = ['/images/visitation_1.png', '/images/visitation_2.png', '/images/visitation_3.png', '/images/visitation_4.png', '/images/visitation_5.png']
const imageTwo = ['/images/visitation_1.png', '/images/visitation_1.png']
const imageThree = ['/images/visitationb_1.png', '/images/visitationb_2.png']
