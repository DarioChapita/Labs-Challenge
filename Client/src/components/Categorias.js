import React from "react";
// import Button from "@material-ui/core/Button";
// import Menu from "@material-ui/core/Menu";
// import MenuItem from "@material-ui/core/MenuItem";
//import { ThemeProvider, createMuiTheme } from "@material-ui/core/styles";

function Categorias({ resultado, nueva, usado, otros }) {
  // const theme = createMuiTheme({
  //   palette: {
  //     primary: {
  //       main: "#FBF159",
  //     },
  //   },
  // });

  if (resultado) {
    return (
      <div>
        <button type="submit" onClick={() => nueva("new")}>
          Nuevo
        </button>
        <button type="submit" onClick={() => usado("used")}>
          Usado
        </button>
        <button type="submit" onClick={() => otros("not_specified")}>
          Otros
        </button>
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

export default Categorias;
