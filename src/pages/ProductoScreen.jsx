import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getProductById } from "../helpers/shopApi";

import "../css/producto.css";

const ProductoScreen = () => {
  const { id } = useParams();
  const [producto, setProducto] = useState(null);
  console.log(id);
  const imgNotFound =
    "https://www.salonlfc.com/wp-content/uploads/2018/01/image-not-found-scaled-1150x647.png";
  useEffect(() => {
    getProductById(id).then((respuesta) => {
      setProducto(respuesta.producto);
    });
  }, []);

  return (
    <div className="container">
      <div className="row mt-5">
        {producto ? (
          <div className="col">
            <div className="card mb-3">
              <div className="row g-0">
                <div className="col-md-8">
                  <img
                    src={producto.img ? producto.img : imgNotFound}
                    className="img-fluid rounded-start"
                    alt={producto.nombre}
                  />
                </div>
                <div className="col-md-4">
                  <div className="card-body d-flex flex-column justify-content-around h-100">
                    <p className="card-text">
                      <small className="text-muted">Nuevo | más vendido</small>
                    </p>
                    <h5 className="card-title">{producto.nombre}</h5>
                    <p className="card-text">{producto.descripcion}</p>
                    <h2 className="card-text">${producto.precio}</h2>

                    <p className="card-text">
                      <small
                        className={
                          producto.stock > 0
                            ? "text-muted"
                            : "text-muted text-danger"
                        }
                      >
                        {producto.stock > 0 ? "Stock Disponible" : "Sin Stock"}
                      </small>
                    </p>
                    <div className="d-flex align-items-center gap-2">
                      <span>Cantidad:</span>
                      <select
                        className="form-select"
                        aria-label="Default select example"
                      >
                        <option value="1">1 Unidad</option>
                        <option value="2">2 Unidades</option>
                        <option value="3">3 Unidades</option>
                      </select>
                      <small className="text-muted">
                        ({producto.stock} disponibles)
                      </small>
                    </div>
                    <div className="d-grid mt-3 mt-md-0">
                      <button className="btn btn-success">
                        Agregar al carrito
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ) : (
          <div className="col">
            <h3>En espera...</h3>
          </div>
        )}
      </div>
    </div>
  );
};

export default ProductoScreen;
