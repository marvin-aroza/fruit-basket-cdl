import React, { useState } from "react";
import "./Product.css";

const products = [
  {
    id: 1,
    price: 50,
    specialOffer: { quantity: 3, price: 130 },
    name: "Apple",
  },
  { id: 2, price: 30, name: "Banana" },
  { id: 3, price: 20, name: "Cat", specialOffer: { quantity: 2, price: 35 } },
  { id: 4, price: 15, name: "Dragon Fruit" },
];

const Product = () => {
  const [basket, setBasket] = useState({});

  const addItemToBasket = (id) => {
    setBasket((prevBasket) => ({
      ...prevBasket,
      [id]: (prevBasket[id] || 0) + 1,
    }));
  };


  return (
    <div className="product-listing">
      {products.map((product) => (
        <div className="product-card" key={product.id}>
          <div className="product-image">
            <img
              src="https://www.collinsdictionary.com/images/full/apple_158989157.jpg"
              alt="Product"
            />
          </div>
          <div className="product-info">
            <h2 className="product-title">{product.name}</h2>
            <p className="product-price">${product.price}</p>
            <p className="product-description">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </p>
            {product.specialOffer && (
              <p className="product-price">
                Special Offer: Buy {product.specialOffer.quantity} for{" "}
                {product.specialOffer.price}
              </p>
            )}
          </div>
          <div>
            <button
              className="add-to-cart"
              onClick={() => addItemToBasket(product.id)}
            >
              Add to Cart
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Product;