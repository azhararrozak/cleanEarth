/* eslint-disable react/no-unescaped-entities */
/* eslint-disable @next/next/no-img-element */
import Head from "next/head";

const Home = () => {
  return (
    <div className="home">
      <Head>
        <title>Home Page</title>
      </Head>

      <div
        id="carouselExampleCaptions"
        className="carousel slide"
        data-ride="carousel"
      >
        <ol className="carousel-indicators">
          <li
            data-target="#carouselExampleCaptions"
            data-slide-to="0"
            className="active"
          ></li>
          <li data-target="#carouselExampleCaptions" data-slide-to="1"></li>
          <li data-target="#carouselExampleCaptions" data-slide-to="2"></li>
        </ol>
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img src="/img/Trash11.jpg" className="d-block w-100 bright" alt="..." />
            <div className="carousel-caption d-none d-md-block">
              <h5 className="titleHome">Welcome To Cleanearth</h5>
              <button type="button" className="btnHome btn-light">
                More
              </button>
              <p>Keep the earth clean for our future generations.</p>
            </div>
          </div>

          <div className="carousel-item">
            <img src="/img/Trash22.jpg" className="d-block w-100 bright" alt="..." />
            <div className="carousel-caption d-none d-md-block">
              <h5 className="titleHome">let's process waste into useful items</h5>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </div>
          </div>

          <div className="carousel-item">
            <img src="/img/Trash33.jpg" className="d-block w-100 bright" alt="..." />
            <div className="carousel-caption d-none d-md-block">
              <h5 className="titleHome">Dispose of your trash properly</h5>
              <p>
                Praesent commodo cursus magna, vel scelerisque nisl consectetur.
              </p>
            </div>
          </div>
        </div>
        <a
          className="carousel-control-prev"
          href="#carouselExampleCaptions"
          role="button"
          data-slide="prev"
        >
          <span
            className="carousel-control-prev-icon"
            aria-hidden="true"
          ></span>
          <span className="sr-only">Previous</span>
        </a>
        <a
          className="carousel-control-next"
          href="#carouselExampleCaptions"
          role="button"
          data-slide="next"
        >
          <span
            className="carousel-control-next-icon"
            aria-hidden="true"
          ></span>
          <span className="sr-only">Next</span>
        </a>
      </div>

      <section className="section">
        <div className="container">
          <div className="section_header">
            <h2 className="title section_title">Mari Jaga Bumi Kita</h2>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
