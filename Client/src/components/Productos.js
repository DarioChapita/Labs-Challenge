import React, { useState, useEffect } from "react";
import { Grid } from "@material-ui/core";
import ProductoCard from "./ProductoCard";
import Categorias from "./Categorias";
import { makeStyles } from "@material-ui/core/styles";
import Pagination from "@material-ui/lab/Pagination";
import swal from "sweetalert";

const useStyles = makeStyles((theme) => ({
  root: {
    "& > *": {
      marginTop: theme.spacing(2),
    },
  },
}));

export default function Productos({ resultado }) {
  const [listaDeProductos, setlistaDeProductos] = useState([]);
  const classes = useStyles();
  const [inicio, setInicio] = useState(0);
  const [page, setPage] = useState(0);
  const limite = 10;
  const contador = Math.ceil(resultado.length / limite);
  //var arrayVacio = [];

  function arrayDividido(resultado) {
    let arrayVacio = resultado.slice(inicio, inicio + limite);
    return arrayVacio;
  }

  const handleChange = (e, value) => {
    var index = value - 1;
    var select = index * limite;
    setPage(index);
    setInicio(select);
    arrayDividido(resultado);
    console.log("ARRAY VACIO", arrayDividido(resultado));
  };

  function nueva() {
    setlistaDeProductos([]);
    var arrayNew = [];
    for (let index = 0; index < resultado.length; index++) {
      if (resultado[index].condition === "new") {
        arrayNew.push(resultado[index]);
        setlistaDeProductos(arrayNew);
      } else {
        //swal("Henry`s Challenger", "...No existe esta categoria!");
      }
    }
    // console.log("NUEVO", listaDeProductos);
  }
  function usado() {
    setlistaDeProductos([]);
    var arrayUsado = [];
    for (let index = 0; index < resultado.length; index++) {
      if (resultado[index].condition === "used") {
        arrayUsado.push(resultado[index]);
        setlistaDeProductos(arrayUsado);
      } else {
        //swal("Henry`s Challenger", "...No existe esta categoria!");
      }
    }
    //console.log("USADO", listaDeProductos);
  }
  function otros() {
    setlistaDeProductos([]);
    var arrayOtros = [];
    for (let index = 0; index < resultado.length; index++) {
      if (resultado[index].condition === "not_specified") {
        arrayOtros.push(resultado[index]);
        setlistaDeProductos(arrayOtros);
      } else {
        //swal("Henry`s Challenger", "...No existe esta categoria!");
      }
    }
    // console.log("OTROS", listaDeProductos);
  }

  useEffect(() => {
    setlistaDeProductos(arrayDividido(resultado));
  }, [resultado]);

  if (resultado) {
    return (
      <div>
        <Categorias
          resultado={resultado}
          nueva={nueva}
          usado={usado}
          otros={otros}
        />
        <Grid container justify="center">
          {listaDeProductos ? (
            listaDeProductos.map((e) => (
              <Grid item md={4} key={e.id}>
                <ProductoCard
                  key={e.id}
                  title={e.title}
                  price={e.price}
                  thumbnail={e.thumbnail.replace("I.jpg", "B.jpg")}
                  sold_quantity={e.sold_quantity}
                  condition={e.condition}
                  available_quantity={e.available_quantity}
                />
              </Grid>
            ))
          ) : (
            <div>...</div>
          )}
        </Grid>
        <Pagination count={contador} page={page} onChange={handleChange} />
      </div>
    );
  } else {
    return (
      <div>
        <h6>...</h6>
      </div>
    );
  }
}
