import "./App.css";
import { BrowserRouter as Router, Route, NavLink, Routes } from "react-router-dom";
import Home from "./components/Home";
import AddFood from "./components/AddFood";
import UpdateFood from "./components/UpdateFood";
import Cart from "./components/Cart";
import logo from "./images/logo.png"

function App() {
  return (
    <div>
      <Router>
      <div>
        <h3 className='d-flex justify-content-center m-3'>
          <img src={logo} alt="logo" style={{height:"150px", width:"250px"}}/>
        </h3>
        <nav className='navbar navbar-expand'>
          <ul className='navbar-nav'>
            <li className='nav-item m-1'>
              <NavLink className="btn btn-light btn-outline-warning" to="/">
                Home
              </NavLink>
            </li>
          </ul>
        </nav>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/addfood" element={<AddFood />} />
          <Route exact path="/cart" element={<Cart />}/>
          <Route exact path="/updatefood/:id" element={<UpdateFood />} />
        </Routes>
      </div>
    </Router>
    </div>
  );
}

export default App;
