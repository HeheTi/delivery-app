import PropTypes from 'prop-types';
import ImageWrapper from 'components/ImageWrapper';
import s from './HistoryItemList.module.css';

const HistoryItemList = ({ infoListOrder = [] }) => {
  return (
    <ul className={s.list}>
      {infoListOrder.map(({ id, title, price, amount }) => (
        <li key={id} className={s.item}>
          <ImageWrapper />
          <div className={s.wrapperDescr}>
            <p>{title}</p>
            <p>Price: {price}</p>
            <p>Amount: {amount}</p>
          </div>
        </li>
      ))}
    </ul>
  );
};

HistoryItemList.propTypes = {};

export default HistoryItemList;
