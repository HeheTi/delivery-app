import PropTypes from 'prop-types';
import s from './DishListItem.module.css';
import ImageWrapper from 'components/ImageWrapper/ImageWrapper';

const DishListItem = ({ id, title, price }) => {
  return (
    <li className={s.item}>
      <ImageWrapper />

      <div className={s.wrapperInfo}>
        <p className={s.titleInfo}>{title}</p>
        <p className={s.priceInfo}>
          Price: <span className="wrapperPrice">{price}</span>
        </p>
        <button type="button" className={s.btn}>
          add to Card
        </button>
      </div>
    </li>
  );
};

DishListItem.propTypes = {};

export default DishListItem;
