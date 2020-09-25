import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Typography from "@material-ui/core/Typography";
import CardHeader from "@material-ui/core/CardHeader";
import Avatar from "@material-ui/core/Avatar";
import { red } from "@material-ui/core/colors";
import CardActionArea from "@material-ui/core/CardActionArea";

import "../Estilos/ProductoCard.css";

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 345,
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
  },
  media: {
    height: 0,
    paddingTop: "56.25%", // 16:9
  },
  expand: {
    transform: "rotate(0deg)",
    marginLeft: "auto",
    transition: theme.transitions.create("transform", {
      duration: theme.transitions.duration.shortest,
    }),
  },
  expandOpen: {
    transform: "rotate(180deg)",
  },
  avatar: {
    backgroundColor: red[500],
  },
}));

export default function ProductoCard({
  id,
  title,
  price,
  thumbnail,
  sold_quantity,
  available_quantity,
  condition,
}) {
  const classes = useStyles();

  return (
    <div className="container">
      <Container>
        <CardActionArea>
          <Card className={classes.root}>
            <CardHeader
              avatar={
                <Avatar aria-label="recipe" className={classes.avatar}>
                  H
                </Avatar>
              }
              title={sold_quantity}
              subheader="Cantidad"
            />
            <CardMedia
              className={classes.media}
              image={thumbnail}
              title="Paella dish"
            />
            <CardContent>
              <Typography variant="body2" color="textSecondary" component="p">
                {title}
              </Typography>
              <Typography variant="body2" color="textPrimary" component="p">
                $ {price} Estado: {condition}
              </Typography>
              <Typography variant="body2" color="textPrimary" component="p">
                Cantidad Disponible: {available_quantity}
              </Typography>
            </CardContent>
          </Card>
        </CardActionArea>
      </Container>
    </div>
  );
}
