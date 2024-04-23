import { useEffect, useState } from "react";
import { useAppSelector } from "@/store/hooks";
import { getCartTotalItemsSelector, getWishlistTotalItemsSelector } from "@/store/selectors";
import Cart from "@/assets/svg/cart.svg?react";
import Wishlist from "@/assets/svg/wishlist.svg?react";
import styles from "./styles.module.css";
import { Link } from "react-router-dom";

const { basketContainer, basketQuantity, pumpCartQuantity, basketCart, leftContainer } = styles;

const useAnimate = (totalItems: number) => {
  const [isAnimate, setIsAnimate] = useState(false);

  useEffect(() => {
    if (totalItems) {
      setIsAnimate(true);
      const debounce = setTimeout(() => {
        setIsAnimate(false);
      }, 300);
      return () => clearTimeout(debounce);
    }
  }, [totalItems]);

  return isAnimate;
};

const HeaderBasket = () => {
  const totalCartItems = useAppSelector(getCartTotalItemsSelector);
  const totalWishlistItems = useAppSelector(getWishlistTotalItemsSelector);
  const isCartAnimate = useAnimate(totalCartItems);
  const isWishlistAnimate = useAnimate(totalWishlistItems);

  return (
    <div className={leftContainer}>
      <Link to="/wishlist" className={basketContainer}>
        <div className={basketCart}>
          <Wishlist title="wishlist icon" />
          <div className={`${basketQuantity} ${isWishlistAnimate ? pumpCartQuantity : ""}`}>
            {totalWishlistItems}
          </div>
        </div>
        <h3>Wishlist</h3>
      </Link>
      <Link to="/cart" className={basketContainer}>
        <div className={basketCart}>
          <Cart title="cart icon" />
          <div className={`${basketQuantity} ${isCartAnimate ? pumpCartQuantity : ""}`}>
            {totalCartItems}
          </div>
        </div>
        <h3>Cart</h3>
      </Link>
    </div>
  );
};

export default HeaderBasket;
