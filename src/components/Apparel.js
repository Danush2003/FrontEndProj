import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import Card from "./Card";

function Apparels() {
  return (
    <div>
      <h1 className="text-center mt-2">2022 Latest Collections</h1>
      {/* Cards in flexbox */}
      <div className="box m-5">
        <Card
          img="https://images.unsplash.com/photo-1576566588028-4147f3842f27?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=464&q=80"
          item="Men's T-Shirt"
          price="300"
        />
        <Card
          img="https://images.unsplash.com/photo-1627979730410-540e9df0e19e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwcm9maWxlLXBhZ2V8Nnx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60"
          item="Men's Hoddie"
          price="700"
        />
        <Card
          img="https://images.unsplash.com/photo-1627913363993-95b23378265e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=580&q=80"
          item="Men's T-Shirt"
          price="450"
        />
        <Card
          img="https://images-do.nyc3.cdn.digitaloceanspaces.com/lAVtCJXFVr/product_images/1638351540.AP0015.jpeg"
          item="Men's T-Shirt"
          price="500"
        />
        <Card
          img="https://images-do.nyc3.cdn.digitaloceanspaces.com/lAVtCJXFVr/product_images/1642673132.AP0057.PNG"
          item="Men's T-Shirt"
          price="600"
        />
        <Card
          img="https://images.unsplash.com/photo-1576225491735-02a876ba6aed?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=464&q=80"
          item="Men's T-Shirt"
          price="300"
        />
      </div>
    </div>
  );
}

export default Apparels;
