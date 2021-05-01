import React from "react";
import { Button } from "@material-ui/core";

const CustomButton = (props) => {
  return (
    <Button
      variant="contained"
      color="secondary"
      className={props.className}
      onClick={props.click}
    >
      {props.text}
    </Button>
  );
};

export default CustomButton;
