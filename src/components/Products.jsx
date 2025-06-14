import React from "react";

const Products = (props) => {
  return (
    <>
      <div className="card border-0 mt-3">
        <img src={props.img} className="m-2 img-fluid" />
      </div>
    </>
  );
};

export default Products;
