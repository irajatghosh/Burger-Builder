import React from "react";
import Logo from "../../Logo/Logo";
import NavigationItems from "../Navigationitems/NavigationItems";
import classes from "./SideDrawer.css";
import BackDrop from "../../UI/BackDrop/BackDrop";
import Aux from "../../../hoc/Auxiliary/Auxiliary";

const sidedrawer = props => {
  let attachedClasses = [classes.Sidedrawer, classes.Close];
  if (props.open) {
    attachedClasses = [classes.Sidedrawer, classes.Open];
  }
  return (
    <Aux>
      <BackDrop show={props.open} clicked={props.closed} />
      <div className={attachedClasses.join(" ")}>
        <div className={classes.Logo}>
          <Logo />
        </div>

        <nav />
        <NavigationItems />
      </div>
    </Aux>
  );
};

export default sidedrawer;
