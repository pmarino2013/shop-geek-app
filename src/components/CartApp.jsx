import React from "react";

const CartApp = () => {
  return (
    <button type="button" className="btn btn-light position-relative">
      <i className="fa fa-shopping-cart" aria-hidden="true"></i>

      <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-primary">
        0<span className="visually-hidden">Productos en el carrito</span>
      </span>
    </button>
  );
};

export default CartApp;
