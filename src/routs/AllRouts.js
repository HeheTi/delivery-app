import { Navigate, Route, Routes } from 'react-router-dom';
import SharedLayout from 'components/SharedLayout';
import CouponsPage from 'pages/CouponsPage';
import OrdersHistoryPage from 'pages/OrdersHistoryPage';
import ShoppingCartPage from 'pages/ShoppingCartPage';
import ShopsPage from 'pages/ShopsPage';

const AllRouts = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<SharedLayout />}>
          <Route index element={<ShopsPage />} />
          <Route path="shop-cart" element={<ShoppingCartPage />} />
          <Route path="history" element={<OrdersHistoryPage />} />
          <Route path="coupons" element={<CouponsPage />} />
        </Route>
        <Route path="*" element={<Navigate to="/" replace={true} />} />
      </Routes>
    </>
  );
};

export default AllRouts;
