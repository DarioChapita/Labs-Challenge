import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Pagination from "@material-ui/lab/Pagination";

const useStyles = makeStyles((theme) => ({
  root: {
    "& > *": {
      marginTop: theme.spacing(2),
    },
  },
}));

export default function Paginacion({ contador, page, handleChange }) {
  const classes = useStyles();

  const theme = createMuiTheme({
    palette: {
      primary: {
        main: "#FBF159",
      },
    },
  });
  return (
    <div className={classes.root}>
      <ThemeProvider theme={theme}>
        <Pagination
          count={contador}
          color="primary"
          page={page}
          onChange={handleChange}
        />
      </ThemeProvider>
    </div>
  );
}
