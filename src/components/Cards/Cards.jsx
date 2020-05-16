import React from "react";

import { Card, CardContent, Typography, Grid } from "@material-ui/core";
import CountUp from "react-countup";
import cx from "classnames";

import moment from "moment";

import classes from "./Cards.module.css";

const Cards = ({ data: { confirmed, recovered, deaths, lastUpdate } }) => {
  if (!confirmed) {
    return "Loading...";
  }
  return (
    <div className={classes.Container}>
      <Grid container spacing={4} justify="center">
        <Grid
          item
          xs={12}
          md={3}
          component={Card}
          className={cx(classes.card, classes.infected)}
        >
          <CardContent>
            <Typography variant="h6" gutterBottom>
              Infectados
            </Typography>
            <Typography variant="h4">
              <CountUp
                start={0}
                end={confirmed.value}
                duration={2.5}
                separator=","
              />
            </Typography>
            <Typography color="textPrimary">
              {moment(Date(lastUpdate)).format("DD/MM/YYYY")}
            </Typography>
          </CardContent>
        </Grid>

        <Grid
          item
          xs={12}
          md={3}
          component={Card}
          className={cx(classes.card, classes.recovered)}
        >
          <CardContent>
            <Typography variant="h6" gutterBottom>
              Recuperados
            </Typography>
            <Typography variant="h4">
              <CountUp
                start={0}
                end={recovered.value}
                duration={2.5}
                separator=","
              />
            </Typography>
            <Typography color="textSecondary">
              {moment(Date(lastUpdate)).format("DD/MM/YYYY")}
            </Typography>
          </CardContent>
        </Grid>

        <Grid
          item
          xs={12}
          md={3}
          component={Card}
          className={cx(classes.card, classes.deaths)}
        >
          <CardContent align="center">
            <Typography variant="h6" gutterBottom>
              Mortes
            </Typography>
            <Typography variant="h4">
              <CountUp
                start={0}
                end={deaths.value}
                duration={2.5}
                separator=","
              />
            </Typography>
            <Typography color="textSecondary">
              {moment(Date(lastUpdate)).format("DD/MM/YYYY")}
            </Typography>
          </CardContent>
        </Grid>
      </Grid>
    </div>
  );
};

export default Cards;
