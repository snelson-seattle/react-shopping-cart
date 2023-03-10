import React from "react"
import Nav from "./Nav"
import useCart from "../hooks/useCart"

type PropsType = {
    viewCart: boolean,
    setViewCart: React.Dispatch<React.SetStateAction<boolean>>,
}

const Header = ({viewCart, setViewCart}: PropsType ) => {
    const {totalItems, totalPrice} = useCart();

    const content = (
        <header className="bg-white sticky top-0 z-[1] border-b border-solid border-[#000]">
            <div className="flex justify-between mb-[0.5em]">
                <h1 className="text-3xl font-bold">Acme Co.</h1>
                <div className="text-right">
                    <p>Total Items: {totalItems}</p>
                    <p>Total Price: {totalPrice}</p>
                </div>
            </div>
            <Nav viewCart={viewCart} setViewCart={setViewCart} />
        </header>
    )
    
  return content;
}

export default Header