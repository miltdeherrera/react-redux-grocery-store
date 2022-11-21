import { useState, useEffect } from 'react';
import { removeProductCart, addOneProductCart, removeOneProductCart } from '../../store/cart';
import { useDispatch } from 'react-redux';

function CartItem({ item }) {
  const [count, setCount] = useState(item.count);
  const dispatch = useDispatch();

  useEffect(() => {
    setCount(item.count);
  }, [item.count]);

  const removeProduct = () => {
    dispatch(removeProductCart(item.id));
  }

  const addOneProduct = () => {
    dispatch(addOneProductCart(item.id));
  }

  const removeOneProduct = () => {
    if (item.count - 1 <= 0 || count <= 0) {
      dispatch(removeProductCart(item.id));
    } else {
      dispatch(removeOneProductCart(item.id));
    }
  }

  return (
    <li className="cart-item">
      <div className="cart-item-header">{item.name}</div>
      <div className="cart-item-menu">
        <input
          type="number"
          value={count}
          onChange={() => count}
        />
        <button
          className="cart-item-button"
          onClick={addOneProduct}
        >
          +
        </button>
        <button
          className="cart-item-button"
          onClick={removeOneProduct}
        >
          -
        </button>
        <button
          className="cart-item-button"
          onClick={removeProduct}
        >
          Remove
        </button>
      </div>
    </li>
  );
}

export default CartItem;