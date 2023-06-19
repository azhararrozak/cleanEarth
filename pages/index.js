/* eslint-disable @next/next/no-html-link-for-pages */
/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable react/no-unescaped-entities */
/* eslint-disable @next/next/no-img-element */

import Map from "@/components/Map";
import Head from "next/head";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCheck,
  faLocationDot,
  faCartShopping,
} from "@fortawesome/free-solid-svg-icons";

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
            <img
              src="/img/Trash11.jpg"
              className="d-block w-100 bright"
              alt="..."
            />
            <div className="carousel-caption d-none d-md-block">
              <h5 className="titleHome">Welcome To Cleanearth</h5>
              <p>Keep the earth clean for our future generations.</p>
            </div>
          </div>

          <div className="carousel-item">
            <img
              src="/img/Trash22.jpg"
              className="d-block w-100 bright"
              alt="..."
            />
            <div className="carousel-caption d-none d-md-block">
              <h5 className="titleHome">
                Ayo! Olah Sampah Mu Menjadi Barang Yang Bermanfaat
              </h5>
            </div>
          </div>

          <div className="carousel-item">
            <img
              src="/img/Trash33.jpg"
              className="d-block w-100 bright"
              alt="..."
            />
            <div className="carousel-caption d-none d-md-block">
              <h5 className="titleHome">
                Buanglah Sampahmu Di Tempat Yang Benar
              </h5>
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
      {/* Tengah */}
      <br /> <br />
      <div className="container bg-light pt-5 mb-3 rounded">
        <div className="row text-center py-4">
          <div className="col-lg-4 col-md-6">
            <div className="icon-box ">
              <a href="/about">
                <FontAwesomeIcon icon={faCheck} className="custom-icon fa-4x" />
              </a>
              <br /> <br />
              <h4 className="title">Terpercaya</h4>
              <p className="description">
                CleanEarth adalah website yang telah dipercaya masyarakat
                indonesia telah ada ribuan client dari berbagai daerah
              </p>
            </div>
          </div>
          <div className="col-lg-4 col-md-6">
            <div className="icon-box">
              <a href="/tracker">
                <FontAwesomeIcon
                  icon={faLocationDot}
                  className="custom-icon fa-4x"
                />
              </a>
              <br />
              <br />
              <h4 className="title">Lokasi</h4>
              <p className="description">
                CleanEarth memudahkan anda untuk mengetahui lokasi bank sampah
                terdekat dari lokasi anda
              </p>
            </div>
          </div>
          <div className="col-lg-4 col-md-6">
            <div className="icon-box">
              <a href="/product">
                <FontAwesomeIcon
                  icon={faCartShopping}
                  className="custom-icon fa-4x"
                />
              </a>
              <br />
              <br />
              <h4 className="title">Jual-Beli</h4>
              <p className="description">
                CleanEarth adalah website dapat memudahkan masyarakat untuk
                melakukan jual beli sampah atau barang bekas secara online
              </p>
            </div>
          </div>
        </div>
      </div>
      <section className="steps">
        <div className="container py-4">
          <div className="text-center my-4">
            <h3>Bagaimana Caranya?</h3>
          </div>

          <div className="row content">
            <div className="col-md-5">
              <img src="/img/pilih.jpg" className="img-fluid" alt="" />
            </div>
            <div className="col-md-7 pt-4">
              <h3>Pilih Sampah</h3>
              <p className="text-justify">
                Pilih sampah dengan memisahkan sampah atau barang bekas menjadi
                dua kategori yaitu masih layak pakai dan tidak layak pakai.
              </p>
            </div>
          </div>

          <div className="row content">
            <div className="col-md-5 order-1 order-md-2">
              <img src="/img/kirim.jpg" className="img-fluid" alt="" />
            </div>
            <div className="col-md-7 pt-5 order-2 order-md-1">
              <h3>Kirim Sampah</h3>
              <p className="text-justify">
                Kirim sampah ke bank sampah terdekat sesuai dengan lokasi anda
                yang terdapat pada peta yang sudah di sediakan.
              </p>
            </div>
          </div>

          <div className="row content">
            <div className="col-md-5">
              <img src="/img/jual.jpg" className="img-fluid" alt="" />
            </div>
            <div className="col-md-7 pt-4">
              <h3>Jual Barang Tak Terpakai</h3>
              <p className="text-justify">
                Apabila masih layak pakai kamu dapat menjual barang tersebut
                sesuai dengan harga yang sudah disepakati.
              </p>
            </div>
          </div>

          <div className="row content">
            <div className="col-md-5 order-1 order-md-2">
              <img src="/img/uang.jpg" className="img-fluid" alt="" />
            </div>
            <div className="col-md-7 pt-5 order-2 order-md-1">
              <h3>Hasilkan Uang</h3>
              <p className="text-justify">
                Hasilkan uang dari barang yang sudah tak terpakai, Hanya dengan
                mengikuti cara-cara yang di atas.
              </p>
            </div>
          </div>
        </div>
      </section>
      <section id="cta" className="cta">
        <div className="container">
          <div className="row">
            <div className="col-lg-9 text-center text-lg-start">
              <h3>Daftar Sekarang</h3>
              <p>
                {" "}
                Jadilah bagian dari kami untuk berkontribusi dan dapatkan
                manfaatnya
              </p>
            </div>
            <div className="col-lg-3 cta-btn-container text-center">
              <a
                className="cta-btn align-middle text-decoration-none"
                href="/register"
              >
                Register
              </a>
            </div>
          </div>
        </div>
      </section>
      <section className="maps">
        <div className="text-center my-4">
          <h3>Bergabunglah Bersama Kami</h3>
          <p>Merubah dunia menjadi lebih baik</p>
        </div>

        <div className="container">
          <div className="row ">
            <div className="px-4 pb-4 col-lg-6">
              <Map />
            </div>
            <div className="px-4 pb-4 col-lg-6">
              <form
                action="mailto:contact@cleanearth.org"
                method="post"
                encType="text/plain"
              >
                <label htmlFor="name">Your name : </label>
                <input type="text" name="name" />
                <br />

                <label htmlFor="email">Your email : </label>
                <input type="email" name="email" />
                <br />

                <label htmlFor="message">Your message : </label>
                <br />
                <textarea name="message"></textarea>
                <br />

                <input type="submit" value="Send" />
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
