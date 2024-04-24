import BestSeller from "@/components/ECommerce/BestSeller/BestSeller";
import Slider from "@/components/ECommerce/Slider/Slider";
import StoreServices from "@/components/ECommerce/StoreServices/StoreServices";

const Home = () => {
  return (
    <>
      <Slider />
      <StoreServices />
      <BestSeller />
    </>
  );
};

export default Home;
