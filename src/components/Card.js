import React, { useState } from "react";
import { useCartContext } from "../context/CartContext";
import { FaMinus, FaPlus } from "react-icons/fa";

const Card = ({...curElement}) => {
  const { addtocart } = useCartContext();
  const [amount, setamount] = useState(1);

  return (
    <>
      <div className="container m-3 shadow p-3 mb-3 bg-body rounded">
        <div className="row justify-content-between">
          <div className="col-2">
            <img
              className="col-12"
              src={curElement.image}
              alt=""
              style={{ height: "70px", width: "70px" }}
            />
          </div>
          <div className="col-2">
            <b>{curElement.name}</b>
          </div>
          <button className="col-1 btn btn-dark m-1">{curElement.price}</button>
          <div className="col-2">
            <button
              className="btn btn-light "
              onClick={() =>
                amount > 1 ? setamount(amount - 1) : setamount(amount)
              }
            >
              <FaMinus />
            </button>
            &nbsp;
            <button className="btn btn-light">{amount}</button>
            &nbsp;
            <button
              className="btn btn-light"
              onClick={() => setamount(amount + 1)}
            >
              <FaPlus />
            </button>
          </div>
          <button
            className="col-2 btn btn-light btn-outline-warning text-dark"
            onClick={() => addtocart(curElement.id, amount, curElement)}
          >
            ADD TO CART
          </button>
        </div>
      </div>
    </>
  );
};

export default Card;
