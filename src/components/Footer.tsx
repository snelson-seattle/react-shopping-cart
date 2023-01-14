import useCart from "../hooks/useCart"

type PropsType = {
    viewCart: boolean,
}

const Footer = ({viewCart}: PropsType) => {
  const {totalItems, totalPrice} = useCart();
  const year: number = new Date().getFullYear();


  const content = viewCart ? <p>Shopping Cart &copy; {year}</p> : (
    <>
      <p>Total Items: {totalItems}</p>
      <p>Total Price: {totalPrice}</p>
      <p>Shopping Cart &copy; {year}</p>
    </>
  )

  return (
    <footer className="flex flex-grow flex-nowrap justify-end">
      {content}
    </footer>
  )
}

export default Footer