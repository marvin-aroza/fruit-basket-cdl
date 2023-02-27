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
    let productIndex = productInCartList.findIndex(
      (p) => p.id === Number(product.id)
    );

    if (productIndex > -1) {
      productInCartList[productIndex].cartQuanity =
        productInCartList[productIndex].cartQuanity == null
          ? 2
          : productInCartList[productIndex].cartQuanity + 1;
    } else {
      product.cartQuanity = 1;
      setproductInCartList([...productInCartList, product]);
    }
    console.log(productInCartList);
  }

  function deleteItemFromCart(product) {
    setproductInCartList(productInCartList.filter((item) => item !== product));
  }

  return (
    <div className="App">
      <Header />
      <section className="grid-container">
        <Product productList={productList} addItemToBasket={addItemToBasket} />
        <Cart
          productInCartList={productInCartList}
          deleteItemFromCart={deleteItemFromCart}
        />
      </section>
    </div>
  );
}

export default App;
