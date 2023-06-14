/* eslint-disable @next/next/no-img-element */
import React, { useState, useContext } from "react";
import { getData } from "@/utils/dataFetch";
import { DataContext } from "@/store/GlobalState";
import { addToCart } from "@/store/Action";

const DetailProduct = (props) => {
  const [product] = useState(props.product);
  const [tab, setTab] = useState(0);

  const { state, dispatch } = useContext(DataContext)
  const { cart, auth } = state

  const isActive = (index) => {
    if (tab === index) return " active";
    return "";
  };

  return (
    <div className="row detail_page mx-0">
      <div className="col-md-6">
        <img
          src={product.images[tab].url}
          alt={product.images[tab].url}
          className="d-block img-thumbnail rounded mt-4 w-100"
          style={{ height: "350px" }}
        />

        <div className="row mx-0" style={{ cursor: "pointer" }}>
          {product.images.map((img, index) => (
            <img
              key={index}
              src={img.url}
              alt={img.url}
              className={`img-thumbnail rounded ${isActive(index)}`}
              style={{ height: "80px", width: "20%" }}
              onClick={() => setTab(index)}
            />
          ))}
        </div>
      </div>

      <div className="col-md-6 mt-3">
        <h2 className="text-uppercase">{product.title}</h2>
        <h5 className="text-danger">Rp. {product.price}</h5>

        <div className="row mx-0 d-flex justify-content-between">
          {product.inStock > 0 ? (
            <h6 className="text-danger">Tersedia: {product.inStock}</h6>
          ) : (
            <h6 className="text-danger">Barang Habis</h6>
          )}

          <h6 className="text-danger">Terjual: {product.sold}</h6>
        </div>

        <div className="my-2 text-justify">{product.description}</div>
        <div className="my-2 text-justify">{product.content}</div>

        <button
          type="button"
          className="btn btn-dark d-block my-3 px-5"
          onClick={() => dispatch(addToCart(product, cart, auth))}
        >
          Beli
        </button>
      </div>
    </div>
  );
};

export async function getServerSideProps({ params: { id } }) {
  console.log(id);

  const res = await getData(`product/${id}`);
  console.log(res);

  return {
    props: {
      product: res.product,
    },
  };
}

export default DetailProduct;
