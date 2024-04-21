import { useAppDispatch, useAppSelector } from "@/store/hooks";
import { actGetCategories } from "@/store/categories/actions/actGetCategories";
import { CleanUpCategoriesRecords } from "@/store/categories/categoriesSlice";
import { useEffect } from "react";

const useCategories = () => {
  const dispatch = useAppDispatch();

  // Fetch categories from the store
  const { loading, error, records } = useAppSelector(
    (state) => state.categories
  );

  useEffect(() => {
    const promise = dispatch(actGetCategories());

    return () => {
      promise.abort();
      dispatch(CleanUpCategoriesRecords());
    };
  }, [dispatch]);
  return { loading, error, records };
};
export default useCategories;
