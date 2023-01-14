import useCart from "../hooks/useCart";
import { useState } from "react";
import CartItem from "./CartItem";

const Cart = () => {
  const [confirm, setConfirm] = useState(false);
  const { dispatch, REDUCER_ACTIONS, totalItems, totalPrice, cart } = useCart();

  const submitOrder = () => {
    dispatch({ type: REDUCER_ACTIONS.SUBMIT });
    setConfirm(true);
  };

  const content = confirm ? (
    <h2>Thank you for your order.</h2>
  ) : (
    <>
      <h2 className="absolute left-[-10000px]">Cart</h2>
      <ul className="p-0 mt-[0.5em]">
        {cart.map((item) => {
          return (
            <CartItem
              key={item.sku}
              item={item}
              dispatch={dispatch}
              REDUCER_ACTIONS={REDUCER_ACTIONS}
            />
          );
        })}
      </ul>
      <div className="flex flex-col gap-[1em]">
        <p>Total Items: {totalItems}</p>
        <p>Total Price: {totalPrice}</p>
        <button
          className="max-h-[48px] justify-self-end md:max-w-[300px]"
          disabled={!totalItems}
          onClick={submitOrder}
        >
          Place Order
        </button>
      </div>
    </>
  );

  return <main className="flex flex-col flex-nowrap gap-4 ">{content}</main>;
};

export default Cart;
