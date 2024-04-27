import { ThreeCircles } from "react-loader-spinner";
import styles from "./styles.module.css";
const HomeSkeleton = () => {
  return (
    <div className={styles.centeredSpinner}>
      <ThreeCircles
        visible={true}
        height="100"
        width="100"
        ariaLabel="TailSpin-loading"
        wrapperStyle={{}}
        wrapperClass="TailSpin-wrapper"
        color="#e30613"
      />
    </div>
  );
};

export default HomeSkeleton;
