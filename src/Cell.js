import React from "react";
import "./Cell.css";

function Cell({ flipCellsAroundMe, isLit, position }) {
  const classes = `Cell ${isLit ? "Cell-lit" : ""}`;
  return <td className={classes} onClick={evnt => flipCellsAroundMe(position)}/>;
}

export default Cell;