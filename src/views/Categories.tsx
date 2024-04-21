import { Category } from "@/components/eCommerce";
import { GridList, Heading, Loader } from "@/components/shared/index";
import { categoryType } from "@/types";
import useCategories from "@/hooks/useCategories";
const Categories = () => {
  const { loading, error, records } = useCategories();
  return (
    <Loader status={loading} error={error}>
      <Heading title="Categories" />
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
