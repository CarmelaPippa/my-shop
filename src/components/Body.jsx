/* eslint-disable react/prop-types */
import Product from "./Product";
import { products } from "../data";

export default function Body() {
  return (
    <div className="products__container">
      {products.map((product) => {
        const { id, name, price, image } = product;
        return (
          <Product name={name} price={price} image={image} key={id} id={id} />
        );
      })}
    </div>
  );
}
