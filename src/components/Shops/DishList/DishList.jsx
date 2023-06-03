import PropTypes from 'prop-types';
import DishListItem from './DishListItem';
import s from './DishList.module.css';

const dishs = [
  { id: 1, title: 'Big Big Burger', price: 100, amount: 1 },
  { id: 2, title: 'Big Big Burger', price: 78, amount: 1 },
  { id: 3, title: 'Big Big Burger', price: 444, amount: 1 },
  { id: 4, title: 'Big Big Burger', price: 566, amount: 1 },
  { id: 5, title: 'Big Big Burger', price: 160, amount: 1 },
  { id: 6, title: 'Big Big Burger', price: 104, amount: 1 },
  { id: 7, title: 'Big Big Burger', price: 97, amount: 1 },
];

const DishList = props => {
  return (
    <div className={s.wrapperDishList}>
      {dishs.length === 0 && (
        <p className={s.absenceList}>No dishs in this place</p>
      )}

      {dishs.length > 0 && (
        <ul className={s.wrapperList}>
          {dishs.map(({ id, title, price }) => (
            <DishListItem key={id} title={title} price={price} />
          ))}
        </ul>
      )}
    </div>
  );
};

DishList.propTypes = {};

export default DishList;
