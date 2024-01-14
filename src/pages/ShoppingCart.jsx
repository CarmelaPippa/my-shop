import Header from "../components/Header";
import ProductCart from "../components/ProductCart";
import { products } from "../data";

export default function ShoppingCart() {
  let local = localStorage.getItem("cart") || "[]";
  local = JSON.parse(local);

  const productsCart2 = local.map((id) => {
    return products.find((product) => product.id === +id);
  });

  return (
    <>
      <Header></Header>
      <div className="products--array">
        {productsCart2.map((product) => {
          const { id, name, price, image } = product;
          return (
            <ProductCart
              name={name}
              price={price}
              image={image}
              key={id}
              id={id}
            />
          );
        })}
      </div>
    </>
  );
}
