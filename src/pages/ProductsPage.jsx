import { useProducts } from "../context/ProductContext";
//  این  فانکشن ایمپورت رو از فایل کانتکس انجام دادیم که توش محصولات هستش

import styles from "./ProductsPage.module.css";

function ProductsPage() {
  const products = useProducts();
  // همون فانکشنی که ایمپورت کردیم

  console.log(products);
  return (
    <div className={styles.container}>
      <div className={styles.products}>
        {products.map((p) => (
          <p key={p.id}>{p.title}</p>
        ))}
      </div>
      <div>sidebar</div>
    </div>
  );
}

export default ProductsPage;
