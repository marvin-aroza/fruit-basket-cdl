import React, { useState } from "react";
import "./Basket.css";

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

const Basket = () => {
  const [basket, setBasket] = useState({});

  const addItemToBasket = (id) => {
    setBasket((prevBasket) => ({
      ...prevBasket,
      [id]: (prevBasket[id] || 0) + 1,
    }));
  };

  return (
    <div>
      {products.map((product) => (
        <div key={product.id}>
          <div>
            <img
              src="https://www.collinsdictionary.com/images/full/apple_158989157.jpg"
              alt="Product"
            />
          </div>
          <div>
            <h2>{product.name}</h2>
            <p>${product.price}</p>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            {product.specialOffer && (
              <p>
                Special Offer: Buy {product.specialOffer.quantity} for{" "}
                {product.specialOffer.price}
              </p>
            )}
            <button onClick={() => addItemToBasket(product.id)}>
              Add to Cart
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Basket;
