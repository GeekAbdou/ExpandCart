import React from "react";
import "./BestSeller.css"; // Ensure you create this CSS file
import { Button, Spinner } from "react-bootstrap";
import useProduct from "@/hooks/useProduct"; // Import the useProduct hook
import { productType } from "@/types";

function BestSeller() {
  const products = [
    {
      id: 385,
      title: "LD-002H 3D Printer (WOW DEAL!)",
      price: 24500.0,
      oldPrice: "27,999.00",
      productLink:
        "https://crealityegypt.com/products/ld-002h-3d-printer-wow-deal--385",
      img: "https://crealityegypt.com/ecdata/stores/OWEIQG1011/image/data/LD-002H-主图-1-英.jpg",
      max: 5,
    },
    {
      id: 375,
      title: "Ender-3 V2 3D Printer",
      price: 20000.0,
      oldPrice: "24,000.00",
      productLink:
        "https://crealityegypt.com/products/ender-3-v2-3d-printer-375",
      img: "https://crealityegypt.com/ecdata/stores/OWEIQG1011/image/data/Ender-3 V2--英文主图.jpg",
      max: 5,
    },
    {
      id: 391,
      title: "CR-10 Smart 3D Printer",
      price: 37019.0,
      oldPrice: "40,000.00",
      productLink:
        "https://crealityegypt.com/products/cr-10-smart-3d-printer-391",
      img: "https://crealityegypt.com/ecdata/stores/OWEIQG1011/image/data/CR-10Smart3DPrinter_dcf0f400-1014-4033-9e29-84655a97f47d_1024x1024.jpg",
      max: 5,
    },
  ];

  return (
    <>
      <h2 className="title">Best Seller</h2>
      <div className="product-catalog">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </>
  );
}

function ProductCard({ product }: { product: productType }) {
  const { addToCartHandler, isBtnDisabled, quantityReachedToMax } = useProduct({
    productData: product,
  });

  return (
    <div className="product-card">
      <div className="product-image">
        <img src={product.img} alt={product.title} />
      </div>
      <div className="product-details">
        <p>{product.title}</p>
        <p className="product-pricing">
          <span className="old-price">{product.oldPrice} EGP</span>
          <span className="current-price">{product.price.toFixed(2)} EGP</span>
        </p>

        <Button
          variant="info"
          className="add-to-cart-btn"
          style={{ color: "white" }}
          onClick={() => addToCartHandler()}
          disabled={isBtnDisabled || quantityReachedToMax}
        >
          {isBtnDisabled ? (
            <>
              <Spinner animation="border" size="sm" /> Loading...
            </>
          ) : (
            "Add to cart"
          )}
        </Button>
      </div>
    </div>
  );
}

export default BestSeller;
