import { useEffect, useState } from "react";
import { useAppSelector } from "@/store/hooks";
import { getCartTotalItemsSelector } from "@/store/selectors";
import Logo from "@/assets/svg/cart.svg?react";

import styles from "./styles.module.css";
import { Link } from "react-router-dom";
const { basketContainer, basketQuantity, pumpCartQuantity, basketCart } =
  styles;

const HeaderBasket = () => {
  const [isAnimate, setIsAnimate] = useState(false);
  const totalQuantity = useAppSelector(getCartTotalItemsSelector);
  const quantityStyle = `${basketQuantity} ${
    isAnimate ? pumpCartQuantity : ""
  }`;

  useEffect(() => {
    if (!totalQuantity) {
      return;
    }
    setIsAnimate(true);

    const debounce = setTimeout(() => {
      setIsAnimate(false);
    }, 300);

    return () => clearTimeout(debounce);
  }, [totalQuantity]);

  /*useEffect(() => {
    dispatch(getProductsFullInfo());
  }, [dispatch]);*/

  return (
    <Link to="/cart" className={basketContainer}>
      <div className={basketCart}>
        <Logo title="basket icon" />
        <div className={quantityStyle}>{totalQuantity}</div>
      </div>
      <h3>Cart</h3>
    </Link>
  );
};

export default HeaderBasket;
