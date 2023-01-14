import React, { ReactElement } from "react";
import { ProductType } from "../context/ProductsProvider";
import { ReducerActionType, ReducerAction } from "../context/CartProvider";

type PropsType = {
  inCart: boolean;
  product: ProductType;
  REDUCER_ACTIONS: ReducerActionType;
  dispatch: React.Dispatch<ReducerAction>;
};

const Product = ({
  inCart,
  product,
  REDUCER_ACTIONS,
  dispatch,
}: PropsType): ReactElement => {
  const img: string = new URL(`../images/${product.sku}.jpg`, import.meta.url)
    .href;

  const addToCart = () => {
    dispatch({ type: REDUCER_ACTIONS.ADD, payload: { ...product, qty: 1 } });
  };

  const itemInCart = inCart ? " → Item in Cart: ✔️" : null;

  const content = (
    <article className="w-[90%] mb-[1em]">
      <h3>{product.name}</h3>
      <img src={img} alt={product.name} className="max-w-[350px]" />
      <p>
        {new Intl.NumberFormat("en-US", {
          style: "currency",
          currency: "USD",
        }).format(product.price)}
        {itemInCart}
      </p>
      <button onClick={addToCart}>Add to Cart</button>
    </article>
  );

  return content;
};

export default Product;
