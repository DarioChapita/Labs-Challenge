import React from "react";
import Button from "@material-ui/core/Button";
import { makeStyles } from "@material-ui/core/styles";
import { ThemeProvider, createMuiTheme } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    "& > *": {
      margin: theme.spacing(1),
    },
  },
}));

export default function Categorias({ resultado, nueva, usado, otros }) {
  const classes = useStyles();
  const theme = createMuiTheme({
    palette: {
      primary: {
        main: "#FBF159",
      },
    },
  });

  if (resultado) {
    return (
      <div className={classes.root}>
        <ThemeProvider theme={theme}>
          <Button
            type="submit"
            variant="contained"
            color="primary"
            onClick={() => nueva("new")}
          >
            Nuevo
          </Button>
          <Button
            type="submit"
            variant="contained"
            color="primary"
            onClick={() => usado("used")}
          >
            Usado
          </Button>
          <Button
            type="submit"
            variant="contained"
            color="primary"
            onClick={() => otros("not_specified")}
          >
            Otros
          </Button>
        </ThemeProvider>
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
