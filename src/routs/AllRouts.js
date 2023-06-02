import SharedLayout from 'components/SharedLayout/SharedLayout';
import OrdersHistoryPage from 'pages/OrdersHistoryPage/OrdersHistoryPage';
import ShoppingCartPage from 'pages/ShoppingCartPage/ShoppingCartPage';
import ShopsPage from 'pages/ShopsPage/ShopsPage';
import { Navigate, Route, Routes } from 'react-router-dom';

const AllRouts = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<SharedLayout />}>
          <Route index element={<ShopsPage />} />
          <Route path="shop-cart" element={<ShoppingCartPage />} />
          <Route path="history" element={<OrdersHistoryPage />} />
          <Route path="*" element={<Navigate to="/" replace={true} />} />
        </Route>
      </Routes>
    </>
  );
};

export default AllRouts;
