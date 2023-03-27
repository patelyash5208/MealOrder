import React, { useState, useEffect } from 'react';
import axios from "axios";
import { useParams } from "react-router-dom";


const foodInit = {
    id : 0,
  name: "",
  price: 0,
  image: "",
};


const UpdateFood = () => {
  const { id } = useParams();
  const [food, setFood] = useState(foodInit);
  const [isLoading, setIsLoading] = useState(false);
  
  

  useEffect(() => {
    async function getFood(id) {
      //let data;
      axios.get(`https://localhost:7238/api/foodItems/${id}`,
        {
          headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            'Access-Control-Allow-Origin': '*',
          }
        })
        .then(res => {
          console.log(res.data);
          //data = res.data.food;
          setFood(res.data);
        })
        .catch(err => {
          console.log(err);
          if (err.response.status === 401) {
            console.log('Something went wrong');
          }
        });
    }
    getFood(id)
  }, [id]);
  const updateFood = (par) => {
    setFood({ ...food, ...par });
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    setIsLoading(true);
    console.log(id);
    axios.put(`https://localhost:7238/api/foodItems/${id}`,
      food,
      {
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json',
        }
      })
      .then(response => {
        const food = response.data;
        console.log(food);
        window.location.href="/";
      })
      .catch(err => {
        console.log(err);
        if (err.response.status === 401) {
          console.log('Something went wrong');
        }
      });
    setIsLoading(false);
  };


  return (
    <>
    <h2 className="d-flex justify-content-center">UPDATE FOOD ITEM</h2>
    <div className='container m-3'>
      <form onSubmit={handleSubmit}>
        <div className="form-group mb-3">
          <label labelfor="name">Food name</label>
          <input type="text" className="form-control" id="name" aria-describedby="nameHelp" placeholder="Enter food name" autoFocus value={food.name} onChange={(e) => updateFood({ name: e.target.value })} required />
          <small id="nameHelp" className="form-text text-muted">Atleast 3 character.</small>
        </div>
        
        <div className="form-group mb-3">
          <label labelfor="image">Image url</label>
          <input type="text" className="form-control" id="image" aria-describedby="imageurlHelp" placeholder="Enter image url" autoFocus value={food.image} onChange={(e) => updateFood({ image: e.target.value })} required />
          <small id="imageurlHelp" className="form-text text-muted">Atleast 3 character.</small>
        </div>
        <div className="form-group mb-3">
          <label labelfor="price">Price</label>
          <input type="number" className="form-control" id="price" aria-describedby="priceHelp" min={0} max={1000} placeholder="Price" value={food.price} onChange={(e) => updateFood({ price: e.target.value })} />
          <small id="priceHelp" className="form-text text-muted">Enter valid food price.</small>
        </div>

        <button type="submit" className="btn btn-primary btn-block mb-3" onClick={handleSubmit}>UPDATE</button>
      </form>
      </div>
    </>
  )
}

export default UpdateFood;






