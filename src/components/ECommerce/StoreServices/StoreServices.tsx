import Shipping from "@/assets/svg/shipping.svg?react";
import Best from "@/assets/svg/best.svg?react";
import Return from "@/assets/svg/return.svg?react";
import Payment from "@/assets/svg/payment.svg?react";
import styles from "./styles.module.css";

const serviceItems = [
  {
    Icon: Shipping,
    title: "Free Shipping",
    description: "Free Shipping on Payment",
  },
  {
    Icon: Return,
    title: "Return Policy",
    description: "24 Hours Return Policy",
  },
  {
    Icon: Best,
    title: "Best Quality",
    description: "Best Quality Products",
  },
  {
    Icon: Payment,
    title: "Secured Payment",
    description: "Secure Card Payments",
  },
];

const StoreServices = () => {
  return (
    <div className={styles.bestServices}>
      {serviceItems.map((item, index) => (
        <div className={styles.item} key={index}>
          <div className="iconContainer"></div>
          <div className={styles.svgInline}>
            <item.Icon />
          </div>
          <div>
            <p className={styles.textBlack}>{item.title}</p>
            <p className={`${styles.textSm} ${styles.textQgray}`}>
              {item.description}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
};
export default StoreServices;
