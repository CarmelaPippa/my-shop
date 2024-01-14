import { useEffect, useState } from "react";

/* eslint-disable react/prop-types */
export default function Cart() {
  const [countCart, setCountCart] = useState(0);

  useEffect(() => {
    let local = localStorage.getItem("cart") || "[]";
    local = JSON.parse(local);
    setCountCart(local.length);

    window.addEventListener("cart", () => {
      let local = localStorage.getItem("cart") || "[]";
      local = JSON.parse(local);
      setCountCart(local.length);
    });
  }, []);

  return <div>({countCart})</div>;
}
