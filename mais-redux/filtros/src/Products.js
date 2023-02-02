import React from "react";
import { useSelector } from "react-redux";

const Products = () => {
  const { data } = useSelector((state) => state.products);
  console.log(data);

  return (
    <table>
      <thead>
        <tr>
          <th>nome</th>
          <th>cor</th>
          <th>preco</th>
        </tr>
      </thead>
      <tbody>
        {data.map(({ id, name, color, price }) => (
          <tr key={id}>
            <td>{name}</td>
            <td>{color}</td>
            <td>{price}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default Products;
