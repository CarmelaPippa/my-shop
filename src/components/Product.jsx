import { Link } from "react-router-dom";
import ButtonAddCart from "./ButtonAddCart";

// eslint-disable-next-line react/prop-types
export default function Product({ id, name, price, description, image }) {
  return (
    <div className="product-box">
      <Link to={`/${id}`}>
        <img src={image} alt={name} />
        <div className="product-text">
          <h3>{name}</h3>
          <h4>{price} Sek</h4>
        </div>
        <div>
          <p>{description}</p>
        </div>
      </Link>
      <ButtonAddCart product={id}></ButtonAddCart>
    </div>
  );
}
