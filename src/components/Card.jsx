import { TbListDetails, TbShoppingBagCheck } from "react-icons/tb";
import { Link } from "react-router";
import { shortenText } from "../helpers/helper";

import styles from "./Card.module.css";

function Card({ data }) {
  const { id, title, price, image } = data;
  return (
    <div className={styles.card}>
      <img src={image} alt={title} />
      <h3>{shortenText(title)}</h3>
      {/* در بالا این فانکش رو داخل هلپرز ساختیم و اینجا ازش استفاده میکنیم */}
      <p>{price} $</p>
      <div className={styles.actions}>
        <Link to={`/products/${id}`}>
          <TbListDetails />
          {/* از ری اکت آیکونس استفاده میکنیم */}
        </Link>
        {/* چون لینک نیاید ریلود کنه از این Link استفاده کریدم */}

        <div>
          <button>
            <TbShoppingBagCheck />
            {/* از ری اکت آیکونس استفاده میکنیم */}
          </button>
        </div>
      </div>
    </div>
  );
}

export default Card;
