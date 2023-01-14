import useCart from "../hooks/useCart";
import useProducts from "../hooks/useProducts";
import { UseProductsContextType } from "../context/ProductsProvider";
import { ReactElement } from "react";
import Product from "./Product";

const ProductList = () => {
  const {dispatch, REDUCER_ACTIONS, cart} = useCart();
  const {products} = useProducts();

  let content: ReactElement | ReactElement[] = <p>Loading...</p>;

  if(products?.length) {
    content = products.map(product => {
      const inCart: boolean = cart.some(item => item.sku === product.sku);

      return (
        <Product key={product.sku} product={product} dispatch={dispatch} REDUCER_ACTIONS={REDUCER_ACTIONS} inCart={inCart} />
      )
    })
  }

  return (
    <main className="flex-wrap justify-between">
      {content}
    </main>
  )
}

export default ProductList