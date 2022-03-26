import React from "react";

// Card Componenet
function Card(props) {
  return (
    <div
      className="card h-100  p-1 m-4 rounded shadow border border-2 border-dark "
      style={{ width: "18rem" }}
    >
      {/* IMAGE */}
      <img className="image" src={props.img} />
      <div className="card-body">
        <div className="row">
          <div className="col-10">
            {/* ITEM */}
            <h5>{props.item}</h5>
            {/* PRICE */}
            <p>₹ {props.price}</p>
          </div>
          {/* CART ICON */}
          <div className="col-2">
            <div className="cart">
              <img
                className="w-25 cart"
                src="https://cdn-icons-png.flaticon.com/512/1170/1170576.png"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Card;
