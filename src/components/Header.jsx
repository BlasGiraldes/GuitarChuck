import "react-toastify/dist/ReactToastify.css";
import { useState, useMemo } from "react";
import useCart from "../hooks/useCart";
import ProjectOverview from "./ProjectOverview";

export default function Header({
  cart,
  removeFromCart,
  increaseQuantity,
  decreaseQuantity,
  clearCart,
}) {
  const [animateCart, setAnimateCart] = useState(false);
  const [showSidebar, setShowSidebar] = useState(false);

  const isEmpty = useMemo(() => cart.length === 0, [cart]);
  const cartTotal = useMemo(
    () => cart.reduce((total, item) => total + item.quantity * item.price, 0),
    [cart]
  );

  const formatPrice = (price) => price.toLocaleString("es-AR");

  return (
    <>
      <header className="py-5 header">
        <div className="container-xl">
          <div className="row justify-content-center justify-content-md-between align-items-center">

            {/* Logo */}
            <div className="col-8 col-md-3">
              <a href="index.html">
                <img
                  className="img-fluid"
                  src="/img/logo2.svg"
                  alt="logo GuitarChuck"
                />
              </a>
            </div>

            {/* Nav derecha */}
            <nav className="col-md-6 mt-5 d-flex align-items-center justify-content-end gap-4">

              {/* Link informativo / portfolio */}
              <button
                type="button"
                onClick={() => setShowSidebar(true)}
                className="btn-neon-chromatic p-0 bg-transparent border-0"
                style={{ fontSize: "0.9rem" }}
              >
                Cómo lo hice
              </button>


              {/* Carrito (acción principal) */}
              <div className="carrito">
                <img
                  className={`img-fluid ${animateCart ? "cart-animate" : ""}`}
                  src="/img/carrito.png"
                  alt="carrito de compras"
                />

                <div id="carrito" className="bg-white p-3">
                  {isEmpty ? (
                    <p className="text-center">El carrito está vacío</p>
                  ) : (
                    <>
                      <table className="w-100 table">
                        <thead>
                          <tr>
                            <th>Imagen</th>
                            <th>Nombre</th>
                            <th>Precio</th>
                            <th>Cantidad</th>
                            <th></th>
                          </tr>
                        </thead>
                        <tbody>
                          {cart.map((guitar) => (
                            <tr key={guitar.id}>
                              <td>
                                <img
                                  className="img-fluid"
                                  src={`/img/${guitar.image}.jpg`}
                                  alt={guitar.name}
                                />
                              </td>
                              <td>{guitar.name}</td>
                              <td className="fw-bold">
                                ${formatPrice(guitar.price)}
                              </td>
                              <td className="d-flex align-items-center gap-2">
                                <button
                                  type="button"
                                  className="btn btn-dark"
                                  onClick={() => decreaseQuantity(guitar.id)}
                                >
                                  -
                                </button>
                                {guitar.quantity}
                                <button
                                  type="button"
                                  className="btn btn-dark"
                                  onClick={() => increaseQuantity(guitar.id)}
                                >
                                  +
                                </button>
                              </td>
                              <td>
                                <button
                                  className="btn btn-danger"
                                  type="button"
                                  onClick={() => removeFromCart(guitar.id)}
                                >
                                  X
                                </button>
                              </td>
                            </tr>
                          ))}
                        </tbody>
                      </table>

                      <p className="text-end">
                        Total a pagar{" "}
                        <span className="fw-bold">
                          ${formatPrice(cartTotal)}
                        </span>
                      </p>
                    </>
                  )}

                  <button
                    className="btn btn-dark w-100 mt-3 p-2"
                    onClick={clearCart}
                  >
                    Vaciar Carrito
                  </button>
                </div>
              </div>
            </nav>
          </div>
        </div>
      </header>

      {/* Menú lateral */}
      <div
        className={`sidebar-overlay ${showSidebar ? "visible" : ""}`}
        onClick={() => setShowSidebar(false)}
      ></div>

      <div className={`sidebar-project-wrapper ${showSidebar ? "open" : ""}`}>
        <ProjectOverview onClose={() => setShowSidebar(false)} />
      </div>
    </>
  );
}
