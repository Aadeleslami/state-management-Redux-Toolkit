import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { buyMilk } from "../redux/milk/milkAction";
function MilkContainer() {
    const milk = useSelector((state) => state.milk);
     const dispatch = useDispatch();
  return (
    <div>
      <h2>Milk Number:{milk.numOfMilk}</h2>
      <button onClick={()=>dispatch(buyMilk())}>buy milk</button>
    </div>
  );
}

export default MilkContainer;
