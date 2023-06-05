import PropTypes from 'prop-types';
import { useContext, useEffect, useState } from 'react';
import { getAllShops } from 'services/api/baseApi';
import MyContext from 'services/MyContext';
import s from './ShopsList.module.css';
import { save } from 'services/localStorage';
import { SELECTED_SHOP_ID_LS } from 'services/constants';

const ShopsList = ({ setShop }) => {
  const [shops, setShops] = useState([]);
  const [isActiveShopId, setIsActiveShopId] = useState('');
  const [isSelect, setIsSelect] = useState(false);
  const { setSelectedDishes } = useContext(MyContext);

  useEffect(() => {
    getAllShops().then(data => {
      if (!data) return;
      setShops(data);
    });
  }, []);

  const handleShopClick = id => {
    if (isSelect) return;
    setShop(id);
    setIsActiveShopId(id);
    setIsSelect(true);
  };

  const handleIsActiveReset = () => {
    setIsSelect(false);
    setShop('');
    setIsActiveShopId('');
    setSelectedDishes([]);
    save(SELECTED_SHOP_ID_LS, '');
  };

  return (
    <div className={s.wrapperShopsList}>
      <h2 className={s.listTitle}>Shops:</h2>
      {shops.length === 0 && (
        <p className={s.absenceList}>No shops available nearby</p>
      )}
      {shops.length > 0 && (
        <ul className={s.list}>
          {shops.map(({ _id, shop }) => (
            <li
              key={_id}
              className={s.itemList}
              onClick={() => handleShopClick(_id)}
              disabled={_id !== isActiveShopId && isActiveShopId !== ''}
            >
              {shop}
            </li>
          ))}
        </ul>
      )}

      <button type="button" onClick={handleIsActiveReset}>
        Reset
      </button>
    </div>
  );
};

ShopsList.propTypes = {};

export default ShopsList;
