import React, { useState } from "react";
import "./Product.css";

export default function Product({ productList, addItemToBasket }) {
  return (
    <>
      <div className="product-listing">
        {productList.map((product) => (
          <div className="product-card" key={product.id}>
            <div className="product-image">
              <img
                src={product.image}
                alt="Product"
              />
            </div>
            <div className="product-info">
              <h2 className="product-title">{product.name}</h2>
              <p className="product-price">{product.price}p</p>
              <p className="product-description">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              </p>
              {product.specialOffer && (
                <p className="product-price">
                  Special Offer: Buy {product.specialOffer.quantity} for{" "}
                  {product.specialOffer.price}p
                </p>
              )}
            </div>
            <div>
              <button
                className="add-to-cart"
                onClick={() => addItemToBasket(product)}
              >
                Add to Cart
              </button>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}
