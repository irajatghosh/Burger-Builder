import React from "react";
import classes from "./BackDrop.css";

const backdrop = props =>
  props.show ? (
    <div className={classes.Backdrop} onClick={props.clicked} />
  ) : null;

export default backdrop;
