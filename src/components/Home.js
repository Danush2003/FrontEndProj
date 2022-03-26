import { Routes, Route, Link, Router, NavLink } from "react-router-dom";
import Carousel from "react-bootstrap/Carousel";

function Home() {
  return (
    <div>
      <Carousel>
        <Carousel.Item>
          <img
            className="d-block w-100"
            height="400px"
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTA_FAzxU0LQoY3U-rcePzLm-nxIt5iShxtPg&usqp=CAU"
            alt=""
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            height="400px"
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSqVt8qvZU6bpIcrluifvR4NnekguKjShXVZg&usqp=CAU"
            alt=""
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            height="400px"
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRNFksSNBLwDNpXwxVvsj6y4PKIXka5tSxziw&usqp=CAU"
            alt=""
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            height="400px"
            src="data:image/jpeg;base64,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"
            alt=""
          />
        </Carousel.Item>
      </Carousel>
      {/* cards */}
      <div className="cards ">
        {/* card1 */}
        <div className="card shadow" style={{ background: "#00B4D8" }}>
          <img
            className="card-img-top w-100"
            src="https://images.unsplash.com/photo-1600574691453-499962cc0611?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8Y2FzdWFsJTIwd2VhcnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60"
            alt="Card image cap"
          />
          <div className="card-body">
            <h5
              className="card-title mb-3"
              style={{ fontFamily: "serif", fontSize: "30px" }}
            >
              Casual Wear
            </h5>
            <button
              className="btn d-block mx-auto text-light"
              style={{ borderRadius: "10%", background: "#04293A" }}
            >
              <NavLink
                className="nav-link"
                to="Apparel"
                style={{ fontSize: 30 }}
              >
                Explore
              </NavLink>
            </button>
          </div>
        </div>
        {/* card2 */}
        <div className="card shadow" style={{ background: "#00B4D8" }}>
          <img
            className="card-img-top w-100"
            src="https://images.unsplash.com/photo-1507679799987-c73779587ccf?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OXx8Zm9ybWFsJTIwd2VhcnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60"
            alt="Card image cap"
          />
          <div className="card-body">
            <h5
              className="card-title mb-3"
              style={{ fontFamily: "serif", fontSize: "30px" }}
            >
              Formal Wear
            </h5>
            <button
              className="btn d-block mx-auto text-light"
              style={{ borderRadius: "10%", background: "#04293A" }}
            >
              <img
                src="https://cdn-icons-png.flaticon.com/128/1086/1086933.png"
                style={{ width: "20px", marginRight: "2px" }}
              ></img>
              <h4>Explore</h4>
            </button>
          </div>
        </div>
        {/* card3 */}
        <div className="card shadow" style={{ background: "#00B4D8" }}>
          <img
            className="card-img-top w-100"
            src="https://images.unsplash.com/photo-1542321103-f277f1befb3c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8N3x8c3BvcnRzd2VhcnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60"
            alt="Card image cap"
          />
          <div className="card-body">
            <h5
              className="card-title mb-3"
              style={{ fontFamily: "serif", fontSize: "30px" }}
            >
              Sports Wear
            </h5>
            <button
              className="btn d-block mx-auto text-light"
              style={{ borderRadius: "10%", background: "#04293A" }}
            >
              <img
                src="https://cdn-icons-png.flaticon.com/128/1086/1086933.png"
                style={{ width: "20px", marginRight: "2px" }}
              ></img>
              <h4>Explore</h4>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Home;
