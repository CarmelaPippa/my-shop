// eslint-disable-next-line react/prop-types
export default function ProductCart({ name, price, image }) {
  return (
    <div className="product-cart">
      <img src={image} alt={name} />
      <div className="product-cart__element">
        <div className="product-cart__text-container">
          <h3>{name}</h3>
          <h4>{price} Sek</h4>
        </div>
        <div className="product-cart__text-container">
          <p>Quantity </p>
          <p>Remove</p>
        </div>
      </div>
    </div>
  );
}
