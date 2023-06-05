import PropTypes from 'prop-types';
import { toast } from 'react-hot-toast';
import ImageWrapper from 'components/ImageWrapper/ImageWrapper';
import s from './DishListItem.module.css';

const DishListItem = ({ id, title, price, onAddDish }) => {
  const handleAddDish = dish => {
    onAddDish(dish);
    toast.success(`${dish.title} added to cart`);
  };

  return (
    <li className={s.item}>
      <ImageWrapper />

      <div className={s.wrapperInfo}>
        <p className={s.titleInfo}>{title}</p>
        <p className={s.priceInfo}>
          Price: <span className="wrapperPrice">{price}</span>
        </p>
        <button
          type="button"
          className={s.btn}
          onClick={() => handleAddDish({ id, title, price })}
        >
          add to Card
        </button>
      </div>
    </li>
  );
};

DishListItem.propTypes = {};

export default DishListItem;
