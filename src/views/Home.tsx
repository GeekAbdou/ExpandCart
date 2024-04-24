import BestSeller from "@/components/ECommerce/BestSeller/BestSeller";
import ProductCatalog from "@/components/ECommerce/ProductCataloge/ProductCatalog";
import Slider from "@/components/ECommerce/Slider/Slider";
import StoreServices from "@/components/ECommerce/StoreServices/StoreServices";

const Home = () => {
  return (
    <>
      <Slider />
      <StoreServices />
      <BestSeller />
      <ProductCatalog />
    </>
  );
};

export default Home;
