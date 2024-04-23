import { useEffect, useState } from "react";
import { useAppDispatch } from "@/store/hooks";
import { addToCart } from "@/store/cart/cartSlice";
import { actLikeToggle } from "@/store/wishlist/wishlistSlice";
import { productType } from "@/types";
interface ProductProps {
  productData: productType;
}
const useProduct = ({ productData }: ProductProps) => {
  const dispatch = useAppDispatch();
  const [isBtnDisabled, setIsBtnDisabled] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const currentRemainingQuantity =
    productData.max - (productData.quantity ?? 0);
  const quantityReachedToMax = currentRemainingQuantity <= 0 ? true : false;

  useEffect(() => {
    if (!isBtnDisabled) {
      return;
    }

    const debounce = setTimeout(() => {
      setIsBtnDisabled(false);
    }, 300);

    return () => clearTimeout(debounce);
  }, [isBtnDisabled]);

  const addToCartHandler = () => {
    dispatch(addToCart(productData.id));
    setIsBtnDisabled(true);
  };
  const likeToggleHandler = () => {
    if (!isLoading) {
      setIsLoading(true);
      dispatch(actLikeToggle(productData.id))
        .unwrap()
        .then(() => setIsLoading(false))
        .catch(() => setIsLoading(false));
    }
  };

  return {
    addToCartHandler,
    likeToggleHandler,
    quantityReachedToMax,
    isBtnDisabled,
    isLoading,
  };
};
export default useProduct;
