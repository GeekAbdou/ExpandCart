import CategorySkeleton from "@/components/shared/loadingFallbacks/CategorySkeleton/CategorySkeleton";
import ProductSkeleton from "@/components/shared/loadingFallbacks/ProductSkeleton/ProductSkeleton";
import CartSkeleton from "@/components/shared/loadingFallbacks/CartSkeleton/CartSkeleton";
import HomeSkeleton from "@/components/shared/loadingFallbacks/HomeSkelton/HomeSkeleton";
import LottieHandler from "@/components/shared/loadingFallbacks/LottieHandler/LottieHandler";

import { loadingType } from "@/types";

const skeletonsTypes = {
  category: CategorySkeleton,
  product: ProductSkeleton,
  cart: CartSkeleton,
  home: HomeSkeleton,
};

type LoadingProps = {
  status: loadingType;
  error: null | string;
  children: React.ReactNode;
  type?: keyof typeof skeletonsTypes;
};

const Loading = ({
  status,
  error,
  children,
  type = "category",
}: LoadingProps) => {
  const Component = skeletonsTypes[type];

  if (status === "pending") {
    return <Component />;
  }
  if (status === "failed") {
    return (
      <div>
        <LottieHandler type="error" message={error as string} />
      </div>
    );
  }
  return <div>{children}</div>;
};

export default Loading;
