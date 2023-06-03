import PropTypes from 'prop-types';
import ImageWrapper from 'components/ImageWrapper';
import s from './ShoppingCartItem.module.css';

const ShoppingCartItem = ({ id, title, price, amount }) => {
  return (
    <li className={s.item}>
      <ImageWrapper cls={s.wrapperImg} />

      <div className={s.wrapperDesr}>
        <p className={s.title}>{title}</p>
        <p className={s.price}>
          Price: <span className="wrapperPrice">{price}</span>
        </p>
        <input
          type="number"
          name="amount"
          min="0"
          className={s.amount}
          placeholder="0"
        />
      </div>
    </li>
  );
};

ShoppingCartItem.propTypes = {};

export default ShoppingCartItem;
