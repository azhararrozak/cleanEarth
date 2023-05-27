/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable @next/next/no-img-element */
/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable react-hooks/rules-of-hooks */
import React, { useContext, useEffect, useState } from "react";
import { DataContext } from "@/store/GlobalState";
import Link from "next/link";
import CartItem from "@/components/CartItem";
import { getData } from "@/utils/dataFetch";

const cart = () => {
  const { state, dispatch } = useContext(DataContext);
  const { cart } = state;

  const [total,setTotal] = useState(0)

  useEffect(() => {
    const getTotal = () => {
      const res = cart.reduce((prev, item) => {
        return prev + (item.price * item.quantity)
      },0)

      setTotal(res)
    }

    getTotal()
  },[cart])

  useEffect(() => {
    const cartLocal = JSON.parse(localStorage.getItem('_cart_Local_Storage_'))
    if(cartLocal && cartLocal.length > 0){
      let newArr = []
      const updateCart = async () => {
        for (const item of cartLocal){
          const res = await getData(`product/${item._id}`)
          const { _id, title, images, price, inStock, sold } = res.product
          if(inStock > 0){
            newArr.push({ 
              _id, title, images, price, inStock, sold,
              quantity: item.quantity > inStock ? 1 : item.quantity
            })
          }
        }

        dispatch({ type: 'ADD_CART', payload: newArr })
      }

      updateCart()
    }
  }, [])

  if (cart.length === 0)
    return (
      <div className="container d-flex flex-column align-items-center justify-content-center text-center p-4">
        <img src="/empty-cart.jpg" className="img-fluid" width={600}/>
        <h3>Your cart is empty</h3>
        <p>Start shopping and fill your cart with amazing products!</p>
        <Link href={'/product'} legacyBehavior>
          <button className="btn btn-info">Tambahkan Barang</button>
        </Link>
      </div>
    );

  return (
    <div className="row mx-auto">
        <div className="col-md-8 text-secondary table-responsive my-3">
          <h2 className="text-uppercase">Shopping Cart</h2>

          <table className="table my-3">
            <tbody>
              {
                cart.map(item => (
                  <CartItem key={item._id} item={item} dispatch={dispatch} cart={cart} />
                ))
              }
            </tbody>
          </table>
        </div>

        <div className="col-md-4 my-3 text-right text-uppercase text-secondary">
            <form>
              <h2>Shipping</h2>

              <label htmlFor="address">Address</label>
              <input type="text" name="address" id="address"
              className="form-control mb-2" />

              <label htmlFor="mobile">Mobile</label>
              <input type="text" name="mobile" id="mobile"
              className="form-control mb-2"/>
            </form>

            <h3>Total: <span className="text-danger">Rp. {total}</span></h3>

            
            <Link href={'/'} legacyBehavior>
              <a className="btn btn-dark my-2">Proceed with payment</a>
            </Link>
            
        </div>
      </div>
  )
};

export default cart;
