import { useEffect } from "react";
import { Category } from "@/components/eCommerce";
import { useAppDispatch, useAppSelector } from "@/store/hooks";
import { actGetCategories } from "@/store/categories/actions/actGetCategories";
import { GridList, Heading, Loader } from "@/components/shared/index";
import { categoryType } from "@/types";
import { CleanUpCategoriesRecords } from "@/store/categories/categoriesSlice";
const Categories = () => {
  const dispatch = useAppDispatch();

  // Fetch categories from the store
  const { loading, error, records } = useAppSelector(
    (state) => state.categories
  );

  useEffect(() => {
    dispatch(actGetCategories());

    return () => {
      dispatch(CleanUpCategoriesRecords());
    };
  }, [dispatch]);

  return (
    <Loader status={loading} error={error}>
      <Heading children={<h1>Categories</h1>} />
      <GridList<categoryType>
        records={records}
        renderItem={(category) => (
          <Category key={category.id} categoryData={category} />
        )}
      />
    </Loader>
  );
};

export default Categories;
