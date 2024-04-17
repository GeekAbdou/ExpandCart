import Logo from "@/assets/svg/cart.svg?react";
import { getCartTotalItemsSelector } from "@/store/selectors";
import { useAppSelector } from "@/store/hooks";
import styles from "./styles.module.css";
const { basketContainer, basketQuantity } = styles;

const HeaderBasket = () => {
  const totalItems = useAppSelector(getCartTotalItemsSelector);

  return (
    <div className={basketContainer}>
      <Logo title="basket icon" />
      <div className={basketQuantity}>{totalItems}</div>
    </div>
  );
};

export default HeaderBasket;
