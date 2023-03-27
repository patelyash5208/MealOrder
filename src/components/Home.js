import React from "react";
import { useFoodcontext } from "../context/FoodContext";
import { FaTrash, FaEdit } from "react-icons/fa";
import { NavLink } from "react-router-dom";

const Home = () => {
  const { foods, deletefood} = useFoodcontext();
  console.log(foods);

  
  return (
    <>
      <div className="d-flex justify-content-around p-2">
        <NavLink className="btn btn-light btn-outline-success" to="/addfood">ADD FOOD</NavLink>
        <NavLink className="btn btn-light btn-outline-dark" to="/cart">ADD ORDER</NavLink>
      </div>

      <h2 className="d-flex justify-content-center">FOODS</h2>
      <div>
        {foods.map((curElement) => {
          return (
            <>
              <div className="container m-3 shadow p-3 mb-3 bg-body rounded">
                <div className="row justify-content-between">
                  <div className="col-2"><img className="col-12" src={curElement.image} alt="" style={{height:"70px", width:"70px"}}/></div>
                  <div className="col-2"><b>{curElement.name}</b></div>
                  <button className="col-1 btn btn-dark m-1">
                    {curElement.price}
                  </button>
                  <NavLink
                    className="col-1 btn btn-light btn-outline-primary m-1" to={`/updatefood/${curElement.id}`}
                  ><FaEdit /></NavLink>
                  <button
                    className="col-1 btn btn-light btn-outline-danger m-1"
                    onClick={() => deletefood(curElement.id)}
                  >
                    <FaTrash />
                  </button>
                </div>
              </div>
            </>
          );
        })}
      </div>
    </>
  );
};

export default Home;
