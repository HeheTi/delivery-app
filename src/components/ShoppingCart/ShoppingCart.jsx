import PropTypes from 'prop-types';
import ShoppingCartItem from './ShoppingCartItem';
import s from './ShoppingCart.module.css';

const dishs = [
  { id: 1, title: 'Big Big Burger', price: 100, amount: 1 },
  { id: 2, title: 'Big Big Burger', price: 78, amount: 1 },
  { id: 3, title: 'Big Big Burger', price: 444, amount: 1 },
  { id: 4, title: 'Big Big Burger', price: 566, amount: 1 },
  { id: 5, title: 'Big Big Burger', price: 160, amount: 1 },
  { id: 6, title: 'Big Big Burger', price: 104, amount: 1 },
  { id: 7, title: 'Big Big Burger', price: 97, amount: 1 },
];

const ShoppingCart = props => {
  return (
    <form className={s.form}>
      <div className={s.wrapperUserInfo}>
        <label htmlFor="shopping-cart-name">Name:</label>
        <input type="text" id="shopping-cart-name" name="username" />

        <label htmlFor="shopping-cart-email">Email:</label>
        <input type="email" id="shopping-cart-email" name="email" />

        <label htmlFor="shopping-cart-phone">Phone:</label>
        <input type="tel" id="shopping-cart-phone" name="phone" />

        <label htmlFor="shopping-cart-address">Address:</label>
        <input type="text" id="shopping-cart-address" name="address" />
      </div>

      <div>
        {dishs.length === 0 && <p className={s.info}>Please add dish</p>}
        {dishs.length > 0 && (
          <ul className={s.listOrders}>
            {dishs.map(({ id, title, price, amount }) => (
              <ShoppingCartItem
                key={id}
                id={id}
                title={title}
                price={price}
                amount={amount}
              />
            ))}
          </ul>
        )}

        <button type="button" className={s.btnCoupon}>
          Coupon code
        </button>

        <div className={s.wrapperTotalPrice}>
          <p>
            Total price: <span className={s.totalAmount}>999</span>
          </p>
          <button type="submit" className={s.btn}>
            Submit
          </button>
        </div>
      </div>
    </form>
  );
};

ShoppingCart.propTypes = {};

export default ShoppingCart;
