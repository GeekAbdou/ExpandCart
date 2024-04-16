import { ThreeCircles } from "react-loader-spinner";
import { loadingType } from "@/types";
import styles from "./styles.module.css";
const { centeredSpinner } = styles;

type LoadingProps = {
  loading: loadingType;
  error: null | string;
  children: React.ReactElement;
};
const Loading = ({ loading, error, children }: LoadingProps) => {
  if (loading === "pending") {
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
  if (loading === "failed") {
    return <div className={centeredSpinner}>{error}</div>;
  }
  return <div>{children}</div>;
};

export default Loading;
