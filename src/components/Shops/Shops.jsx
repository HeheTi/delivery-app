import { useEffect, useState } from 'react';
import ShopsList from './ShopsList';
import DishList from './DishList';
import { get, save } from 'services/localStorage';
import { SELECTED_SHOP_ID_LS } from 'services/constants';
import s from './Shops.module.css';

const Shops = () => {
  const [isSelectedShopId, setIsSelectedShopId] = useState(
    () => get(SELECTED_SHOP_ID_LS) || ''
  );

  useEffect(() => {
    if (!isSelectedShopId) return;
    const lsSelectId = get(SELECTED_SHOP_ID_LS);

    if (lsSelectId === isSelectedShopId) return;

    save(SELECTED_SHOP_ID_LS, isSelectedShopId);
  }, [isSelectedShopId]);

  return (
    <div className={s.wrapperShopSection}>
      <ShopsList setShop={setIsSelectedShopId} />
      <DishList shopId={isSelectedShopId} />
    </div>
  );
};

export default Shops;
