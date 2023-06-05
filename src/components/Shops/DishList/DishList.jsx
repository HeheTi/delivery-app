import PropTypes from 'prop-types';
import DishListItem from './DishListItem';
import s from './DishList.module.css';
import { useContext, useEffect, useState } from 'react';
import { getShopDishsById } from 'services/api/baseApi';
import MyContext from 'services/MyContext';

const DishList = ({ shopId }) => {
  const [dishs, setDishs] = useState([]);
  const { setSelectedDishes } = useContext(MyContext);

  const addedDishInShopCard = dish => {
    setSelectedDishes(prevDishes => {
      const existingDish = prevDishes.find(item => item.id === dish.id);

      if (existingDish) {
        const updatedDishes = prevDishes.map(item =>
          item.id === dish.id ? { ...item, amount: item.amount + 1 } : item
        );
        return updatedDishes;
      }
      return [...prevDishes, { ...dish, amount: 1 }];
    });
  };

  useEffect(() => {
    if (!shopId) {
      setDishs([]);
      return;
    }
    getShopDishsById(shopId).then(data => {
      if (!data) return;
      setDishs(data);
    });
  }, [shopId]);

  return (
    <div className={s.wrapperDishList}>
      {dishs.length === 0 && (
        <p className={s.absenceList}>Select a store to see the menu</p>
      )}

      {dishs.length > 0 && (
        <ul className={s.wrapperList}>
          {dishs.map(({ _id, title, price }) => (
            <DishListItem
              key={_id}
              id={_id}
              title={title}
              price={price}
              onAddDish={addedDishInShopCard}
            />
          ))}
        </ul>
      )}
    </div>
  );
};

DishList.propTypes = {};

export default DishList;
