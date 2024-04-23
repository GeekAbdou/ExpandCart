import { useEffect, useState } from "react";
import { useAppSelector } from "@/store/hooks";
import {
  getCartTotalItemsSelector,
  getWishlistTotalItemsSelector,
} from "@/store/selectors";
import Cart from "@/assets/svg/cart.svg?react";
import Wishlist from "@/assets/svg/wishlist.svg?react";
import Profile from "@/assets/svg/user.svg?react";
import Search from "@/assets/svg/search.svg?react";
import styles from "./styles.module.css";
import { Link } from "react-router-dom";

const {
  basketContainer,
  basketQuantity,
  pumpCartQuantity,
  basketCart,
  leftContainer,
  inputGroup,
  inputGroupAppend,
  SearchInput,
} = styles;

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

const UserNav = () => {
  const totalCartItems = useAppSelector(getCartTotalItemsSelector);
  const totalWishlistItems = useAppSelector(getWishlistTotalItemsSelector);
  const isCartAnimate = useAnimate(totalCartItems);
  const isWishlistAnimate = useAnimate(totalWishlistItems);

  return (
    <>
      <div className={inputGroup} id="search">
        <input
          type="text"
          className={SearchInput}
          name="search"
          placeholder="Search"
          value=""
        />
        <div className={inputGroupAppend}>
          <button
            className="search-button button-search btn btn-link btn-sm"
            type="button"
          >
            <Search />
          </button>
        </div>
      </div>

      <div className={leftContainer}>
        <Link to="/profile" className={basketContainer}>
          <div className={basketCart}>
            <Profile title="cart icon" />
          </div>
        </Link>
        <Link to="/wishlist" className={basketContainer}>
          <div className={basketCart}>
            <Wishlist title="wishlist icon" />
            <div
              className={`${basketQuantity} ${
                isWishlistAnimate ? pumpCartQuantity : ""
              }`}
            >
              {totalWishlistItems}
            </div>
          </div>
        </Link>
        <Link to="/cart" className={basketContainer}>
          <div className={basketCart}>
            <Cart title="cart icon" />
            <div
              className={`${basketQuantity} ${
                isCartAnimate ? pumpCartQuantity : ""
              }`}
            >
              {totalCartItems}
            </div>
          </div>
          <h3>Cart</h3>
        </Link>
      </div>
    </>
  );
};

export default UserNav;
