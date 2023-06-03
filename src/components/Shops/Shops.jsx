import ShopsList from './ShopsList';
import DishList from './DishList';
import s from './Shops.module.css';

const Shops = () => {
  return (
    <div className={s.wrapperShopSection}>
      <ShopsList />
      <DishList />
    </div>
  );
};

export default Shops;
