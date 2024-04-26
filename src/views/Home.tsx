import BestSeller from "@/components/ECommerce/BestSeller/BestSeller";
import ProductCatalog from "@/components/ECommerce/ProductCatalog/ProductCatalog";
import Carousel from "@/components/ECommerce/Carousel/Carousel";
import StoreServices from "@/components/ECommerce/StoreServices/StoreServices";

const Home = () => {
  return (
    <>
      <Carousel />
      <StoreServices />
      <BestSeller />
      <ProductCatalog />
    </>
  );
};

export default Home;
