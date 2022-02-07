import { FC } from 'react';
import { useDispatch } from 'react-redux';
import { AppDispatch} from '../store/index';
import { uiActions } from '../store/ui-slice';
import { IToggleCartHandler } from './cart.models';
import classes from './CartButton.module.css';

const CartButton: FC = (props) => {
  const dispatch = useDispatch<AppDispatch>();
 

  const toggleCartHandler: IToggleCartHandler = () => {
    dispatch ( uiActions.toggle() );
  }

  return (
    <button className={classes.button} onClick={toggleCartHandler}>
      <span>My Cart</span> 
      <span className={classes.badge}>1</span>
    </button>
  );
};

export default CartButton;
