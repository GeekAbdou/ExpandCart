import Logo from "@/assets/svg/cart.svg?react";
import { getCartTotalItems } from "@/store/cart/cartSlice";
import { useAppSelector } from "@/store/hooks";
import styles from "./styles.module.css";
const { basketContainer, basketQuantity } = styles;

const HeaderBasket = () => {
  const totalItems = useAppSelector(getCartTotalItems);

  return (
    <div className={basketContainer}>
      <Logo title="basket icon" />
      <div className={basketQuantity}>{totalItems}</div>
    </div>
  );
};

export default HeaderBasket;
