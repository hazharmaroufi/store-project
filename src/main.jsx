import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router"; // در همون ابتدا برای مسیر ها نصبش میکنیم
import App from "./App.jsx";
import "./global.css";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    {/* بالا که نصبش کردم اینجا دور اپ قرادش میدم که بتونم داخل اپ ازش استفاده کنم  */}
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </StrictMode>
);
