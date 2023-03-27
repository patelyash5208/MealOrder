import React, { useState } from "react";
import { useCartContext } from "../context/CartContext";
import { FaTrashAlt } from "react-icons/fa";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";

const CartItems = () => {
  const { cart, removefood } = useCartContext();
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  
  //console.log(cart);
  return (
    <>
      <div className="container">
        <h2 className="d-flex justify-content-center">Cart</h2>
        <div className="table-responsive h-25 container-fluid m-2 shadow p-3 mb-3 bg-body rounded">
          {cart !== null && cart.length !== 0 ? (
            <table className="table table-striped table-hover">
              <thead className="stiky">
                <tr>
                  <th scope="col fs-5">Food</th>
                  <th scope="col fs-5">Price</th>
                  <th scope="col fs-5">Quantity</th>
                  <th scope="col fs-5">Total</th>
                  <th scope="col fs-5">Remove</th>
                </tr>
              </thead>
              <tbody>
                {cart.map((curElement) => {
                  <Modal show={show} onHide={handleClose}>
                    <Modal.Header closeButton>
                      <Modal.Title>Deleting Item from Cart</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                      Are you sure you want to delete the {}?
                    </Modal.Body>
                    <Modal.Footer>
                      <Button variant="secondary" onClick={handleClose}>
                        Close
                      </Button>
                      <Button
                        variant="danger"
                        onClick={() => removefood(curElement.id)}
                      >
                        Delete
                      </Button>
                    </Modal.Footer>
                  </Modal>;
                  return (
                    <tr key={curElement.id}>
                      <td>{curElement.name}</td>
                      <td>{curElement.price}</td>
                      <td>{curElement.quantity}</td>
                      <td>{curElement.price * curElement.quantity}</td>
                      <td>
                        <button
                          className="btn btn-light btn-outline-danger"
                          onClick={() => removefood(curElement.id)}
                        >
                          <FaTrashAlt />
                        </button>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          ) : (
            <h2 className="row justify-content-center m-5">
              No item present in cart
            </h2>
          )}
        </div>
      </div>
    </>
  );
};

export default CartItems;
