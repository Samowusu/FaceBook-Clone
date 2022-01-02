import React from "react";
import classes from "./RightPane.module.css";

function RightPane() {
  return (
    <div className={classes.rightPane}>
      <iframe
        src="https://web.facebook.com/?_rdc=1&_rdr"
        title="W3Schools Free Online Web Tutorials"
      ></iframe>
    </div>
  );
}

export default RightPane;
