import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { incrementar, reduzir } from "./store/contador";

const Contador = () => {
  const contador = useSelector((state) => state.contador);
  const dispatch = useDispatch();

  return (
    <div>
      <p>{contador}</p>
      <button onClick={() => dispatch(incrementar())}>Incrementar</button>
      <button onClick={() => dispatch(reduzir())}>Reduzir</button>
    </div>
  );
};

export default Contador;
