import { Category } from "@/components/eCommerce";
import { GridList, Heading } from "@/components/shared/index";
import { categoryType } from "@/types";
import useCategories from "@/hooks/useCategories";
import { Loading } from "@/components/shared/loadingFallbacks";
const Categories = () => {
  const { loading, error, records } = useCategories();
  
  return (
    <Loading status={loading} error={error} type="category">
      <Heading title="Categories" />
      <GridList<categoryType>
        emptyMessage="There are no categories"
        records={records}
        renderItem={(category) => (
          <Category key={category.id} categoryData={category} />
        )}
      />
    </Loading>
  );
};

export default Categories;
