import React from "react";
import Link from "next/link";
import { AiFillHome, AiFillPhone } from "react-icons/ai";

const Footer = () => {
  return (
    <footer className="footer mt-auto bg-light">
      <div
        className="row mx-0 py-4 text-white"
        style={{ backgroundColor: "#332D2D" }}
      >
        <div className="col-md-3 ">
          <h5>Clean Earth</h5>
          <p className="text-justify">
            Kami membantu mengelola sampah daur ulang anda dengan memberikan
            kemudahan akses dalam membuang sampah tersebut{" "}
          </p>
        </div>
        <div className="col-md-3">
          <h5>Article</h5>
          <ul className="list-unstyled">
            <li>
              <Link href="/">Ubah Sampah Jadi Uang</Link>
            </li>
            <li>
              <Link href="/">Manfaat Pengelolaan Barang Bekas</Link>
            </li>
          </ul>
        </div>
        <div className="col-md-3">
          <h5>Navigation</h5>
          <ul className="list-unstyled">
            <li>
              <Link href="/">Home</Link>
            </li>
            <li>
              <Link href="/product">Product</Link>
            </li>
            <li>
              <Link href="/tracker">Tracker</Link>
            </li>
            <li>
              <Link href="/blog">Blog</Link>
            </li>
            <li>
              <Link href="/about">About</Link>
            </li>
          </ul>
        </div>
        <div className="col-md-3">
          <h5>Contact</h5>
          <p className="">
            <AiFillHome /> Bandung, Jawa Barat, Indonesia
          </p>
          <p>
            <AiFillPhone /> contact@cleanearth.org
          </p>
        </div>
      </div>
      <div className="py-3" style={{ backgroundColor: "#292424" }}>
        <p className="text-center my-0 text-white">
          Clean Earth &copy; {new Date().getFullYear()}
        </p>
      </div>
    </footer>
  );
};

export default Footer;
