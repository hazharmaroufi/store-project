import { createContext, useContext, useEffect, useState } from "react";
import api from "../services/config";

const ProductContext = createContext();
// کانتکس رو میسازیم که دیتا رو توش قرار بدیم

function ProductsProvider({ children }) {
  const [products, setProducts] = useState([]);
  //   دیتایی که فتچ شده رو میریزیم داخل استیت

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        setProducts(await api.get("/products"));
        //   اطلاعات رو با اویت میگیریم و اکسیوس
      } catch (error) {
        console.log(error.message);
      }
    };

    fetchProducts();
  }, []);
  // داخل یوز افکت دیتا رو میگیریم با فتچ و ای سینک

  return (
    <ProductContext.Provider value={products}>
      {children}
    </ProductContext.Provider>
  );
  //    با اینکار وقتی پروداکتس پرووایدر رو رپ کردیم دور هر کامپوننتی ، اون کانتکس میاد داخل کامپوننت
  //  قرار میگیره و به اطلاعات اون کانتکس داخل اون کامپوننت قابل دسترسیه
  //   و اون اطلاعات همون استیت پروداکتس هستش که داخل ولبو قراردادیم
}

// یک کاستوم هوک درست میکنیم که به عنوان یک فانکشن داخلش دیتا رو بگیره و فقط همونو منتقل کنم
const useProducts = () => {
  const products = useContext(ProductContext);
  return products;
  //   خوب نفهمیدم ولی اینجا پروداکتز رو گرفتیم و ریترن کردیم
};

export default ProductsProvider;
export { useProducts };

// اینجا کل فانکش رو اکپورت میکنیم که بعدا استفاده کنیم
