import logo from "./logo.svg";
import "./App.css";
import Home from "./components/Home";
import Apparel from "./components/Apparel";
import Profile from "./components/Profile";

import { Routes, Route, Link, Router, NavLink } from "react-router-dom";

function App() {
  return (
    <div>
      {/* navbar */}
      <nav className="navbar navbar-expand-sm navbar-dark bg-secondary p-2 mb-2">
        <NavLink className="navbar-brand mx-2" to="" style={{ fontSize: 30 }}>
          Mascot
        </NavLink>
        <div>
          <input
            className="search"
            size="80"
            type="text"
            id="search"
            placeholder="Search here"
          ></input>
          <label htmlFor="search">
            <img
              className="serimg"
              src="https://cdn-icons-png.flaticon.com/128/598/598494.png"
            ></img>
          </label>
        </div>
        <div className="collapse navbar-collapse d-flex justify-content-end">
          <ul className="navbar-nav">
            <li className="nav-item mx-4">
              <NavLink className="nav-link" to="" style={{ fontSize: 30 }}>
                Cart
                <img
                  className="serimg"
                  src="https://cdn-icons.flaticon.com/png/128/2838/premium/2838895.png?token=exp=1648170234~hmac=fd8f81290776aada44903c15d9861ff3"
                ></img>
              </NavLink>
            </li>
            <li className="nav-item mx-4">
              <NavLink
                className="nav-link"
                to="Profile"
                style={{ fontSize: 30 }}
              >
                Profile
                <img
                  className="serimg"
                  src="https://cdn-icons-png.flaticon.com/128/747/747376.png"
                ></img>
              </NavLink>
            </li>
          </ul>
        </div>
      </nav>
      {/* routing */}

      <Routes>
        <Route path="" element={<Home />} />
        <Route path="Apparel" element={<Apparel />} />
        <Route path="Profile" element={<Profile />} />
      </Routes>

      {/* footer */}
      <div class="footer">
        <div>
          <img
            src="https://cdn-icons-png.flaticon.com/128/1034/1034182.png"
            style={{ width: "25px" }}
          ></img>
          <h5 style={{ display: "inline", margin: "3px", color: "black" }}>
            1278349567
          </h5>
        </div>
        <div>
          <img
            src="https://cdn-icons-png.flaticon.com/128/3179/3179068.png"
            style={{ width: "25px" }}
          ></img>
          <h5 style={{ display: "inline", margin: "3px", color: "black" }}>
            Mumbai,India
          </h5>
        </div>
        <div>
          <img
            src="https://cdn-icons.flaticon.com/png/512/2099/premium/2099199.png?token=exp=1647631797~hmac=35f53057385074707f7a2f8081dfc5e6"
            style={{ width: "25px" }}
          ></img>
          <h5 style={{ display: "inline", margin: "3px", color: "black" }}>
            brucewayne@gmail.com
          </h5>
        </div>
      </div>
    </div>
  );
}

export default App;
