import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import Item from "./Item";

const Cart = () => {
  const cart = useSelector((state) => state.cart.cart);
  console.log(cart);
  const [total, setTotal] = useState(0);
  const calTotal = () => {
    const result = cart.reduce((acc, cv) => {
      return acc + cv.price;
    }, 0);
    setTotal(result);
  };

  useEffect(() => {
    calTotal();
  }, [cart]);

  return (
    <div className="my-5">
      <div className="row">
        <div className="col-7 py-5 ">
          {cart.length > 0 ? (
            cart?.map((c) => <Item key={c.id} product={c} />)
          ) : (
            <h2>No Item selected</h2>
          )}
        </div>
        {cart.length > 0 && (
          <div className="col-5 py-5 ">
            <h4 className="text-primary">Total Price</h4>
            <h2 className="text-warning">${total}</h2>
          </div>
        )}
      </div>
    </div>
  );
};

export default Cart;
