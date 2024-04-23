import Shipping from "@/assets/svg/shipping.svg?react";
import Best from "@/assets/svg/best.svg?react";
import Return from "@/assets/svg/return.svg?react";
import Payment from "@/assets/svg/payment.svg?react";
import "./StoreServices.css";
const serviceItems = [
  {
    Icon: Shipping,
    title: "Free Shipping",
    description: "Free Shipping on Payment",
  },
  {
    Icon: Return,
    title: "Return Policy",
    description: "24 Hours Return Policy",
  },
  {
    Icon: Best,
    title: "Best Quality",
    description: "Best Quality Products",
  },
  {
    Icon: Payment,
    title: "Secured Payment",
    description: "Secure Card Payments",
  },
];

const StoreServices = () => {
  return (
    <div className="best-services" data-aos="fade-up">
      {serviceItems.map((item, index) => (
        <div className="item" key={index}>
          <div className="icon-container">
            <item.Icon />
          </div>
          <div>
            <p className="text-black">{item.title}</p>
            <p className="text-sm text-qgray">{item.description}</p>
          </div>
        </div>
      ))}
    </div>
  );
};
export default StoreServices;
