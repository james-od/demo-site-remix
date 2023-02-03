import React from "react";

const Cell = ({active, onClick}) => {

  let [clicked, setClicked] = React.useState(false);

  return(
    <td 
      className={active ? "cell-active" : (clicked ? "cell-clicked" : "cell-inactive")}
      onClick={onClick}
      onMouseDown={() => setClicked(true)}
      onMouseUp={() => setClicked(false)}>
    </td>
  )
}

export default Cell;