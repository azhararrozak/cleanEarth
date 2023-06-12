/* eslint-disable react/no-unescaped-entities */
/* eslint-disable @next/next/no-img-element */

const Home = () => {
  return (
    <div className="home">
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
              <p>Keep the earth clean for our future generations.</p>
            </div>
          </div>

          <div className="carousel-item">
            <img src="/img/Trash22.jpg" className="d-block w-100 bright" alt="..." />
            <div className="carousel-caption d-none d-md-block">
              <h5 className="titleHome">Ayo! Olah Sampah Mu Menjadi Barang Yang Bermanfaat</h5>
            </div>
          </div>

          <div className="carousel-item">
            <img src="/img/Trash33.jpg" className="d-block w-100 bright" alt="..." />
            <div className="carousel-caption d-none d-md-block">
              <h5 className="titleHome">Buanglah Sampahmu Di Tempat Yang Benar</h5>
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

      <div class="wrapper">
        <div class="about-container">

          <div class="image-container">
            <img src="/img/logo.jpg" alt=""/>
          </div>

          <div class="text-container">
            <h1>Cleanearth</h1>
            <p>CleanEarth adalah website dapat memudahkan masyarakat untuk melakukan jual beli sampah atau barang bekas secara online yang kiranya masih layak pakai ataupun bisa di daur ulang menjadi barang yang bermanfaat, juga di dalam aplikasi website ini terdapat fitur artikel yang diharapkan berguna untuk menambah pengetahuan masyarakat tentang bahayanya sampah plastik, pengelolaan sampah yang baik, dan lain sebagainya. </p>
          </div>

        </div>
      </div>
    </div>

  );
};

export default Home;
