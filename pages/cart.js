/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable @next/next/no-img-element */
/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable react-hooks/rules-of-hooks */
import React, { useContext, useEffect, useState } from "react";
import { DataContext } from "@/store/GlobalState";
import Link from "next/link";
import CartItem from "@/components/CartItem";
import { getData } from "@/utils/dataFetch";
import axios from "axios"; 

const cart = () => {
  const { state, dispatch } = useContext(DataContext);
  const { cart, auth } = state;

  const [total, setTotal] = useState(0);

  const email = auth.user ? auth.user.email : "";
  const [firstname, setFirstName] = useState("");
  const [lastname, setLastName] = useState("");
  const [address, setAddress] = useState("");
  const [city, setCity] = useState("");
  const [mobile, setMobile] = useState("");

  useEffect(() => {
    const getTotal = () => {
      const res = cart.reduce((prev, item) => {
        return prev + item.price * item.quantity;
      }, 0);

      setTotal(res);
    };

    getTotal();
  }, [cart]);

  useEffect(() => {
    const cartLocal = JSON.parse(localStorage.getItem("_cart_Local_Storage_"));
    if (cartLocal && cartLocal.length > 0) {
      let newArr = [];
      const updateCart = async () => {
        for (const item of cartLocal) {
          const res = await getData(`product/${item._id}`);
          const { _id, title, images, price, inStock, sold } = res.product;
          if (inStock > 0) {
            newArr.push({
              _id,
              title,
              images,
              price,
              inStock,
              sold,
              quantity: item.quantity > inStock ? 1 : item.quantity,
            });
          }
        }

        dispatch({ type: "ADD_CART", payload: newArr });
      };

      updateCart();
    }
  }, []);

  if (cart.length === 0)
    return (
      <div className="container d-flex flex-column align-items-center justify-content-center text-center p-4">
        <img src="/empty-cart.jpg" className="img-fluid" width={600} />
        <h3>Your cart is empty</h3>
        <p>Start shopping and fill your cart with amazing products!</p>
        <Link href={"/product"} legacyBehavior>
          <button className="btn btn-info">Tambahkan Barang</button>
        </Link>
      </div>
    );

  const handlePayment = async () => {
   
    if(!firstname || !lastname || !address || !city || !mobile) return dispatch({ type: 'NOTIFY', payload: {error: "Fill all form"} })

    try {
      const response = await axios.post("/api/payment/transaction", {
        total: total,
        firstname: firstname,
        lastname: lastname,
        email: email,
        address: address,
        city: city,
        mobile: mobile
      });

      const { transactionRedirectUrl } = response.data;

      // Lakukan pengalihan ke halaman pembayaran Midtrans
      window.open(transactionRedirectUrl, "_blank");

    } catch (error) {
      console.log("Error occurred:", error);
    }
  };

  return (
    <div className="row mx-auto">
      <div className="col-md-8 text-secondary table-responsive my-3">
        <h2 className="text-uppercase">Shopping Cart</h2>

        <table className="table my-3">
          <tbody>
            {cart.map((item) => (
              <CartItem
                key={item._id}
                item={item}
                dispatch={dispatch}
                cart={cart}
              />
            ))}
          </tbody>
        </table>
      </div>

      <div className="col-md-4 my-3 text-right text-uppercase text-secondary">
        <form>
          <h2>Shipping</h2>

          <label htmlFor="firstname">Firstname</label>
          <input
            type="text"
            name="firstname"
            id="firstname"
            className="form-control mb-2"
            value={firstname}
            onChange={(e) => setFirstName(e.target.value)}
          />

          <label htmlFor="lastname">Lastname</label>
          <input
            type="text"
            name="lastname"
            id="lastname"
            className="form-control mb-2"
            value={lastname}
            onChange={(e) => setLastName(e.target.value)}
          />

          <label htmlFor="email">Email</label>
          <input
            type="text"
            name="email"
            id="email"
            className="form-control mb-2"
            value={email}
            disabled
          />

          <label htmlFor="address">City</label>
          <input
            type="text"
            name="city"
            id="city"
            className="form-control mb-2"
            value={address}
            onChange={(e) => setAddress(e.target.value)}
          />

          <label htmlFor="address">Address</label>
          <input
            type="text"
            name="address"
            id="address"
            className="form-control mb-2"
            value={city}
            onChange={(e) => setCity(e.target.value)}
          />

          <label htmlFor="mobile">Mobile</label>
          <input
            type="text"
            name="mobile"
            id="mobile"
            className="form-control mb-2"
            value={mobile}
            onChange={(e) => setMobile(e.target.value)}
          />
        </form>

        <h3>
          Total: <span className="text-danger">Rp. {total}</span>
        </h3>

        <Link href={auth.user ? "#" : "/signin"} legacyBehavior>
          <button className="btn btn-dark my-2" onClick={handlePayment}>
            Proceed with payment
          </button>
        </Link>
      </div>
    </div>
  );
};

export default cart;
