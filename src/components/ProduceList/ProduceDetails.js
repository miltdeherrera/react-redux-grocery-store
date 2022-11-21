import { addProductCart } from '../../store/cart';
import { useDispatch } from 'react-redux';
import { changeLikeProduce } from '../../store/produce';

function ProduceDetails({ produce }) {
  const cartItem = {};
  const dispatch = useDispatch();
  
  const addProductClick = () => {
    dispatch(addProductCart(produce.id));
  }

  const changeLike = () => {
    dispatch(changeLikeProduce(produce.id));
  }

  return (
    <li className="produce-details">
      <span>{produce.name}</span>
      <span>
        <button
          className={"like-button" + (produce.liked ? " selected" : "")}
          onClick={changeLike}
        >
          <i className={"fas fa-heart"} />
        </button>
        <button
          className={"plus-button" + (cartItem ? " selected" : "")}
          onClick={addProductClick}
        >
          <i className="fas fa-plus" />
        </button>
      </span>
    </li>
  );
}

export default ProduceDetails;