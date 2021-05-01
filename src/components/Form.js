import { makeStyles, TextField } from "@material-ui/core";
import React, { useState } from "react";
import axios from "axios";
import CustomButton from "./CustomButton";

const useStyles = makeStyles((theme) => ({
  root: {
    margin: theme.spacing(1),
  },
  formField: {
    width: "70%",
    marginTop: "2px",
    [theme.breakpoints.down("sm")]: {
      width: "100%",
    },
  },
}));

const Form = (props) => {
  const classes = useStyles();
  const [input, setInput] = useState({
    Name: "",
    Email: "",
    Position: "",
  });

  const onChangeHandler = (event) => {
    setInput({
      ...input,
      [event.target.name]: event.target.value,
    });
  };

  const onSubmit = async (event) => {
    props.hideForm(input);
    try {
      // eslint-disable-next-line
      const response = await axios({
        method: "post",
        url: `https://608c2bb79f42b20017c3d852.mockapi.io/employees`,
        data: input,
      });
    } catch (error) {
      console.log(error.message);
    }
  };

  return (
    <div className={classes.root}>
      <TextField
        className={classes.formField}
        required
        label="Name"
        name="Name"
        placeholder="Enter Name"
        onChange={onChangeHandler}
        value={input.name}
      />
      <TextField
        className={classes.formField}
        required
        type="email"
        label="Email"
        name="Email"
        placeholder="Enter Email"
        onChange={onChangeHandler}
        value={input.email}
      />
      <TextField
        className={classes.formField}
        required
        label="Position"
        name="Position"
        placeholder="Your Position"
        onChange={onChangeHandler}
        value={input.position}
      />
      <CustomButton
        click={onSubmit}
        text="Submit Form"
        className={classes.formField}
      />
    </div>
  );
};

export default Form;
