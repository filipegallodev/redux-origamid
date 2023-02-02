import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchFotos, selectOverFiveYear } from "./store/fotos";

const Fotos = () => {
  const dispatch = useDispatch();
  const { loading, error } = useSelector((state) => state.fotos);
  const data = useSelector(selectOverFiveYear);

  useEffect(() => {
    dispatch(fetchFotos(1));
  }, [dispatch]);

  if (loading) return <div>Carrregando...</div>;
  if (error) return <div>{error}s</div>;
  if (!data) return null;
  return (
    <ul>
      {data.map((foto) => (
        <li key={foto.id}>
          {foto.title} | {foto.idade}
        </li>
      ))}
    </ul>
  );
};

export default Fotos;
