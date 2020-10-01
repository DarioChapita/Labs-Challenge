import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Pagination from "@material-ui/lab/Pagination";
import SearchBar from "./components/SearchBar";
import Productos from "./components/Productos";
// import Carousel from "react-elastic-carousel";
// import Item from "./components/Item";
// import "./Estilos/App.css";

export default function App() {
  const [productos, setProductos] = useState([]);
  const [inicio, setInicio] = useState(0);
  const [page, setPage] = useState(0);
  const limite = 10;
  const [contador, setContador] = useState(0);
  const [query, setQuery] = useState("");

  // const breakPoints = [
  //   { width: 1, ItemsToShow: 1 },
  //   { width: 550, ItemsToShow: 2 },
  //   { width: 768, ItemsToShow: 3 },
  //   { width: 1200, ItemsToShow: 4 },
  // ];

  const onSearch = (busqueda) => {
    setQuery(busqueda);
    fetch(`http://localhost:4000/api/search?q=${busqueda}`)
      .then((res) => res.json())
      .then((data) => {
        setContador(Math.ceil(data.results.length / limite));
        setProductos(data.results.slice(inicio, inicio + limite));
      })
      .catch((error) => {
        console.error(error);
      });
  };

  const MenorMayor = productos.sort((a, b) => {
    return a.price - b.price;
  });

  const handleChange = (e, value) => {
    var select = value * limite;
    setPage(value);
    if (select >= 50) {
      select = 0;
    }
    setInicio(select);
    onSearch(query);
  };

  useEffect(() => {
    onSearch("lanchas");
  }, []);

  return (
    <div position="static">
      {/* <>
        <div className="App">
          <Carousel breakPoints={breakPoints}>
            <Item>One</Item>
            <Item>Two</Item>
            <Item>Three</Item>
            <Item>Four</Item>
            <Item>Five</Item>
            <Item>Six</Item>
            <Item>Seven</Item>
            <Item>Eight</Item>
          </Carousel>
        </div>
      </> */}
      <Router>
        <Route path="/" render={() => <SearchBar onSearch={onSearch} />} />
        <Route path="/" render={() => <Productos resultado={MenorMayor} />} />
        <Pagination count={contador} page={page} onChange={handleChange} />
      </Router>
    </div>
  );
}
