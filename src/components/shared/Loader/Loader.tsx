import { ThreeCircles } from "react-loader-spinner";
import { loadingType } from "@/types";
import styles from "./styles.module.css";
const { centeredSpinner } = styles;

type LoadingProps = {
  status: loadingType;
  error: null | string;
  children: React.ReactNode;
};
const Loader = ({ status, error, children }: LoadingProps) => {
  if (status === "pending") {
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
  }
  if (status === "failed") {
    return <div className={centeredSpinner}>{error}</div>;
  }
  return <div>{children}</div>;
};

export default Loader;
