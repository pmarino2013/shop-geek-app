import React from "react";
import { Link } from "react-router-dom";

const ProductDest = ({ productos }) => {
  const imgNotFound =
    "https://www.salonlfc.com/wp-content/uploads/2018/01/image-not-found-scaled-1150x647.png";
  return (
    <section>
      <div className="container">
        <div className="row my-3">
          <div className="col">
            <h3>Productos destacados</h3>
          </div>
        </div>
        {productos.length > 0 ? (
          <div className="row row-cols-1 row-cols-md-3 g-4 mb-3">
            {productos.map((producto) => (
              <div className="col" key={producto._id}>
                <div className="card h-100">
                  <img
                    src={producto.img ? producto.img : imgNotFound}
                    className="card-img-top img-card"
                    alt={producto.titulo}
                  />
                  <div className="card-body">
                    <h5 className="card-title">{producto.nombre}</h5>
                    <p className="card-text">{producto.descripcion}</p>
                  </div>
                  <div className="card-footer bg-transparent d-flex justify-content-between align-items-center">
                    <div>
                      <span>Stock: </span>
                      <span
                        className={
                          producto.stock > 0
                            ? "text-success fw-bold"
                            : "text-danger fw-bold"
                        }
                      >
                        {producto.stock}
                      </span>
                    </div>
                    <div>
                      <Link
                        className="btn btn-success"
                        to={`/product/${producto._id}`}
                      >
                        <i className="fa fa-cart-plus" aria-hidden="true"></i>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <h3>Cargando...</h3>
        )}
      </div>
    </section>
  );
};

export default ProductDest;
