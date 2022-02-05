import { useSelector, useDispatch } from 'react-redux';
import { RootState, AppDispatch} from '../store/index';
import { uiActions } from '../store/ui-slice';
import { IToggleCartHandler } from './cart.models';
import classes from './CartButton.module.css';

const CartButton: React.FC = (props) => {
  const dispatch = useDispatch<AppDispatch>();
  const toggle = useSelector((state: RootState) => state.uiSlice.cartIsVisible)
  

  const toggleCartHandler: IToggleCartHandler = () => {
    dispatch ( uiActions.toggle() );
  }

  return (
    <button className={classes.button}>
      <span>My Cart</span>
      <span className={classes.badge}>1</span>
    </button>
  );
};

export default CartButton;
