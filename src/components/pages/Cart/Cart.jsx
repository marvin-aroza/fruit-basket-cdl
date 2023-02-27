import React, { useState } from "react";
import "./Cart.css";

export default function Cart({ productInCartList, deleteItemFromCart,calculateTotalCartPrice }) {
  return (
    <>
      <div>
        <div className="cart">
          <div className="cart-body">
            <div className="cart-header">
              <h4>Cart</h4>
            </div>
            {productInCartList.length > 0 ? (
            <ul className="cart-listing">
              {productInCartList.map((product) => (
                <li key={product.id} className="cart-item">
                  <img src="https://www.collinsdictionary.com/images/full/apple_158989157.jpg" alt="Item 1" />
                  <div className="item-detail">
                    <h3>{product.name}</h3>
                    <p>Price: ${product.price}</p>
                  </div>
                  <div className="remove-item-div">
                    <button onClick={() => deleteItemFromCart(product)}>Remove</button>
                  </div>
                </li>
              ))}
              <hr />
            <div>
                {calculateTotalCartPrice()}
            </div>
            </ul>
            
            ) : (
                <ul>No Items in cart</ul>
            )}
            
          </div>
          {productInCartList.length > 0 ? (
          <div className="cart-button-div">
            <button className="checkout-button">Proceed to checkout</button>
          </div>
          ) : (<></>)}
        </div>
      </div>
    </>
  );
}
