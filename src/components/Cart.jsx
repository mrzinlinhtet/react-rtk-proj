import { useDispatch } from 'react-redux';
import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux'
import { removeFromCart } from '../services/cartSlice';
import Items from './Items';

const Cart = () => {
    const cart = useSelector((state) => state.cart);
    const dispatch = useDispatch();
    console.log(cart);
    const [total,setTotal] = useState(0);
    const calTotal = () => {
        const result = cart.reduce((acc,cv) => {
            return acc + cv.price;
        },0)
        setTotal(result);
    }

    useEffect(() => {
        calTotal();
    }, [cart]);
    
  return (
    <div className="my-5">
      <div className="row">
        <div className="col-7 py-5 ">Cart Item
        {cart?.map(c => (<Items key={c.id} className='mb-5'>
            <img src={c?.image} height="100px" alt="" />
            <p>{c.title}</p>
            <p>${c?.price}</p>
            <button onClick={()=> dispatch(removeFromCart(c))} className="btn btn-danger btn-sm">
                delete
            </button>
        </Items>))}
        </div>
        <div className="col-5 py-5 ">
            <h4 className='text-primary'>Total Price</h4>
            <h2 className='text-warning'>${total}</h2>
        </div>
      </div>
    </div>
  );
};

export default Cart;
