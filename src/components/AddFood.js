import React, {useState} from 'react'
import { NavLink } from 'react-router-dom';
import { useFoodcontext } from '../context/FoodContext';

const initialfood = {
    name: "",
    price: 0,
    image: ""
}

const AddFood = () => {

    const { addfood} = useFoodcontext();

    const [food, setfood] = useState(initialfood);

    const handleChange=(e)=>{
        setfood((pre)=>({
          ...pre,[e.target.name]:e.target.value
        }))
      }

  return (
    <>
    <h2 className="d-flex justify-content-center">ADD FOOD ITEM</h2>
    <div className='container m-3' >
      <form >
        <div className="mb-3"><input className="form-control" type="text" name="name" onChange={handleChange} value={food.name} placeholder="Food name" /></div>
        <div className="mb-3"><input className="form-control" type="number" name="price" placeholder="Enter price" onChange={handleChange} value={food.price}/></div>
        <div className="mb-3"><input className="form-control" type="text" name="book_url" onChange={handleChange} value={food.book_url} placeholder="Food image url" /></div>
        <div className="mb-3">
          <NavLink className="btn btn-primary shadow d-block w-100"  to="/"type='button' onClick={() => addfood(food)}>ADD</NavLink>
          </div>
      </form>
    </div>
    </>
  )
}

export default AddFood

