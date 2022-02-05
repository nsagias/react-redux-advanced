import { useSelector, useDispatch } from 'react-redux';
import { RootState, AppDispatch} from '../store/index';
import { uiActions } from '../store/ui-slice';
import { IToggleHandler } from '../UI/card.models'
import CartButton from '../Cart/CartButton';
import classes from './MainHeader.module.css';


const MainHeader: React.FC = (props) => {
  const dispatch = useDispatch<AppDispatch>();
  const toggle = useSelector((state: RootState) => state.uiSlice.cartIsVisible)
  
  const toggleHandler: IToggleHandler = () => {
    dispatch ( uiActions.toggle() );
  }

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
