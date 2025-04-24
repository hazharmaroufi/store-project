import Card from "../components/Card";
import Loader from "../components/Loader";

import { useProducts } from "../context/ProductContext";
//  این  فانکشن ایمپورت رو از فایل کانتکس انجام دادیم که توش محصولات هستش

import styles from "./ProductsPage.module.css";

function ProductsPage() {
  const products = useProducts();
  // همون فانکشنی که ایمپورت کردیم

  return (
    <div className={styles.container}>
      <div className={styles.products}>
        {!products.length && <Loader />}
        {products.map((p) => (
          <Card key={p.id} data={p} />
        ))}
      </div>
      <div>sidebar</div>
    </div>
  );
}

export default ProductsPage;
