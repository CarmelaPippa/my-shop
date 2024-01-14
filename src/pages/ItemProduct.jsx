import { useParams } from "react-router-dom";

import Header from "../components/Header";
import ButtonAddCart from "../components/ButtonAddCart";

import { useEffect, useState } from "react";
import { products } from "../data";

export default function ItemProduct() {
  const { id } = useParams();
  const [item, setItem] = useState();

  useEffect(() => {
    const foundIdItem = products.find((product) => {
      return product.id === +id;
    });
    setItem(foundIdItem);
  }, [id]);

  if (!item) return <div>Loading</div>;

  const { name, price, image, description } = item || {};

  return (
    <>
      <Header></Header>
      <div>
        <img src={image} alt={name}></img>
        <div>
          <div>
            <h2>{name}</h2>
            <p>{description}</p>
          </div>
          <div>
            <h3>{price} Sek</h3>
            <ButtonAddCart></ButtonAddCart>
          </div>
        </div>
      </div>
    </>
  );
}
