import { Navigate, Route, Routes } from "react-router"; // وقتی روتز رو پایین مینوسیم خودش اینو ایمپورت میکنه
import ProductsPage from "./pages/ProductsPage";
import DetailsPage from "./pages/DetailsPage";
import CheckoutPage from "./pages/CheckoutPage";
import PageNotFound from "./pages/404";

function App() {
  return (
    <Routes>
      {/* صفحات رو که داخل پیجز ساختیم یکی یکی اضافه میکنیم پایین */}
      <Route index element={<Navigate to="/products" replace />} />
      {/* برای اینکه هرکی اومد صفحه اصلی بفرسته تو پروداکتز و لوپ نخوره از نویگیت و ریپلیس استفاده کردیم */}
      <Route path="/products" element={<ProductsPage />} />
      <Route path="/products/:id" element={<DetailsPage />} />
      {/* برای اینکه لینک دینامیک بشه بعد پت دو نقطه قرای میدیم و هرچیز خواستیم بعدش مینویسیم  */}
      <Route path="/checkout" element={<CheckoutPage />} />
      <Route path="/*" element={<PageNotFound />} />
    </Routes>
  );
}

export default App;
