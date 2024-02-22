import Cataloge from "pages/Cataloge";
import Favorite from "pages/Favorite";
import HomePage from "pages/HomePage";
import { Route, Routes } from "react-router"

export const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/cataloge" element={<Cataloge />} />
        <Route path="/favorite" element={<Favorite />} />
        <Route path="*" element={<HomePage />} />
      </Routes>
    </div>
  );
};
