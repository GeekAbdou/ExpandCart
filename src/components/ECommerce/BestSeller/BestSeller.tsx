import BestSellerItem from "./BestSellerItem";
import styles from "./styles.module.css";
import useBestSeller from "@/hooks/useBestSeller";

function BestSeller() {
  const productsFullInfo = useBestSeller();
  console.log(productsFullInfo);

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
