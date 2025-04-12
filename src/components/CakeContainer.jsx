import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { buyCake } from "../redux/cake/cakeActions";
function CakeContainer() {
  const state = useSelector((state) => state.cake);
  
  const dispatch = useDispatch();
  const [value, setValue] = useState(0);

  return (
    <div>
      <h2>Cake Number: {state.numOfCake}</h2>
      <input
        type="number"
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
      <button onClick={() => dispatch(buyCake(value))}>
        BUY CAKE
      </button>
    </div>
  );
}

export default CakeContainer;
