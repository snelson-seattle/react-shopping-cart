import React, { ChangeEvent, ReactElement } from "react";
import {
  CartItemType,
  ReducerAction,
  ReducerActionType,
} from "../context/CartProvider";

type PropsType = {
  item: CartItemType;
  dispatch: React.Dispatch<ReducerAction>;
  REDUCER_ACTIONS: ReducerActionType;
};

const CartItem = ({ item, dispatch, REDUCER_ACTIONS }: PropsType) => {
  const img: string = new URL(`../images/${item.sku}.jpg`, import.meta.url)
    .href;

  const lineTotal: number = item.qty * item.price;
  const highestQty: number = 20 > item.qty ? 20 : item.qty;

  const optionValues: number[] = [...Array(highestQty).keys()].map(i => i + 1)

  const options: ReactElement[] = optionValues.map((value) => {
    return <option key={`opt${value}`} value={value}>{value}</option>;
  });

  const changeQty = (e: ChangeEvent<HTMLSelectElement>) => {
    dispatch({
      type: REDUCER_ACTIONS.QUANTITY,
      payload: { ...item, qty: Number(e.target.value) },
    });
  };

  const removeItem = () => {
    return dispatch({ type: REDUCER_ACTIONS.REMOVE, payload: item });
  };

  const content = (
    <li className="grid grid-cols-cart-item gap-2 mb-[0.5em]">
      <img src={img} alt={item.name} className="hidden min-w-[68px]" />
      <div aria-label="Item Name">{item.name}</div>
      <div aria-label="Price Per Item">
        {new Intl.NumberFormat("en-US", {
          style: "currency",
          currency: "USD",
        }).format(item.price)}
      </div>
      <label htmlFor="itemQty" className="absolute left-[-10000px]">
        Item Quantity
      </label>
      <select
        name="itemQty"
        id="itemQty"
        className="max-h-[48px]"
        value={item.qty}
        aria-label="Item Quantity"
        onChange={changeQty}
      >
        {options}
      </select>

      <div className="hidden text-center" aria-label="Line Item Subtotal">
        {new Intl.NumberFormat("en-US", {
          style: "currency",
          currency: "USD",
        }).format(lineTotal)}
      </div>
      <button
        className="max-h-[48px] justify-self-end"
        aria-label="Remove Item From Cart"
        title="Remove Item From Cart"
        onClick={removeItem}
      >
        ❌
      </button>
    </li>
  );

  return content;
};

export default CartItem;
