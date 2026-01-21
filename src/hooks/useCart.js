import { useEffect, useState } from "react";
import { db } from "../data/db";
import { toast } from "react-toastify";

const useCart = () => {
  const initialCart = () => {
    const localStorageCart = localStorage.getItem("cart");
    return localStorageCart ? JSON.parse(localStorageCart) : [];
  };

  const MAX_ITEMS = 5;
  const MIN_ITEMS = 1;

  // Estado
  const [data] = useState(db);
  const [cart, setCart] = useState(initialCart);

  // Efectos
  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

  // Funciones de carrito
  const addToCart = (item) => {
    const itemExists = cart.findIndex((guitar) => guitar.id === item.id);

    if (itemExists >= 0) {
      if (cart[itemExists].quantity >= MAX_ITEMS) return;

      const updatedCart = [...cart];
      updatedCart[itemExists].quantity += 1;
      setCart(updatedCart);
    } else {
      setCart([...cart, { ...item, quantity: 1 }]);
      toast.success(`${item.name} agregado correctamente!`, {
        position: "top-right",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
      });
    }
  };

  const removeFromCart = (id) => {
    const guitarName = cart.find((guitar) => guitar.id === id)?.name;
    setCart(cart.filter((guitar) => guitar.id !== id));
    toast.error(`${guitarName} eliminado correctamente`, {
      position: "top-right",
      autoClose: 2000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
    });
  };

  const increaseQuantity = (id) => {
    setCart(
      cart.map((item) =>
        item.id === id && item.quantity < MAX_ITEMS
          ? { ...item, quantity: item.quantity + 1 }
          : item,
      ),
    );
  };

  const decreaseQuantity = (id) => {
    setCart(
      cart
        .map((item) =>
          item.id === id ? { ...item, quantity: item.quantity - 1 } : item,
        )
        .filter((item) => item.quantity >= MIN_ITEMS),
    );
  };

  const clearCart = () => {
    setCart([]);
    toast.info("Carrito vaciado correctamente", {
      position: "top-right",
      autoClose: 2000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
    });
  };

  return {
    data,
    cart,
    addToCart,
    removeFromCart,
    increaseQuantity,
    decreaseQuantity,
    clearCart,
  };
};

export default useCart;
