import axios from "axios";
import { useEffect } from "react";
import { createContext, useContext, useReducer } from "react";
import reducer from "../reducer/FoodReducer";

const initialState = {
  isLoading: true,
  isError: false,
  foods: [],
};

const FoodContext = createContext();

const Foodprovider = ({ children }) => {
    const [state, dispatch] = useReducer(reducer, initialState);

    const getfoods = async () => {
        dispatch({ type: "SET_LOADING" })
        try {
          const res = await axios.get(`https://localhost:7238/api/foodItems`);
          const allfoods = await res.data;
          dispatch({ type: "FOODS", payload: allfoods })
        }
        catch (error) {
          dispatch({ type: "ERROR" })
        }
      }

      const addfood = async(food) => {
        const addApi = 'https://localhost:7238/api/foodItems';
        try {
          const res = await axios.post(addApi, food);
          const updatedfoods = await axios.get(`https://localhost:7238/api/foodItems`);
          //console.log(updatedfoods)
          const allfoods = await updatedfoods.data;
          dispatch({ type: "FOODS", payload: allfoods })
        } catch (error) {
          dispatch({ type: "ERROR" });
        }
      }

      const updatefood = async (id) => {
        const updateapi = `https://localhost:7238/api/foodItems/${id}`;
        try {
          const res = await axios.put(updateapi);
          const updatedfoods = await axios.get(`https://localhost:7238/api/foodItems`);
          //console.log(updatedfoods)
          const allfoods = await updatedfoods.data;
          dispatch({ type: "FOODS", payload: allfoods })
        } catch (error) {
          dispatch({ type: "ERROR" })
        }
      }


      const deletefood = async (id) => {
        const Dapi = `https://localhost:7238/api/foodItems/${id}`;
        try {
          const res = await axios.delete(Dapi);
          const updatedfoods = await axios.get(`https://localhost:7238/api/foodItems`);
          //console.log(updatedfoods)
          const allfoods = await updatedfoods.data;
          dispatch({ type: "FOODS", payload: allfoods })
        } catch (error) {
          dispatch({ type: "ERROR" })
        }
      }

      

      useEffect(() => {
        getfoods();
      }, [])

      useEffect(() => {
        deletefood()
      }, [state.foods])

      useEffect(() => {
        updatefood()
      }, [state.foods])

  return (
    <FoodContext.Provider value={{ ...state, deletefood, addfood, updatefood}}>{children}</FoodContext.Provider>
  );
};

const useFoodcontext = () => {
  return useContext(FoodContext);
};

export { FoodContext, Foodprovider, useFoodcontext };
