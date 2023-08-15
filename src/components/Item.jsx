import { useDispatch } from 'react-redux'
import {AiFillDelete} from 'react-icons/ai'
import { removeFromCart } from '../services/cartSlice';

const Item = ({product}) => {
    const dispatch = useDispatch();
  return (
    <div className="card" style={{ width: "18rem" }}>
      <div className="card-body">
        <img
          className="d-block mx-auto mb-3"
          src={product.image}
          width="200px"
          height="200px"
          alt=""
        />
        <h5>{product?.title.substring(0, 20)}...</h5>
        <p className="fw-bold text-primary">${product?.price}</p>
        <button
          onClick={() => dispatch(removeFromCart(product))}
          className="btn btn-outline-danger"
        >
          <AiFillDelete />
        </button>
      </div>
    </div>
  );
};

export default Item;
