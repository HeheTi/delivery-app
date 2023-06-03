import PropTypes from 'prop-types';
import HistoryItemList from './HistoryItemList';
import s from './HistoryList.module.css';

const HistoryList = ({ orders = [] }) => {
  return (
    <ul className={s.wrapperItem}>
      {orders.map(({ id, totalPrice, order }) => (
        <li key={id} className={s.item}>
          <HistoryItemList infoListOrder={order} />
          <p className={s.wrapperTotalPrice}>
            Total price: <span>{totalPrice}</span>
          </p>
        </li>
      ))}
    </ul>
  );
};

HistoryList.propTypes = {};

export default HistoryList;
