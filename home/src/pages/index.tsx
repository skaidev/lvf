import React from 'react'
import Donating from '../components/icon/Donating'
import Donations from '../components/icon/Donations'
import Education from '../components/icon/Education'
import Environment from '../components/icon/Environment'
import Gvolunteer from '../components/icon/Gvolunteer'
import Health from '../components/icon/Health'
import Join from '../components/icon/Join'
import Members from '../components/icon/Members'
import Volunteer from '../components/icon/Volunteer'
import FrontLayout from '../layout/FrontLayout'

const index = (): JSX.Element => {
  return (
    <FrontLayout>
      <main>
        <base href="./images/" />
        <section className="first">
          <div className="first-cover d-flex p-0 m-0   align-items-center position-relative">
            <div className="container text-light">
              <p className="fw-bold h2 font-24 text-center mb-3">Donate, Fundraise & volunteer</p>
              <h1 className="text-center mb-3 fw-700 font-64">
                Together We Can Make <br /> A Difference
              </h1>
              <p className="p-0 m-0 mb-4 mb-lg-5 text-center fw-400 font-24">To improve Learning environment and cater for the well being of the needy</p>
              <button className="btn mb-5 mb-lg-0  fw-bold text-light btn-primary py-3 px-5 mx-auto d-block">Visit Love Homes</button>
            </div>
            <p className="h1 p-lg-0 pb-3 text-center fw-700 spacing-1 font-64 mx-auto w-100 text-light position-absolute" style={{ opacity: 0.5, bottom: '-25px' }}>
              Love Homes
            </p>
          </div>
        </section>
        <section className="second py-5">
          <div className="container align-items-md-center d-flex flex-column flex-lg-row second-cover">
            <div className="left-box">
              <p className=" h4 text-warning mb-3" id="about">
                _______ &nbsp;&nbsp;&nbsp;About Us
              </p>
              <p className="h1 fw-700 font-48 mb-3">
                Be Part of a&nbsp;
                <span className="fw-700 font-48 text-light bg-warning">Change</span>
              </p>
              <p className="text-muted fw-400 font-16 mb-3">
                How all this mistaken idea of denouncing pleasure and praising pain was <br /> born and I will give you a complete account of the system expound the <br /> actually teachings of the great explorer of the truth pursues.
              </p>
              <div className="left-btn-holder mb-4 d-flex flex-wrap">
                <div className="left me-2">
                  <button className="btn w-100 ps-0 py-2 pe-5 btn-warning">
                    <i className="fas fa-arrow-right animate__animated animate__heartBeat animate__infinite"></i>
                    &nbsp;&nbsp;Our Mission
                  </button>
                  <p className="text-dark fw-400 font-16 mt-2">
                    We work around the globe to save <br /> lives, defeat poverty and achieve <br /> social justice.
                  </p>
                </div>
                <div className="right">
                  <button className="btn w-100 ps-0 py-2 pe-5 btn-dark">
                    <i className="fas fa-arrow-right animate__animated animate__heartBeat animate__infinite"></i>
                    &nbsp;&nbsp;Our Vision
                  </button>
                  <p className="text-dark fw-400 font-16 mt-2">
                    We seek a world of hope, tolerance <br /> and social justice, where poverty has <br /> been overcome and all people live <br /> with dignity and security.
                  </p>
                </div>
              </div>
            </div>
            <div className="right-box d-flex justify-content-center justify-content-lg-end">
              <div className="img-ring">
                <img src="about_us.png" alt="" className="" />
                <div className="banner"></div>
              </div>
            </div>
          </div>
        </section>
        <section className="third py-5">
          <div className="container">
            <p className="h4 text-center fw-500 text-warning mb-3">What We Do</p>
            <p className="h1 fw-700 font-48 mb-4 text-center">
              We have selected the <br /> following&nbsp;
              <span className="text-light fw-700 font-48 bg-warning">Issues</span>
            </p>
            <div className="row row-cols-1 row-cols-md-3 g-3">
              {whatWeDo.map((e) => (
                <div className="col bg-transparent" key={e.id}>
                  <div className="card bg-transparent border-0 d-flex flex-column align-items-center">
                    <span className="mb-2">{e.icon}</span>
                    <span className="mb-3 fw-600 font-16">{e.title}</span>
                    <p className="text-center fw-400 font-16">
                      We are a non-profit organisation <br /> in USA that works towards
                      <br />
                      supporting underprivileged <br /> children.
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
        <section className="fourth py-5">
          <div className="container ">
            <p className="h4 mb-5 mt-5 text-center text-warning">What You Can Do</p>
            <div className="row what mb-lg-5 row-cols-1  row-cols-lg-3 g-3">
              {whatYouCanDo.map((e) => (
                <div className="col what-col" key={e.id} style={{ minHeight: '484px' }}>
                  <div className="card what-col-card me-auto ms-auto w-100 rounded border-0 h-100 " style={{ background: `${e.bgc}` }}>
                    <div className="rotate d-flex flex-column justify-content-center align-items-center h-100" style={{ transform: `${e.rotate}` }}>
                      <div className="n-rotate d-flex flex-column justify-content-center align-items-center text-light" style={{ transform: `${e.nrotate}` }}>
                        <span className="mb-3">{e.icon}</span>
                        <b className="text-center fw-600 mb-4 ">{e.title}</b>
                        <p className="text-center fw-400 container"> {e.body} </p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
        <section className="fifth">
          <div className="container align-items-center justify-content-end d-flex flex-column flex-md-row fifth-wrap">
            <div className="left">
              <p className="text-light paragraph fw-700 pt-lg-5 font-48">
                Is Working Towards Helping the <br /> Lesspriviledged/ Underpriviledge <br />
                people
                <span
                  className="position-absolute fw-lighter cursive text-primary font-288 mt-5"
                  style={{
                    transform: 'translateY(-30%)',
                    left: '0',
                    top: '0',
                  }}
                >
                  love homes
                </span>
              </p>
            </div>
            <div className="right">
              <div className=" right-circle rounded-circle border">
                <i className="fas fa-5x fa-play-circle text-primary"></i>
              </div>
            </div>
          </div>
        </section>
        <section className="py-5 sixth mb-4">
          <div className="container">
            <h4 className="text-warning fw-500 mb-4">Our Volunteers</h4>
            <div
              className="write-up mb-4 d-flex flex-column"
              // style={{ gap: "3rem" }}
            >
              <div className="left">
                <p className="h1 fw-700 font-48">
                  <span className="bg-warning fw-700 font-48 m-0 p-0 text-light">Volunteers</span>
                  &nbsp;Who <br />
                  Always Support Us
                </p>
              </div>
              <div className="right">
                <p className="p-0 fw-400 m-0">
                  We are a non-profit organisation in USA that works towards supporting <br /> underprivileged children reach their full potential - physical, mental as <br /> well as emotional.
                </p>
              </div>
            </div>
            <div className="row row-cols-1 row-cols-sm-2 row-cols-lg-4 g-3 mb-5">
              {sixthCard.map((card) => (
                <div className="col sixth-card" key={card.id}>
                  <div className="card border-0 sixth-card-main h-100 position-relative">
                    <img src={`Rectangle ${card.img}.png`} alt="" className="position-absolute w-100 h-100" />
                    <div className="cover h-100 d-flex align-items-end" style={{ background: `${card.bg}`, borderRadius: '10px' }}>
                      <div className="text-light polygon d-flex align-items-center border-start border-5 border-primary border-end-0 border-top-0 border-bottom-0 px-2 fw-bold" style={{ background: `${card.polygon}` }}>
                        <span> {card.name}</span>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <button className="btn ps-4 py-2 pe-4 fw-600 font-20 text-light btn-primary">Become a Volunteer</button>
          </div>
        </section>
        <section className="seventh py-5">
          <div className="container">
            <p className="h1 text-center mb-3 fw-bold">Become a Volunteer</p>
            <p className="text-center mb-5">
              We are a non-profit organisation in USA that works towards supporting <br /> underprivileged children reach their full potential - physical, mental as well as <br /> emotional.
            </p>
            <form className=" py-5 w-75 d-block mx-auto px-md-5">
              <div className="container-md form px-md-4 py-4 rounded bg-white">
                <img loading="lazy" src="one.png" alt="" />
                <img loading="lazy" src="two.png" alt="" />
                <img loading="lazy" src="three.png" alt="" />
                <img loading="lazy" src="four.png" alt="" />
                <img loading="lazy" src="five.png" alt="" />
                <img loading="lazy" src="six.png" alt="" />
                <div className="f-row py-2 d-flex mb-md-3 flex-column flex-md-row">
                  <input type="text" placeholder="Name" className="form-control py-3" />
                  <input type="text" placeholder="Gender" list="gender" className="form-control py-3" />
                  <datalist id="gender" className="bg-dark text-secondary">
                    <option value="Male" className="bg-dark text-secondary" />
                    <option value="Female" className="bg-dark text-secondary" />
                  </datalist>
                </div>
                <div className="f-row py-2 mb-4  d-flex flex-column flex-md-row">
                  <input type="text" placeholder="Email" className="form-control py-3" />
                  <input type="text" placeholder="How you  heard about us" className="form-control py-3" />
                </div>
                <textarea name="" id="" cols={30} rows={10} className="form-control mb-4" placeholder="Briefly Explain what you want to do for this organization and how..."></textarea>

                <button className="btn border-2 px-5 py-2 fw-bold border-primary text-primary">Send</button>
              </div>
            </form>
          </div>
        </section>
        <section className="eighth text-white py-5">
          <div className="container">
            <p className="h4 text-center fw-500 mb-3">Testimonials</p>
            <p className="h1 text-center fw-700 mb-4 font-48">
              What&nbsp;
              <mark className="bg-warning fw-700 font-48 mb-5 p-0 text-white">People</mark> Say About Us
            </p>
            <div className="loader mb-4 row row-cols-1 justify-content-center justify-content-md-around row-cols-sm-1 row-cols-md-3">
              <div className="col mb-2  two">
                <span>
                  <img src="Ellipse 8.png" alt="" />
                </span>
                <span></span>
              </div>
              <div className="col mb-2  two">
                <span>
                  <img src="Ellipse 10.png" alt="" />
                </span>
                <span></span>
              </div>
              <div className="col mb-2 two">
                <span>
                  <img src="Ellipse 9.png" alt="" />
                </span>
                <span></span>
              </div>
            </div>
            <p className="h4 text-center fw-600 mb-4  ">Charles Cliff</p>
            <p className="h4 text-center fw-lighter fw-400 mb-5">
              “I’m so very grateful to the Love Vision Foundation <br /> charity – and for the great and important work <br /> that they do for other people.”
            </p>
            <div className="row blur py-5 row-cols-1 justify-content-center justify-content-sm-between row-cols-sm-2 row-cols-md-3 g-3">
              {blurItem.map((item) => (
                <div className="col " key={item.id}>
                  <div className="card border-0 bg-transparent d-flex flex-row align-items-center h-100" style={{ gap: '1rem' }}>
                    {item.icon}
                    <div className="txt">
                      <p className="h2 fw-600 p-0 m-0 mb-1">{item.num}</p>
                      <p className="h6 fw-500">{item.txt}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
        <section className="ninth py-5">
          <div className="container">
            <p className="h1 mb-3 fw-700 font-48 text-center">Our Amazing Team</p>
            <p className="text-muted text-center mb-4">We cant do it alone – from crisis to sustainably. There is no limit to what you can do, from a bake sale to a 10k run your efforts will help give a local person in crisis much more than food, but hope for the future.</p>
            <div className="row mb-5 row-cols-1 row-cols-lg-3 team g-4">
              {teamCard.map((card) => (
                <div className="col team- " key={card.id}>
                  <div
                    className="card h-100 w-100 team--  border-0"
                    style={{
                      background: `url(/images/team-${card.id}.png) no-repeat`,
                    }}
                  >
                    <div className="team--layer d-flex align-items-center text-light justify-content-center p-0 m-0 ">
                      <i className="fab fa-2x fa-facebook"></i>
                      <i className="fab fa-2x fa-twitter"></i>
                      <i className="fab fa-2x fa-instagram"></i>
                    </div>
                    <div className="py-3 card team--bottom bg-warning text-light px-0">
                      {card.name}
                      {card.title}
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <button className="btn mx-auto d-block fw-bold border-primary border-3 text-primary px-4 py-2">See More</button>
          </div>
        </section>
        <section className="tenth py-5">
          <div className="container">
            <p className="fw-500 font-24 text-center text-warning mb-4">Our Successful Cases</p>
            <p className="h1 text-center fw-700 font-48 mb-4 fa-2x">Gallery</p>
            <div className="row row-cols-1 mb-4 row-cols-md-3 g-3">
              {galley.map((card) => (
                <div className="col" key={card.id}>
                  <div className="card border-0 bg-transparent">
                    <img src={`g${card.id}.png`} alt="" className="card-img" />
                    <div className="card-body bg-white p-2">
                      <p className="h5 p-0 mb-4 fw-bold">Cancer support - For less priviledged children</p>
                      <div className="row-1 text-muted mb-2 d-flex align-items-center" style={{ gap: '1rem' }}>
                        <i className="fas fa-calendar-alt"></i>
                        <span> {card.date} </span>
                      </div>
                      <div className="row-1 text-muted d-flex align-items-center" style={{ gap: '1rem' }}>
                        <i className="fas fa-map-marker-alt"></i>
                        <span> {card.location} </span>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <div className="text-center see-all d-flex">
              <hr />
              <span className=" fw-bold">See All</span>
              <hr />
            </div>
          </div>
        </section>
        <section className="eleven py-5">
          <div className="container">
            <p className="h1 text-center text-dark fw-700 font-48 mb-3">Contact Us</p>
            <p className="text-muted fw-400 text-center mb-5">
              We cant do it alone – from crisis to sustainably. There is no limit to what you can do, from a bake <br /> sale to a 10k run your help give food, but hope for the future.
            </p>
            <div className="contact-icon d-flex mb-5 flex-column flex-sm-row justify-content-around">
              <div className="mail d-flex flex-column align-items-center">
                <i className="fas fa-2x  fa-envelope px-4 py-3 text-light mb-3 bg-warning rounded"></i>
                <span className="text-center poppins fw-600 text-secondary">lovehomes5@gmail.com</span>
              </div>
              <div className="address d-flex flex-column align-items-center">
                <i className="fas fa-2x fa-map-marker-alt px-4 py-3 text-light mb-3 bg-warning rounded"></i>
                <span className="text-center fw-600 poppins text-secondary">No 6 Green Tower, Street Rumuodara</span>
              </div>
              <div className="tel d-flex flex-column align-items-center">
                <i className="fas fa-2x fa-tty px-4 py-3 text-light mb-3 bg-warning rounded"></i>
                <span className="text-center poppins fw-600 text-secondary">+234 9012624162</span>
              </div>
            </div>
            <form>
              <div className="d-flex mb-4 flex-column flex-md-row" style={{ gap: '2rem' }}>
                <input type="text" className="form-control py-3" required placeholder="Name" spellCheck={true} />
                <input type="email" multiple className="form-control py-3" placeholder="Email" required />
              </div>
              <input type="text" className=" form-control py-3 mb-4" placeholder="Subject" spellCheck />

              <textarea className="form-control form-control-lg mb-4" id="" cols={30} rows={10} spellCheck placeholder="Type your Message"></textarea>
              <button className="btn border-primary bg-primary text-white fw-bold px-4 py-2">Send</button>
            </form>
          </div>
        </section>
        <section className="map">
          <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3975.444085232075!2d7.032735314762972!3d4.86501199646747!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1069d27198c56a95%3A0x4bf2d3ebd3c1a2dd!2sJoint%20Heirs%20Assembly%20Int&#39;l%20Inc.!5e0!3m2!1sen!2sng!4v1621608305779!5m2!1sen!2sng" height="450" allowFullScreen={false} loading="lazy" style={{ width: '100%', border: 0, margin: 0, padding: 0 }}></iframe>
        </section>
      </main>
    </FrontLayout>
  )
}

export default index
const whatWeDo = [
  {
    id: 1,
    title: 'Health',
    icon: <Health />,
  },
  {
    id: 2,
    title: 'Education',
    icon: <Education />,
  },
  {
    id: 3,
    title: 'Environment',
    icon: <Environment />,
  },
]

const whatYouCanDo = [
  {
    id: 1,
    title: 'Joim our Community',
    icon: <Join />,
    body: 'We are a non-profit organisation in USA that works towards supporting underprivileged children.',
    rotate: 'rotate(-15.17deg)',
    nrotate: 'rotate(15.17deg)',
    bgc: 'linear-gradient(155.59deg, #25283A -60.81%, #9E4023 211.07%);',
  },
  {
    id: 2,
    title: 'Be a Volunteer',
    icon: <Volunteer />,
    body: 'We are a non-profit organisation in USA that works towards supporting underprivileged children.',
    rotate: 'rotate(15.17deg)',
    nrotate: 'rotate(-15.17deg)',
    bgc: '#25283A',
  },
  {
    id: 3,
    title: 'Start Donating',
    icon: <Donating />,
    body: 'We are a non-profit organisation in USA that works towards supporting underprivileged children.',
    rotate: 'rotate(-15.17deg)',
    nrotate: 'rotate(15.17deg)',
    bgc: ' #9E4023',
  },
]

const sixthCard = [
  {
    id: 1,
    name: 'Maria Anahonda',
    bg: 'rgba(158, 64, 35, 0.38)',
    img: 78,
    polygon: 'rgba(158, 64, 35, 0.38)',
  },
  {
    id: 2,
    name: 'Maria Anahonda',
    bg: 'rgba(158, 64, 35, 0.38)',
    img: 79,
    polygon: 'rgba(37, 40, 58, 0.38)',
  },
  {
    id: 3,
    name: 'Maria Anahonda',
    bg: 'rgba(158, 64, 35, 0.38)',
    img: 80,
    polygon: 'rgba(117, 0, 0, 0.38)',
  },
  {
    id: 4,
    name: 'Maria Anahonda',
    bg: 'rgba(158, 64, 35, 0.38)',
    img: 81,
    polygon: 'rgba(255, 255, 255, 0.39)',
  },
]

const blurItem = [
  { id: 1, icon: <Donations />, num: '24,000+', txt: 'Donations Complete' },
  { id: 2, icon: <Gvolunteer />, num: '24,000+', txt: 'Total Volunteers' },
  { id: 3, icon: <Members />, num: '88,706 ', txt: 'Community Members' },
]

const teamCard = [
  {
    id: 1,
    name: <p className="h3 text-center fw-700 mb-3">Lopez I. Ukpebor</p>,
    title: <p className="h5 fw-500 text-center">African Cordinator</p>,
  },
  {
    id: 2,
    name: <p className="h3 text-center  fw-700 mb-3">Save Homeless</p>,
    title: <p className="h5 fw-500  text-center">Secretary</p>,
  },
  {
    id: 3,
    name: <p className="h3 text-center fw-700 mb-3">Chika Longjohn</p>,
    title: <p className="h5 fw-500 text-center">Secretary</p>,
  },
]

const galley = [
  {
    id: 1,
    title: 'Cancer support - For less priviledged children',
    date: '5th june 2020',
    location: 'No 6 Mission Road',
  },
  {
    id: 2,
    title: 'Cancer support - For less priviledged children',
    date: '5th june 2020',
    location: 'No 6 Mission Road',
  },
  {
    id: 3,
    title: 'Cancer support - For less priviledged children',
    date: '5th june 2020',
    location: 'No 6 Mission Road',
  },
]
