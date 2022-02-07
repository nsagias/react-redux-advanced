import { FC } from 'react';
import { IClassName } from './card.models';
import classes from './Card.module.css';

const Card: FC<IClassName> = (props) => {
  return (
    <section
      className={`${classes.card} ${props.className ? props.className : ''}`}
    >
      {props.children}
    </section>
  );
};

export default Card;
