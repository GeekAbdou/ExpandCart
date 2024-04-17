import { useEffect } from "react";
import { Category } from "@/components/eCommerce";
import { useAppDispatch, useAppSelector } from "@/store/hooks";
import { actGetCategories } from "@/store/categories/actions/actGetCategories";
import GridList from "@/components/shared/GridList/GridList";
import Loading from "@/components/shared/Loader/Loader";
import { categoryType } from "@/types";

const Categories = () => {
  const dispatch = useAppDispatch();

  // Fetch categories from the store
  const { loading, error, records } = useAppSelector(
    (state) => state.categories
  );

  useEffect(() => {
    if (!records.length) {
      dispatch(actGetCategories());
    }
  }, [dispatch, records.length]);

  return (
    <Loading loading={loading} error={error}>
      <GridList<categoryType>
        records={records}
        renderItem={(category) => (
          <Category key={category.id} categoryData={category} />
        )}
      />
    </Loading>
  );
};

export default Categories;
