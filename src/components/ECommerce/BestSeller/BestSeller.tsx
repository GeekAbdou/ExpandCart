import useBestSeller from "@/hooks/useBestSeller";
import BestSellerItem from "./BestSellerItem";
import styles from "./styles.module.css";
function BestSeller() {
  const { productsFullInfo, loading } = useBestSeller();

  if (loading === "succeeded")
    return (
      <>
        <h2 className={styles.bestsellerTitle}>Best Sellers</h2>
        <div className={`${styles.bestsellerWrapper} ${styles.gridContainer}`}>
          {productsFullInfo.map((product) => (
            <BestSellerItem key={product.id} product={product} />
          ))}
        </div>
      </>
    );
}
export default BestSeller;
