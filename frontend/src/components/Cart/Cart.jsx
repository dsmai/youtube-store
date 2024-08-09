import "./cart.css";
import "../Dogs/dogs.css";
import { CartContext } from "../../Contexts/CartContext";
import { useContext } from "react";

const Cart = () => {
  // consuming the CartContext
  const { cart, modifyCart } = useContext(CartContext);
  const clearCart = () => {
    modifyCart((prevItems) => [{}]);
  };

  return (
    <>
      <section className="cart-container">
        <header className="cart-header">CHECKOUT</header>
        <div className="cart-items">
          {cart.slice(1).map((item) => {
            return (
              <div className="cart-item">
                <img className="cart-item-img" src={item.imageUrl}/>
                {item.name} {item.des}
              </div>
            );
          })}
        </div>
        <button className="cart-clear-btn" onClick={clearCart}>CLEAR CART</button>
      </section>
    </>
  );
};

export default Cart;
