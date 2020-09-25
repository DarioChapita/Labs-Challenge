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
  return (
    <div className={classes.root}>
      <Pagination
        count={contador}
        color="secondary"
        page={page}
        onChange={handleChange}
      />
    </div>
  );
}
