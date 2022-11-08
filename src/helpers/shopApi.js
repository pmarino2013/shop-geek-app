const url = "http://localhost:8080/api/";

export const traerProductos = async () => {
  const resp = await fetch(`${url}productos`, {
    method: "GET",
    headers: {
      "Content-type": "application/json; charset=UTF-8",
    },
  });
  const data = await resp.json();

  return data;
};

export const getProductById = async (id) => {
  const resp = await fetch(`${url}productos/${id}`, {
    method: "GET",
    headers: {
      "Content-type": "application/json; charset=UTF-8",
    },
  });
  const data = await resp.json();

  return data;
};
