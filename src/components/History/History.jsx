import HistoryList from './HistoryList';
import HistoryForm from './HistoryForm';

const orders = [
  {
    id: 1,
    totalPrice: 999,
    order: [
      { id: 1, title: 'Big Big Burger', price: 100, amount: 1 },
      { id: 2, title: 'Big Big Burger', price: 788, amount: 6 },
      { id: 3, title: 'Big Big Burger', price: 444, amount: 4 },
      { id: 4, title: 'Big Big Burger', price: 566, amount: 4 },
      { id: 5, title: 'Big Big Burger', price: 160, amount: 2 },
      { id: 6, title: 'Big Big Burger', price: 104, amount: 1 },
    ],
  },
  {
    id: 2,
    totalPrice: 555,
    order: [
      { id: 1, title: 'Small Burger', price: 100, amount: 1 },
      { id: 2, title: 'Small Burger', price: 788, amount: 6 },
      { id: 3, title: 'Small Burger', price: 444, amount: 4 },
      { id: 4, title: 'Small Burger', price: 566, amount: 4 },
      { id: 5, title: 'Small Burger', price: 160, amount: 2 },
    ],
  },
  {
    id: 3,
    totalPrice: 888,
    order: [
      { id: 1, title: 'Cakes', price: 100, amount: 1 },
      { id: 2, title: 'Cakes', price: 788, amount: 6 },
      { id: 3, title: 'Cakes', price: 444, amount: 4 },
    ],
  },
  {
    id: 4,
    totalPrice: 888,
    order: [{ id: 1, title: 'Cakes', price: 100, amount: 1 }],
  },
];

const History = () => {
  return (
    <div>
      <HistoryForm />

      {orders.length === 0 && <p>No orders</p>}
      {orders.length > 0 && <HistoryList orders={orders} />}
    </div>
  );
};

export default History;
