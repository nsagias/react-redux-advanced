import { useSelector, useDispatch } from 'react-redux';
import { RootState, AppDispatch} from '../store/index';
import { uiAction } from '../store/ui-slice';
import CartButton from '../Cart/CartButton';
import classes from './MainHeader.module.css';


const MainHeader: React.FC = (props) => {
  const dispatch = useDispatch<AppDispatch>();
  const toggle = useSelector((state: RootState) => state.uiSlice.cartIsVisible)
  
  return (
    <header className={classes.header}>
      <h1>ReduxCart</h1>
      <nav>
        <ul>
          <li>
            <CartButton />
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default MainHeader;
