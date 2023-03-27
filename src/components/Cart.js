import React from "react";
import { useFoodcontext } from "../context/FoodContext";
import { useCartContext } from "../context/CartContext";

import CartItems from "./CartItems";
import Card from "./Card";


const Cart = () => {
  const { foods } = useFoodcontext();
  const { cart, clearCart, total_price } = useCartContext();

  return (
    <>
      <h2 className="d-flex justify-content-center">FOODS</h2>
      <div>
        {foods.map((curElement) => {
          return <Card {...curElement} />;
        })}
      </div>
      <CartItems />
      {cart != null && cart.length > 0 ? (
        <div className="container">
          <div className="row justify-content-center">
        <button
          className="col-6 btn btn-danger m-1 p-3"
          onClick={() => {
            clearCart();
          }}
        >
          Clear Cart
        </button>
        </div>
        </div>
      ) : (
        ""
      )}
      <div className="container m-3">
        <div className="row justify-content-center">
          <div className="col-2 p-3"><b>SUBTOTAL</b></div>
          <button className="col-2 p-3 btn btn-success text-dark"><b>{total_price}</b></button>
        </div>
      </div>
    </>
  );
};

export default Cart;
