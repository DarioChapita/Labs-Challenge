import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import SearchBar from "./components/SearchBar";
import Productos from "./components/Productos";
import "./Estilos/App.css";

export default function App() {
  const [productos, setProductos] = useState([]);

  const onSearch = (busqueda) => {
    fetch(`http://localhost:4000/api/search?q=${busqueda}`)
      .then((res) => res.json())
      .then((data) => {
        setProductos(
          data.results.sort((a, b) => {
            return b.price - a.price;
          })
        );
      })
      .catch((error) => {
        console.error(error);
      });
  };
  //console.log("PRODUCTOS", productos);
  useEffect(() => {
    onSearch("lanchas");
  }, []);

  return (
    <div>
      <Router>
        <Route path="/" render={() => <SearchBar onSearch={onSearch} />} />
        <div className="EstiloCard">
          <Route path="/" render={() => <Productos resultado={productos} />} />
        </div>
      </Router>
    </div>
  );
}
