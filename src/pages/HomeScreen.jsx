import React, { useEffect, useState } from "react";

import { traerProductos } from "../helpers/shopApi";
import ProductDest from "../components/ProductDest";

import "../css/home.css";
import CarouselApp from "../components/CarouselApp";

const HomeScreen = () => {
  const [productos, setProductos] = useState([]);

  useEffect(() => {
    traerProductos().then((respuesta) => {
      setProductos(respuesta.productos);
    });
  }, []);

  return (
    <>
      <CarouselApp />
      <ProductDest productos={productos} />
    </>
  );
};

export default HomeScreen;
