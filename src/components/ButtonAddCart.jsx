/* eslint-disable react/prop-types */
export default function ButtonAddCart({ product }) {
  function handleAddCart() {
    let local = localStorage.getItem("cart") || "[]";
    local = JSON.parse(local);
    local.push(product);
    local = JSON.stringify(local);
    localStorage.setItem("cart", local);

    window.dispatchEvent(new Event("cart"));
  }

  return <button onClick={handleAddCart}>Add to Cart</button>;
}

// creare la lista
// quando clicco, aggiungo un elemento ad una lista
