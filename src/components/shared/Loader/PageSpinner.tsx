import { ThreeCircles } from "react-loader-spinner";
import styles from "./styles.module.css";
const { centeredSpinner } = styles;

const PageLoader = () => {
  return (
    <div className={centeredSpinner}>
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

export default PageLoader;
