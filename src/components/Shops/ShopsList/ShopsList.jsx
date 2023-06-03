import PropTypes from 'prop-types';
import s from './ShopsList.module.css';

const shops = [
  { id: 1, title: 'Mc Donny' },
  { id: 2, title: 'CFK' },
  { id: 3, title: 'etc.' },
  { id: 4, title: 'etc.' },
  { id: 5, title: 'etc.' },
  { id: 6, title: 'etc.' },
];

const ShopsList = props => {
  return (
    <div className={s.wrapperShopsList}>
      <h2 className={s.listTitle}>Shops:</h2>
      {shops.length === 0 && (
        <p className={s.absenceList}>No shops available nearby</p>
      )}
      {shops.length > 0 && (
        <ul className={s.list}>
          {shops.map(({ id, title }) => (
            <li key={id} className={s.itemList}>
              {title}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

ShopsList.propTypes = {};

export default ShopsList;
