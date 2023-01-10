import React from "react"
import Nav from "./Nav"

type PropsType = {
    viewCart: boolean,
    setViewCart: React.Dispatch<React.SetStateAction<boolean>>,
}

const Header = ({viewCart, setViewCart}: PropsType ) => {
    const content = (
        <header className="p-[0.25em] my-0 mx-[1em]">
            <div className="flex justify-between mb-[0.5em]">
                <h1 className="text-3xl font-bold">Acme Co.</h1>
                <div className="text-right">
                    <p>Total Items: </p>
                    <p>Total Price: </p>
                </div>
            </div>
            <Nav viewCart={viewCart} setViewCart={setViewCart} />
        </header>
    )
  return content;
}

export default Header