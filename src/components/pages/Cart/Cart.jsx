import React from "react";
import "./Cart.css";

export default function Cart({ productInCartList, deleteItemFromCart }) {
  /*Reduces the cart list to get the total of all the products added in cart*/
  let total = productInCartList.reduce((accumulator, cartProduct) => {
    const { cartQuanity, price, specialOffer } = cartProduct;

    if (specialOffer && cartQuanity >= specialOffer.quantity) {
      const offerQuantity = Math.trunc(cartQuanity / specialOffer.quantity);
      const nonOfferQuantity = Math.ceil(cartQuanity % specialOffer.quantity);

      const offerPrice = offerQuantity * specialOffer.price;
      const nonOfferPrice = nonOfferQuantity * price;

      return accumulator + (offerPrice + nonOfferPrice);
    } else {
      return accumulator + cartQuanity * price;
    }
  }, 0);

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
                    <img
                      src={product.image}
                      alt="Item 1"
                    />
                    <div className="item-detail">
                      <h3>{product.name}</h3>
                      <p>Price: {product.price}p</p>
                      <p>Quantity: {product.cartQuanity}</p>
                    </div>
                    <div className="remove-item-div">
                      <button onClick={() => deleteItemFromCart(product)}>
                        Remove
                      </button>
                    </div>
                  </li>
                ))}
                <hr />
                <div>Total Cart Amount: {total} pence</div>
              </ul>
            ) : (
              <ul>No Items in cart</ul>
            )}
          </div>
          {productInCartList.length > 0 ? (
            <div className="cart-button-div">
              <button className="checkout-button">Proceed to checkout</button>
            </div>
          ) : (
            <></>
          )}
        </div>
      </div>
    </>
  );
}
