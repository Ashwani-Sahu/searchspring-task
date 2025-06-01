import React from "react";
import "./ProductCard.css";
import defaultThumbnail from "../assets/img-not-available.png";
import { FiShoppingCart } from "react-icons/fi";

const ProductCard = ({
  product,
  setTotalProductsAddedToCart,
  totalProductsAddedToCart,
}) => {
  const { name, price, msrp, thumbnailImageUrl } = product;
  const mrp = Number(msrp);
  const actualPrice = Number(price);
  const discount =
    mrp && mrp > actualPrice
      ? Math.round(((mrp - actualPrice) / mrp) * 100)
      : null;

  return (
    <div className="product-card">
      {discount && <div className="discount-badge">{discount}% OFF</div>}
      <div className="image-wrapper">
        <img
          src={thumbnailImageUrl}
          alt={name}
          loading="lazy"
          onError={(e) => {
            e.target.onerror = null;
            e.target.src = defaultThumbnail;
          }}
        />
      </div>
      <h3>{name}</h3>
      <div className="price-wrapper">
        <div>
          <span className="price">${actualPrice}</span>
          {mrp && mrp > actualPrice && <span className="msrp">${mrp}</span>}
        </div>
        <button
          onClick={() =>
            setTotalProductsAddedToCart(totalProductsAddedToCart + 1)
          }
          className="icon-button"
          aria-label="Cart"
        >
          <FiShoppingCart size={24} />
        </button>
      </div>
    </div>
  );
};

export default ProductCard;
