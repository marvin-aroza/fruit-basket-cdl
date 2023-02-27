import "./App.css";
import React, { useState, useEffect } from "react";

import Header from "./components/common/Header/Header";
import Product from "./components/pages/Product/Product";
import Cart from "./components/pages/Cart/Cart";

const products = [
  {
    id: 1,
    price: 50,
    specialOffer: { quantity: 3, price: 130 },
    name: "Apple",
  },
  { id: 2, price: 30, name: "Banana" },
  {
    id: 3,
    price: 20,
    name: "Cherry",
    specialOffer: { quantity: 2, price: 35 },
  },
  { id: 4, price: 15, name: "Dragon Fruit" },
];

function App() {
  const [productList, setProducts] = useState([]);
  const [productInCartList, setproductInCartList] = useState([]);

  useEffect(() => {
    // Api call to get the list of products can be added here
    setProducts(products);
  }, []);

  function addItemToBasket(product) {
    setproductInCartList([...productInCartList, product]);
  }

  function deleteItemFromCart(product) {
    setproductInCartList(productInCartList.filter((item) => item !== product));
  }

  function calculateTotalCartPrice() {
    let total = 0;

    return total;
  }

  return (
    <div className="App">
      <Header />
      <section className="grid-container">
        <Product productList={productList} addItemToBasket={addItemToBasket} />
        <Cart
          productInCartList={productInCartList}
          deleteItemFromCart={deleteItemFromCart}
          calculateTotalCartPrice={calculateTotalCartPrice}
        />
      </section>
    </div>
  );
}

export default App;
