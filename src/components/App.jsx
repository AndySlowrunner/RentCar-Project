import Catalog from "pages/Catalog";
import Favorites from "pages/Favorites";
import HomePage from "pages/HomePage";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { Route, Routes } from "react-router"
import { fetchCars } from "../redux/operations";
import SharedLayout from './SharedLayout/SharedLayout';

export const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchCars());
  }, [dispatch]);

  return (
    <div>
      <Routes>
        <Route path="/" element={<SharedLayout />} >
          <Route index element={<HomePage />} />
          <Route path="/catalog" element={<Catalog />} />
          <Route path="/favorites" element={<Favorites />} />
          <Route path="*" element={<HomePage />} />
        </Route>
      </Routes>
    </div>
  );
};
