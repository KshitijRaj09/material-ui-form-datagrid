import { Grid, makeStyles, Typography } from "@material-ui/core";
import React, { useState } from "react";
import Button from "./CustomButton";

const useStyles = makeStyles((theme) => ({
  root: {
    margin: "50px auto 0",
    width: "50%",
    justifyContent: "center",
    flexDirection: "column",
    [theme.breakpoints.down("md")]: {
      margin: "2px auto",
      width: "95%",
    },
  },

  button: {
    width: "90%",
    margin: "5px 15px",
  },
}));

const Counter = () => {
  const classes = useStyles();
  const [counter, setCounter] = useState(0); //state for Counter

  //To Increment Counter
  const incrementCounter = () => {
    setCounter((counter) => counter + 1);
  };

  // To reset Counter
  const resetCounter = () => {
    setCounter(0);
  };

  return (
    <Grid container className={classes.root}>
      <Grid container item justify="center">
        <Typography variant="h6">{counter}</Typography>
      </Grid>
      <Grid container item direction="row" justify="center">
        <Grid item xs={6}>
          <Button
            click={incrementCounter}
            text="Increment"
            className={classes.button}
          />
        </Grid>
        <Grid item xs={6}>
          <Button
            click={resetCounter}
            text="Reset"
            className={classes.button}
          />
        </Grid>
      </Grid>
    </Grid>
  );
};

export default Counter;
