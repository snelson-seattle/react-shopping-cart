import React from "react";

type PropsType = {
  viewCart: boolean;
  setViewCart: React.Dispatch<React.SetStateAction<boolean>>;
};

const Nav = ({ viewCart, setViewCart }: PropsType) => {
  const button = viewCart ? (
    <button onClick={() => setViewCart(false)}>View Products</button>
  ) : (
    <button onClick={() => setViewCart(true)}>View Cart</button>
  );

  const content = <nav className="flex justify-end gap-[0.5em]">{button}</nav>;

  return content;
};

export default Nav;
